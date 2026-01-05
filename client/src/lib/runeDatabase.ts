// Elder Futhark rune database
// NOTE: All display text is localized via runeLocalizations.

import type { Language } from './i18n';
import { getRuneLocalization } from './runeLocalization';
import { elderFutharkRunesBase, getRuneBaseByCharacter, type RuneKey } from './runes';

export interface RuneDetail {
  id: number;
  key: RuneKey;
  character: string;
  phonetic: string;
  name: string;
  meaning: string;
  symbolism: string;
  keywords: string[];
  divination: string;
}

export const elderFutharkRunes = elderFutharkRunesBase;

export function getRuneByCharacter(character: string, language: Language): RuneDetail | undefined {
  const base = getRuneBaseByCharacter(character);
  if (!base) return undefined;
  const localized = getRuneLocalization(language, base.key);
  return {
    ...base,
    ...localized,
  };
}

export function getRuneDetails(runeText: string, language: Language): RuneDetail[] {
  const details: RuneDetail[] = [];

  for (const char of runeText) {
    const rune = getRuneByCharacter(char, language);
    if (rune) details.push(rune);
  }

  return details;
}
