"use client";

import { createContext } from "react";

export type Theme = "light" | "dark" | "system";
export type ColorTheme = "neutral" | "indigo" | "rose" | "emerald" | "amber";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorTheme: ColorTheme;
  setColorTheme: (color: ColorTheme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
  colorTheme: "neutral",
  setColorTheme: () => {},
});
