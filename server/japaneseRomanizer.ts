import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

let instance: Kuroshiro | null = null;
let initPromise: Promise<Kuroshiro> | null = null;

async function getKuroshiro(): Promise<Kuroshiro> {
  if (instance) return instance;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const kuroshiro = new Kuroshiro();

    // Kuromoji dict files are shipped with the `kuromoji` package.
    // The analyzer will resolve the default dictionary path from node_modules.
    await kuroshiro.init(new KuromojiAnalyzer());

    instance = kuroshiro;
    return kuroshiro;
  })();

  return initPromise;
}

export async function romanizeJapaneseToRomaji(input: string): Promise<string> {
  const clean = String(input ?? "").trim();
  if (!clean) return "";

  const kuroshiro = await getKuroshiro();

  // `mode: 'spaced'` tends to be easier to read and edit for users,
  // and our client-side filter + normalize step will handle it.
  const romaji = await kuroshiro.convert(clean, {
    to: "romaji",
    mode: "spaced",
  });

  return String(romaji ?? "");
}
