"use client";

import { useEffect } from "react";

const ROUTES_TO_PRECACHE = ["/", "/blog", "/blog/react-optimization"];

export default function PwaInit() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(() => {
        ROUTES_TO_PRECACHE.forEach((url) => fetch(url).catch(() => {}));
      });
    }
  }, []);

  return null;
}
