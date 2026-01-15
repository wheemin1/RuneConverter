// netlify/functions/api.js
import express from 'express';
import serverless from 'serverless-http';
import { storage } from '../../server/storage';
import { insertRuneConversionSchema } from '../../shared/schema';
import { z } from 'zod';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';
import path from 'node:path';

const app = express();
app.use(express.json());

let kuroshiroInstance = null;
let kuroshiroInitPromise = null;

async function getKuroshiro() {
  if (kuroshiroInstance) return kuroshiroInstance;
  if (kuroshiroInitPromise) return kuroshiroInitPromise;

  kuroshiroInitPromise = (async () => {
    const kuroshiro = new Kuroshiro();
    const dictPath = path.join(process.cwd(), 'node_modules', 'kuromoji', 'dict');
    await kuroshiro.init(new KuromojiAnalyzer({ dictPath }));
    kuroshiroInstance = kuroshiro;
    return kuroshiro;
  })();

  return kuroshiroInitPromise;
}

// API route for romanizing Japanese (including kanji)
app.post('/api/romanize/japanese', async (req, res) => {
  try {
    const bodySchema = z.object({ text: z.string().max(200) });
    const { text } = bodySchema.parse(req.body);
    const clean = String(text ?? '').trim();
    if (!clean) return res.json({ romaji: '' });

    const kuroshiro = await getKuroshiro();
    const romaji = await kuroshiro.convert(clean, { to: 'romaji', mode: 'spaced' });
    res.json({ romaji: String(romaji ?? '') });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Invalid data', details: error.errors });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// API route for saving rune conversions
app.post("/api/rune-conversions", async (req, res) => {
  try {
    const validatedData = insertRuneConversionSchema.parse({
      ...req.body,
      createdAt: new Date().toISOString()
    });
    
    const conversion = await storage.createRuneConversion(validatedData);
    res.json(conversion);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: "Invalid data", details: error.errors });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

// API route for getting rune conversions
app.get("/api/rune-conversions", async (req, res) => {
  try {
    const conversions = await storage.getAllRuneConversions();
    res.json(conversions);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route for getting popular conversions
app.get("/api/rune-conversions/popular", async (req, res) => {
  try {
    const conversions = await storage.getPopularRuneConversions();
    res.json(conversions);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export const handler = serverless(app);
