import { users, runeConversions, type User, type InsertUser, type RuneConversion, type InsertRuneConversion } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRuneConversion(conversion: InsertRuneConversion): Promise<RuneConversion>;
  getAllRuneConversions(): Promise<RuneConversion[]>;
  getPopularRuneConversions(): Promise<RuneConversion[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private runeConversions: Map<number, RuneConversion>;
  private currentUserId: number;
  private currentConversionId: number;

  constructor() {
    this.users = new Map();
    this.runeConversions = new Map();
    this.currentUserId = 1;
    this.currentConversionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRuneConversion(insertConversion: InsertRuneConversion): Promise<RuneConversion> {
    const id = this.currentConversionId++;
    const conversion: RuneConversion = { ...insertConversion, id };
    this.runeConversions.set(id, conversion);
    return conversion;
  }

  async getAllRuneConversions(): Promise<RuneConversion[]> {
    return Array.from(this.runeConversions.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getPopularRuneConversions(): Promise<RuneConversion[]> {
    // Get unique conversions by Korean name (most recent)
    const uniqueConversions = new Map<string, RuneConversion>();
    
    for (const conversion of Array.from(this.runeConversions.values())) {
      const existing = uniqueConversions.get(conversion.koreanName);
      if (!existing || new Date(conversion.createdAt) > new Date(existing.createdAt)) {
        uniqueConversions.set(conversion.koreanName, conversion);
      }
    }

    return Array.from(uniqueConversions.values()).slice(0, 10);
  }
}

export const storage = new MemStorage();
