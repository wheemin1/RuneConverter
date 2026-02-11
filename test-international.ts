// Test international name romanization with separators
import { romanizeNameByLanguage } from './client/src/lib/nameRomanizer';
import { convertToRunes } from './client/src/lib/runeConverter';

const testCases = [
  { input: "李小龙", language: "zh", expected: "Li Xiaolong (Bruce Lee)" },
  { input: "王小明", language: "zh", expected: "Wang Xiaoming" },
  { input: "山田太郎", language: "ja", expected: "Yamada Taro" },
  { input: "さくら", language: "ja", expected: "Sakura" },
  { input: "김철수", language: "ko", expected: "Gimcheolsu" },
  { input: "박지민", language: "ko", expected: "Bagmin" },
];

console.log('🌍 Testing International Name Romanization + Rune Conversion\n');

for (const testCase of testCases) {
  console.log(`📝 Input: "${testCase.input}" (${testCase.language.toUpperCase()})`);
  console.log(`   Expected: ${testCase.expected}`);
  
  const romanized = romanizeNameByLanguage(testCase.input, testCase.language);
  console.log(`   Romanized: "${romanized}"`);
  
  const runes = convertToRunes(romanized);
  console.log(`   Runes: ${runes}`);
  console.log('');
}
