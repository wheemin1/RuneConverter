import type { RuneKey } from './runes';

export type RuneThemeId =
  | 'success'
  | 'prosperity'
  | 'wisdom'
  | 'courage'
  | 'protection'
  | 'luck'
  | 'strength'
  | 'growth'
  | 'harmony'
  | 'balance'
  | 'creativity'
  | 'progress'
  | 'victory'
  | 'hope'
  | 'leadership'
  | 'communication'
  | 'journey'
  | 'adventure'
  | 'change'
  | 'intuition'
  | 'patience'
  | 'willpower'
  | 'passion'
  | 'focus'
  | 'completion'
  | 'insight';

export const POSITIVE_THEME_IDS: ReadonlySet<RuneThemeId> = new Set<RuneThemeId>([
  'success',
  'prosperity',
  'wisdom',
  'courage',
  'protection',
  'luck',
  'strength',
  'growth',
  'harmony',
  'balance',
  'creativity',
  'progress',
  'victory',
  'hope',
]);

export const PERSONALITY_THEME_IDS: ReadonlySet<RuneThemeId> = new Set<RuneThemeId>([
  'leadership',
  'communication',
  'journey',
  'adventure',
  'change',
  'intuition',
  'patience',
  'willpower',
  'passion',
  'focus',
  'completion',
  'insight',
]);

export const runeThemesByKey: Record<RuneKey, RuneThemeId[]> = {
  fehu: ['prosperity', 'success'],
  uruz: ['strength', 'willpower', 'courage', 'change'],
  thurisaz: ['protection', 'courage', 'strength'],
  ansuz: ['wisdom', 'communication', 'insight'],
  raidho: ['journey', 'progress', 'change'],
  kaunan: ['creativity', 'wisdom', 'change'],
  gebo: ['balance', 'harmony', 'luck'],
  wunjo: ['harmony', 'hope', 'luck'],
  hagalaz: ['change', 'willpower', 'insight'],
  nauthiz: ['patience', 'willpower', 'growth'],
  isaz: ['focus', 'insight'],
  jera: ['growth', 'success', 'patience'],
  eihwaz: ['change', 'growth', 'insight'],
  perthro: ['luck', 'insight'],
  algiz: ['protection', 'wisdom'],
  sowilo: ['victory', 'success', 'hope'],
  tiwaz: ['courage', 'leadership', 'victory'],
  berkanan: ['growth', 'hope'],
  ehwaz: ['harmony', 'progress', 'communication'],
  mannaz: ['wisdom', 'communication', 'balance'],
  laguz: ['intuition', 'change'],
  ingwaz: ['completion', 'prosperity', 'growth'],
  dagaz: ['hope', 'change', 'insight'],
  othalan: ['prosperity', 'wisdom', 'balance'],
};
