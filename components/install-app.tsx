"use client";

import { useState, useEffect } from "react";
import { X, Share, Plus, MoreVertical, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Platform =
  | "ios"
  | "android"
  | "desktop-chrome"
  | "desktop-safari"
  | "other";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent;

  const isIOS = /iPhone|iPad|iPod/.test(ua) && !("MSStream" in window);
  if (isIOS) return "ios";

  if (/Android/.test(ua)) return "android";

  const isSafari = /Safari/.test(ua) && !/Chrome|Chromium|Edg/.test(ua);
  if (isSafari) return "desktop-safari";

  const isChromium = /Chrome|Chromium|Edg/.test(ua);
  if (isChromium) return "desktop-chrome";

  return "other";
}

function InstallSteps({ platform }: { platform: Platform }) {
  switch (platform) {
    case "ios":
      return (
        <ol className="space-y-3 text-sm text-text">
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              1
            </span>
            <span className="pt-0.5">
              Tap the <Share size={14} className="inline mx-1 -mt-0.5" /> Share
              icon in Safari&apos;s toolbar
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              2
            </span>
            <span className="pt-0.5">
              Scroll down and tap{" "}
              <strong>&quot;Add to Home Screen&quot;</strong>{" "}
              <Plus size={14} className="inline mx-1 -mt-0.5" />
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              3
            </span>
            <span className="pt-0.5">
              Tap <strong>&quot;Add&quot;</strong> in the top right
            </span>
          </li>
        </ol>
      );

    case "android":
      return (
        <ol className="space-y-3 text-sm text-text">
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              1
            </span>
            <span className="pt-0.5">
              Tap the <MoreVertical size={14} className="inline mx-1 -mt-0.5" />{" "}
              menu in Chrome (top right)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              2
            </span>
            <span className="pt-0.5">
              Tap <strong>&quot;Install app&quot;</strong> or{" "}
              <strong>&quot;Add to Home screen&quot;</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              3
            </span>
            <span className="pt-0.5">
              Confirm by tapping <strong>&quot;Install&quot;</strong>
            </span>
          </li>
        </ol>
      );

    case "desktop-chrome":
      return (
        <ol className="space-y-3 text-sm text-text">
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              1
            </span>
            <span className="pt-0.5">
              Look for the{" "}
              <Download size={14} className="inline mx-1 -mt-0.5" /> install
              icon in the address bar
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              2
            </span>
            <span className="pt-0.5">
              Click it, then click <strong>&quot;Install&quot;</strong> in the
              popup
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              3
            </span>
            <span className="pt-0.5">
              Don&apos;t see the icon? Open the{" "}
              <MoreVertical size={14} className="inline mx-1 -mt-0.5" /> menu →{" "}
              <strong>&quot;Install Sahil Shrestha&hellip;&quot;</strong>
            </span>
          </li>
        </ol>
      );

    case "desktop-safari":
      return (
        <ol className="space-y-3 text-sm text-text">
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              1
            </span>
            <span className="pt-0.5">
              Open the <strong>File</strong> menu in the Safari menu bar
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              2
            </span>
            <span className="pt-0.5">
              Click <strong>&quot;Add to Dock&quot;</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--bg-card) border border-border flex items-center justify-center text-xs font-medium">
              3
            </span>
            <span className="pt-0.5">
              The app icon appears in your Dock, ready to launch anytime
            </span>
          </li>
        </ol>
      );

    default:
      return (
        <p className="text-sm text-secondary">
          Look for an &quot;Install app&quot; or &quot;Add to Home Screen&quot;
          option in your browser&apos;s menu — the exact spot depends on which
          browser you&apos;re using.
        </p>
      );
  }
}

export default function InstallButton() {
  const [open, setOpen] = useState(false);
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-icon"
        aria-label="Install app"
        title="Install app"
      >
        <Download size={14} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-9998 bg-black/40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed z-9999 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-sm bg-bg border border-border rounded-xl shadow-xl p-5"
              role="dialog"
              aria-modal="true"
              aria-label="Install app instructions"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-sm font-semibold text-text">
                    Install this app
                  </h2>
                  <p className="text-xs text-secondary mt-0.5">
                    Add it to your home screen or dock for quick, offline-ready
                    access.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="btn-icon shrink-0"
                  aria-label="Close"
                >
                  <X size={14} />
                </button>
              </div>

              <InstallSteps platform={platform} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
