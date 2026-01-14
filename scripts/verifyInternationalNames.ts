import { convertToRunes, normalizeLatinInput } from "../client/src/lib/runeConverter";

type Case = {
  label: string;
  input: string;
  expectNonEmpty: boolean;
};

const cases: Case[] = [
  // English / basic
  { label: "EN basic", input: "Michael", expectNonEmpty: true },
  { label: "EN punctuation", input: "O'Connor", expectNonEmpty: true },
  { label: "EN hyphen", input: "Anne-Marie", expectNonEmpty: true },

  // European diacritics
  { label: "ES diacritics", input: "José", expectNonEmpty: true },
  { label: "FR diacritics", input: "François", expectNonEmpty: true },
  { label: "DE umlaut", input: "Jörg", expectNonEmpty: true },
  { label: "NO slashed o", input: "Søren", expectNonEmpty: true },
  { label: "PL stroke l", input: "Łukasz", expectNonEmpty: true },
  { label: "IS thorn", input: "Þór", expectNonEmpty: true },

  // Romanized Japanese/Chinese examples (Latin)
  { label: "JP macron", input: "Ōsaka", expectNonEmpty: true },
  { label: "ZH pinyin (tones)", input: "Lǐ Xiǎolóng", expectNonEmpty: true },
  { label: "ZH pinyin (spaces)", input: "Xiao Ming", expectNonEmpty: true },

  // Non-Latin scripts should not produce runes under this pipeline
  { label: "CJK raw", input: "李小龍", expectNonEmpty: false },
  { label: "JP raw", input: "たろう", expectNonEmpty: false },
];

let failures = 0;

for (const c of cases) {
  const normalized = normalizeLatinInput(c.input);
  const runes = convertToRunes(c.input);

  const ok = c.expectNonEmpty ? runes.length > 0 : runes.length === 0;
  if (!ok) failures++;

  // Print a compact line for manual review.
  // eslint-disable-next-line no-console
  console.log(
    `${ok ? "OK" : "FAIL"} | ${c.label.padEnd(16)} | input=${JSON.stringify(c.input)} | norm=${JSON.stringify(
      normalized
    )} | runes=${runes}`
  );
}

if (failures > 0) {
  // eslint-disable-next-line no-console
  console.error(`\n${failures} case(s) failed.`);
  process.exit(1);
}

// eslint-disable-next-line no-console
console.log("\nAll cases passed.");
