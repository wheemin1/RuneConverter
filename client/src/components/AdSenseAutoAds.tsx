import { useEffect } from "react";

const ADSENSE_CLIENT = "ca-pub-9247464363490578";

export default function AdSenseAutoAds() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const marker = "data-adsense-auto";
    const hasScriptAlready = Array.from(document.scripts).some((script) => {
      const src = script.getAttribute("src") ?? "";
      return (
        script.getAttribute(marker) === "true" ||
        src.includes("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")
      );
    });
    if (hasScriptAlready) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ADSENSE_CLIENT)}`;
    script.crossOrigin = "anonymous";
    script.setAttribute(marker, "true");

    document.head.appendChild(script);
  }, []);

  return null;
}
