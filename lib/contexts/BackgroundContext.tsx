"use client";

import { BACKGROUNDS } from "@/constants/Background";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type BackgroundContextType = {
  background: string;
  backgrounds: string[];
  setBackground: (bg: string) => void;

  isSettingOpen: boolean;
  toggleSetting: () => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined
);

const STORAGE_KEY = "portfolio-background";

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [background, setBackgroundState] = useState(BACKGROUNDS[1]);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  // Load saved background
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setBackgroundState(saved);
  }, []);

  const setBackground = (bg: string) => {
    setBackgroundState(bg);
    localStorage.setItem(STORAGE_KEY, bg);
  };

  const toggleSetting = () => {
    setIsSettingOpen((prev) => !prev);
  };

  return (
    <BackgroundContext.Provider
      value={{
        background,
        backgrounds: BACKGROUNDS,
        setBackground,

        isSettingOpen,
        toggleSetting,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

// Custom hook
export function useBackground() {
  const ctx = useContext(BackgroundContext);
  if (!ctx) {
    throw new Error("useBackground must be used within BackgroundProvider");
  }
  return ctx;
}
