// netlify/functions/api.js
import express from 'express';
import serverless from 'serverless-http';
import { storage } from '../../server/storage';
import { insertRuneConversionSchema } from '../../shared/schema';
import { z } from 'zod';

const app = express();
app.use(express.json());

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
