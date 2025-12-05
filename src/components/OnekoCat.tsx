import { catConfig } from "../config/Cat";
import { useEffect } from "react";

export default function OnekoCat() {
  useEffect(() => {
    if (!catConfig.enabled) return;

    const script = document.createElement("script");
    script.src = "/oneko/oneko.js";
    script.dataset.cat = "/oneko/oneko.gif";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
