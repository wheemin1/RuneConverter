// Elder Futhark rune conversion utility

/**
 * Historical rune word separator (Middle Dot / Interpunct)
 * Ancient runic inscriptions used this character to separate words.
 * Example: "ᛃᛟᚺᚾ·ᛞᛟᛖ" represents "John Doe"
 */
export const RUNE_WORD_SEPARATOR = '·'; // U+00B7 Middle Dot

export const runeMap: { [key: string]: string } = {
  'a': 'ᚨ', // Ansuz
  'b': 'ᛒ', // Berkanan
  'c': 'ᚲ', // Kaunan (k sound)
  'd': 'ᛞ', // Dagaz
  'e': 'ᛖ', // Ehwaz
  'f': 'ᚠ', // Fehu
  'g': 'ᚷ', // Gebo
  'h': 'ᚺ', // Hagalaz
  'i': 'ᛁ', // Isaz
  'j': 'ᛃ', // Jera
  'k': 'ᚲ', // Kaunan
  'l': 'ᛚ', // Laguz
  'm': 'ᛗ', // Mannaz
  'n': 'ᚾ', // Nauthiz
  'o': 'ᛟ', // Othalan
  'p': 'ᛈ', // Perthro
  'q': 'ᚲᚹ', // kw sound
  'r': 'ᚱ', // Raidho
  's': 'ᛊ', // Sowilo
  't': 'ᛏ', // Tiwaz
  'u': 'ᚢ', // Uruz
  'v': 'ᚹ', // Wunjo (w sound)
  'w': 'ᚹ', // Wunjo
  'x': 'ᛉ', // Algiz (z sound)
  'y': 'ᛃ', // Jera (y sound)
  'z': 'ᛉ', // Algiz
  
  // Special combinations
  'th': 'ᚦ', // Thurisaz
  'ng': 'ᛜ', // Ingwaz
  'ei': 'ᛇ', // Eihwaz
  
  // Numbers (if needed)
  '0': '᚜', '1': 'ᚠ', '2': 'ᚢ', '3': 'ᚦ', '4': 'ᚨ', '5': 'ᚱ',
  '6': 'ᚲ', '7': 'ᚷ', '8': 'ᚹ', '9': 'ᚺ'
};

/**
 * Normalizes user input into lowercase ASCII a-z for rune mapping.
 * Preserves word boundaries (spaces, hyphens, apostrophes) as placeholders.
 *
 * Why: many international names contain diacritics or Latin letters outside A-Z
 * (e.g. José, François, Søren, Łukasz, Ōsaka). Multi-word names like "John Doe"
 * or compound names like "Jean-Luc" need word boundaries preserved for proper
 * rune separator insertion.
 *
 * Word boundary markers (space, hyphen, apostrophe) are replaced with __SPACE__
 * placeholder during normalization and converted to rune separator (·) later.
 */
export function normalizeLatinInput(text: string): string {
  const raw = String(text ?? '');
  if (!raw.trim()) return '';

  // 0) Normalize consecutive spaces to single space and trim
  let s = raw.replace(/\s+/g, ' ').trim();

  // 1) Preserve word boundaries as placeholder before other processing
  // Space, hyphen, and apostrophe become temporary markers
  s = s.replace(/[\s\-']/g, '__space__');

  // 2) Decompose accents, then remove combining marks.
  s = s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');

  // 3) Map common Latin letters/ligatures that don't reliably decompose.
  // Keep it conservative: this is transliteration for rune mapping, not full i18n.
  s = s
    .replace(/ß/g, 'ss')
    .replace(/Æ/g, 'AE')
    .replace(/æ/g, 'ae')
    .replace(/Œ/g, 'OE')
    .replace(/œ/g, 'oe')
    .replace(/Ø/g, 'O')
    .replace(/ø/g, 'o')
    .replace(/Ð/g, 'D')
    .replace(/ð/g, 'd')
    .replace(/Þ/g, 'Th')
    .replace(/þ/g, 'th')
    .replace(/Ł/g, 'L')
    .replace(/ł/g, 'l');

  // 4) Lowercase and remove non-letter characters (except our placeholder)
  s = s.toLowerCase().replace(/[^a-z_]/g, '');

  return s;
}

export function convertToRunes(text: string): string {
  if (!text.trim()) return '';
  
  let result = '';
  let i = 0;
  
  const normalizedText = normalizeLatinInput(text);
  
  // Replace word boundary placeholders with rune separator before conversion
  const textWithSeparators = normalizedText.replace(/__space__/g, RUNE_WORD_SEPARATOR);
  
  while (i < textWithSeparators.length) {
    // Pass through rune separator as-is
    if (textWithSeparators[i] === RUNE_WORD_SEPARATOR) {
      result += RUNE_WORD_SEPARATOR;
      i++;
      continue;
    }
    
    // Check for two-character combinations first
    const twoChar = textWithSeparators.slice(i, i + 2);
    if (runeMap[twoChar]) {
      result += runeMap[twoChar];
      i += 2;
      continue;
    }
    
    // Single character conversion
    const oneChar = textWithSeparators[i];
    if (runeMap[oneChar]) {
      result += runeMap[oneChar];
    } else {
      result += oneChar; // Keep unknown characters as is
    }
    i++;
  }
  
  return result;
}

export function getRuneForLetter(letter: string): string {
  return runeMap[letter.toLowerCase()] || letter;
}

// Utility function to split text into individual runes for detailed explanation
export function splitIntoRunes(text: string): string[] {
  const normalizedText = normalizeLatinInput(text);
  const runes: string[] = [];
  let i = 0;
  
  while (i < normalizedText.length) {
    // Check for two-character combinations first
    const twoChar = normalizedText.slice(i, i + 2);
    if (runeMap[twoChar]) {
      runes.push(runeMap[twoChar]);
      i += 2;
      continue;
    }
    
    // Single character conversion
    const oneChar = normalizedText[i];
    if (runeMap[oneChar]) {
      runes.push(runeMap[oneChar]);
    }
    i++;
  }
  
  return runes;
}
