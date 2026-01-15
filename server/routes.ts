import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRuneConversionSchema } from "@shared/schema";
import { z } from "zod";
import { romanizeJapaneseToRomaji } from "./japaneseRomanizer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/romanize/japanese", async (req, res) => {
    try {
      const bodySchema = z.object({ text: z.string().max(200) });
      const { text } = bodySchema.parse(req.body);

      const romaji = await romanizeJapaneseToRomaji(text);
      res.json({ romaji });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
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

  const httpServer = createServer(app);

  return httpServer;
}
