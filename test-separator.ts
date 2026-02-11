// Quick test script for rune word separator implementation
import { convertToRunes, normalizeLatinInput, RUNE_WORD_SEPARATOR } from './client/src/lib/runeConverter';

const testCases = [
  { input: "John Doe", description: "Simple two-word name" },
  { input: "Jean-Luc", description: "Hyphenated compound name" },
  { input: "O'Connor", description: "Irish name with apostrophe" },
  { input: "Maria de la Cruz", description: "Spanish name with particles" },
  { input: "John  Doe", description: "Multiple spaces (should normalize)" },
  { input: " John Doe ", description: "Leading/trailing spaces" },
  { input: "José García", description: "Accented name" },
  { input: "Søren", description: "Single name with special char" },
];

console.log('🧪 Testing Rune Word Separator Implementation\n');
console.log(`Using separator: "${RUNE_WORD_SEPARATOR}" (U+00B7 Middle Dot)\n`);

for (const testCase of testCases) {
  console.log(`📝 Input: "${testCase.input}"`);
  console.log(`   ${testCase.description}`);
  
  const normalized = normalizeLatinInput(testCase.input);
  console.log(`   Normalized: "${normalized}"`);
  
  const runes = convertToRunes(testCase.input);
  console.log(`   Runes: ${runes}`);
  console.log('');
}

// Test that separator is actually the middle dot character
console.log('🔍 Separator verification:');
console.log(`   Character: ${RUNE_WORD_SEPARATOR}`);
console.log(`   Unicode: U+${RUNE_WORD_SEPARATOR.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`);
console.log(`   Name: Middle Dot / Interpunct`);
