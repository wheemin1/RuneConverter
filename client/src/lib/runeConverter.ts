// Elder Futhark rune conversion utility

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

export function convertToRunes(text: string): string {
  if (!text.trim()) return '';
  
  let result = '';
  let i = 0;
  
  const normalizedText = text.toLowerCase().replace(/[^a-z]/g, '');
  
  while (i < normalizedText.length) {
    // Check for two-character combinations first
    const twoChar = normalizedText.slice(i, i + 2);
    if (runeMap[twoChar]) {
      result += runeMap[twoChar];
      i += 2;
      continue;
    }
    
    // Single character conversion
    const oneChar = normalizedText[i];
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
  const normalizedText = text.toLowerCase().replace(/[^a-z]/g, '');
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
