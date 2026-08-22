"use client";

import { useRef, useState, useContext, useEffect } from "react";
import { Moon, Sun, Mail, Menu, X } from "lucide-react";
import { Theme, ColorTheme, ThemeContext } from "../context/theme-context";
import React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import InstallButton from "./install-app";

interface NavLink {
  link: string;
  name: string;
  icon: React.ReactNode;
}

interface NavBarProps {
  navLinks: NavLink[];
  onContactClick: () => void;
}

const COLOR_OPTIONS: { id: ColorTheme; hex: string; label: string }[] = [
  { id: "neutral", hex: "#737373", label: "Neutral" },
  { id: "indigo", hex: "#6366f1", label: "Indigo" },
  { id: "rose", hex: "#f43f5e", label: "Rose" },
  { id: "emerald", hex: "#10b981", label: "Emerald" },
  { id: "amber", hex: "#f59e0b", label: "Amber" },
];

function ColorPickerDropdown({
  colorTheme,
  setColorTheme,
  side = "bottom",
}: {
  colorTheme: ColorTheme;
  setColorTheme: (c: ColorTheme) => void;
  side?: "bottom" | "right";
}) {
  const [open, setOpen] = useState(false);
  const leaveTimeout = useRef<ReturnType<typeof setTimeout>>(
    setTimeout(() => {}, 0),
  );
  clearTimeout(leaveTimeout.current);
  const active = COLOR_OPTIONS.find((c) => c.id === colorTheme)!;

  const show = () => {
    clearTimeout(leaveTimeout.current);
    setOpen(true);
  };
  const hide = () => {
    leaveTimeout.current = setTimeout(() => setOpen(false), 100);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      {/* Trigger — shows current color as a filled dot */}
      <button
        className="btn-icon"
        title={`Color: ${active.label}`}
        aria-label="Theme color"
      >
        <span
          className="w-3.5 h-3.5 rounded-full shrink-0 block"
          style={{ backgroundColor: active.hex }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: side === "bottom" ? -4 : 0,
              x: side === "right" ? -6 : 0,
            }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            className={`absolute z-100 min-w-38 border border-border bg-bg rounded-xl shadow-xl py-1 overflow-hidden ${
              side === "bottom"
                ? "top-full mt-2 right-0"
                : "left-full ml-3 top-0"
            }`}
          >
            <p className="px-3 pt-1.5 pb-1 text-[10px] font-medium text-secondary uppercase tracking-widest">
              Color
            </p>
            {COLOR_OPTIONS.map(({ id, hex, label }) => (
              <button
                key={id}
                onClick={() => {
                  setColorTheme(id);
                  setOpen(false);
                }}
                className="flex items-center gap-2.5 w-full px-3 py-1.5 text-xs hover:bg-bg-card transition-colors cursor-pointer"
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: hex }}
                />
                <span
                  className={`flex-1 text-left ${colorTheme === id ? "text-text font-medium" : "text-secondary"}`}
                >
                  {label}
                </span>
                {colorTheme === id && (
                  <svg
                    className="w-3 h-3 shrink-0"
                    style={{ color: hex }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Inline swatches — mobile only (no hover on touch) */
function ColorSwatches({
  colorTheme,
  setColorTheme,
}: {
  colorTheme: ColorTheme;
  setColorTheme: (c: ColorTheme) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {COLOR_OPTIONS.map(({ id, hex, label }) => (
        <button
          key={id}
          onClick={() => setColorTheme(id)}
          title={label}
          aria-label={label}
          className="w-5 h-5 rounded-full transition-transform hover:scale-110 cursor-pointer shrink-0"
          style={{
            backgroundColor: hex,
            outline:
              colorTheme === id ? `2px solid ${hex}` : "2px solid transparent",
            outlineOffset: "2px",
          }}
        />
      ))}
    </div>
  );
}

const NavBar: React.FC<NavBarProps> = ({ navLinks, onContactClick }) => {
  const { theme, setTheme, colorTheme, setColorTheme } =
    useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const handleNavClick = (link: string) => {
    setMobileMenuOpen(false);
    if (link.startsWith("/")) {
      router.push(link);
    } else if (link.startsWith("#")) {
      if (window.location.pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : ("light" as Theme));
  };

  return (
    <>
      {/* ── Top bar — before scroll ── */}
      {!scrolled && (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <button
              onClick={() => handleNavClick("#home")}
              className="text-sm font-semibold tracking-tight text-text cursor-pointer"
            >
              Sahil Shrestha
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ link, name }) => (
                <button
                  key={name}
                  onClick={() => handleNavClick(link)}
                  className="px-3 h-8 text-sm font-medium text-secondary hover:text-text rounded-md hover:bg-(--bg-card) transition-colors cursor-pointer"
                >
                  {name}
                </button>
              ))}

              <div className="w-px h-4 bg-border mx-2" />

              <ColorPickerDropdown
                colorTheme={colorTheme}
                setColorTheme={setColorTheme}
                side="bottom"
              />

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="btn-icon"
              >
                {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              </button>

              <button onClick={onContactClick} className="btn-primary ml-2">
                Contact
              </button>
              <InstallButton />
            </nav>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="btn-icon"
              >
                {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="btn-icon"
              >
                {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* ── Sidebar — after scroll (desktop) ── */}
      {scrolled && (
        <>
          <aside className="hidden lg:flex fixed top-1/2 left-4 -translate-y-1/2 z-50 flex-col items-center gap-3 py-4 px-2 rounded-xl border border-border bg-bg shadow-sm">
            <button
              onClick={() => handleNavClick("#home")}
              className="text-xs font-semibold tracking-tight text-text cursor-pointer"
            >
              SS
            </button>
            <div className="w-4 h-px bg-border" />
            {navLinks.map(({ link, icon }) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="btn-icon"
                title={link}
              >
                {icon}
              </button>
            ))}
            <div className="w-4 h-px bg-border" />
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="btn-icon"
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            </button>
            <button
              onClick={onContactClick}
              aria-label="Contact"
              className="btn-icon"
            >
              <Mail size={16} />
            </button>
            <div className="w-4 h-px bg-border" />
            <ColorPickerDropdown
              colorTheme={colorTheme}
              setColorTheme={setColorTheme}
              side="right"
            />
          </aside>

          {/* Mobile compact bar after scroll */}
          <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-12 border-b border-border bg-bg flex items-center justify-between px-4">
            <button
              onClick={() => handleNavClick("#home")}
              className="text-sm font-semibold text-text cursor-pointer"
            >
              SS
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="btn-icon"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>

            <InstallButton />
          </header>
        </>
      )}

      {/* ── Mobile menu overlay ── */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-bg flex flex-col"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="h-12 border-b border-border" />
          <nav
            className="flex flex-col items-start gap-1 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map(({ link, name }) => (
              <button
                key={name}
                onClick={() => handleNavClick(link)}
                className="w-full text-left px-3 h-10 text-sm font-medium text-text hover:bg-(--bg-card) rounded-md transition-colors cursor-pointer"
              >
                {name}
              </button>
            ))}
            <div className="w-full h-px bg-border my-2" />
            <div className="px-3 py-2 flex flex-col gap-2.5">
              <span className="text-xs text-secondary">Theme color</span>
              <ColorSwatches
                colorTheme={colorTheme}
                setColorTheme={setColorTheme}
              />
            </div>
            <div className="w-full h-px bg-border my-2" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="btn-primary w-full justify-center"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
