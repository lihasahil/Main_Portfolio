import withPWA from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default withPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  fallbacks: {
    document: "/offline",
  },
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: ({ request }: { request: Request }) =>
          request.mode === "navigate",
        handler: "NetworkFirst",
        options: {
          cacheName: "pages-cache",
          networkTimeoutSeconds: 3,
          expiration: { maxEntries: 32, maxAgeSeconds: 30 * 24 * 60 * 60 },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp|gif|ico)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "image-cache",
          expiration: { maxEntries: 100, maxAgeSeconds: 60 * 24 * 60 * 60 },
        },
      },
      {
        urlPattern: /\.(?:woff|woff2|ttf|otf)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "font-cache",
          expiration: { maxEntries: 20, maxAgeSeconds: 60 * 24 * 60 * 60 },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: "StaleWhileRevalidate",
        options: { cacheName: "static-resources" },
      },
    ],
  },
})(nextConfig);
