import { catConfig } from "../config/Cat";
import { useEffect } from "react";

export default function OnekoCat() {
  useEffect(() => {
    if (!catConfig.enabled) return;

    // list of your GIFs
    const catSprites = [
      "/oneko/oneko-dog.gif",
      "/oneko/oneko-mia.gif",
      "/oneko/oneko-tora.gif",
      "/oneko/oneko-vaporwave.gif",
      "/oneko/oneko.gif",
    ];

    // pick a random one
    const randomGif = catSprites[Math.floor(Math.random() * catSprites.length)];

    const script = document.createElement("script");
    script.src = "/oneko/oneko.js";
    script.dataset.cat = randomGif;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
