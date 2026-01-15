import type { Language } from "@/lib/i18n";
import { romanizeKorean, commonNameMappings } from "@/lib/koreanRomanizer";
import { normalizeLatinInput } from "@/lib/runeConverter";
import { pinyin } from "pinyin-pro";
import * as wanakana from "wanakana";

export function romanizeNameByLanguage(input: string, language: Language): string {
  const cleanInput = input.trim();
  if (!cleanInput) return "";

  if (language === "ko") {
    const commonMapping = commonNameMappings[cleanInput];
    const romanized = commonMapping ? commonMapping : romanizeKorean(cleanInput);
    return normalizeLatinInput(romanized);
  }

  if (language === "ja") {
    // `wanakana` can romanize kana. If the user enters only kanji, it will remain unchanged.
    // In that case, fall back to the generic latin normalizer (which will likely return empty)
    // and let the user edit the romanized field manually.
    const romaji = wanakana.toRomaji(cleanInput);
    return normalizeLatinInput(romaji);
  }

  if (language === "zh") {
    const romanized = pinyin(cleanInput, {
      toneType: "none",
      type: "string",
      separator: "",
    });
    return normalizeLatinInput(romanized);
  }

  return normalizeLatinInput(cleanInput);
}
