export type RuneKey =
  | 'fehu'
  | 'uruz'
  | 'thurisaz'
  | 'ansuz'
  | 'raidho'
  | 'kaunan'
  | 'gebo'
  | 'wunjo'
  | 'hagalaz'
  | 'nauthiz'
  | 'isaz'
  | 'jera'
  | 'eihwaz'
  | 'perthro'
  | 'algiz'
  | 'sowilo'
  | 'tiwaz'
  | 'berkanan'
  | 'ehwaz'
  | 'mannaz'
  | 'laguz'
  | 'ingwaz'
  | 'dagaz'
  | 'othalan';

export interface RuneBase {
  id: number; // 1..24 (Elder Futhark order)
  key: RuneKey;
  character: string;
  phonetic: string;
}

export const elderFutharkRunesBase: readonly RuneBase[] = [
  { id: 1, key: 'fehu', character: 'ᚠ', phonetic: '/f/' },
  { id: 2, key: 'uruz', character: 'ᚢ', phonetic: '/u/' },
  { id: 3, key: 'thurisaz', character: 'ᚦ', phonetic: '/θ/ (th)' },
  { id: 4, key: 'ansuz', character: 'ᚨ', phonetic: '/a/' },
  { id: 5, key: 'raidho', character: 'ᚱ', phonetic: '/r/' },
  { id: 6, key: 'kaunan', character: 'ᚲ', phonetic: '/k/' },
  { id: 7, key: 'gebo', character: 'ᚷ', phonetic: '/g/' },
  { id: 8, key: 'wunjo', character: 'ᚹ', phonetic: '/w/' },
  { id: 9, key: 'hagalaz', character: 'ᚺ', phonetic: '/h/' },
  { id: 10, key: 'nauthiz', character: 'ᚾ', phonetic: '/n/' },
  { id: 11, key: 'isaz', character: 'ᛁ', phonetic: '/i/' },
  { id: 12, key: 'jera', character: 'ᛃ', phonetic: '/j/' },
  { id: 13, key: 'eihwaz', character: 'ᛇ', phonetic: '/ei/' },
  { id: 14, key: 'perthro', character: 'ᛈ', phonetic: '/p/' },
  { id: 15, key: 'algiz', character: 'ᛉ', phonetic: '/z/' },
  { id: 16, key: 'sowilo', character: 'ᛊ', phonetic: '/s/' },
  { id: 17, key: 'tiwaz', character: 'ᛏ', phonetic: '/t/' },
  { id: 18, key: 'berkanan', character: 'ᛒ', phonetic: '/b/' },
  { id: 19, key: 'ehwaz', character: 'ᛖ', phonetic: '/e/' },
  { id: 20, key: 'mannaz', character: 'ᛗ', phonetic: '/m/' },
  { id: 21, key: 'laguz', character: 'ᛚ', phonetic: '/l/' },
  { id: 22, key: 'ingwaz', character: 'ᛜ', phonetic: '/ŋ/ (ng)' },
  { id: 23, key: 'dagaz', character: 'ᛞ', phonetic: '/d/' },
  { id: 24, key: 'othalan', character: 'ᛟ', phonetic: '/o/' },
] as const;

const runeByCharacter = new Map<string, RuneBase>(
  elderFutharkRunesBase.map((rune) => [rune.character, rune]),
);

export function getRuneBaseByCharacter(character: string): RuneBase | undefined {
  return runeByCharacter.get(character);
}
