import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const runeConversions = pgTable("rune_conversions", {
  id: serial("id").primaryKey(),
  koreanName: text("korean_name").notNull(),
  englishName: text("english_name").notNull(),
  runeText: text("rune_text").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertRuneConversionSchema = createInsertSchema(runeConversions).pick({
  koreanName: true,
  englishName: true,
  runeText: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type RuneConversion = typeof runeConversions.$inferSelect;
export type InsertRuneConversion = z.infer<typeof insertRuneConversionSchema>;
