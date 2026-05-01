import React, { createContext, useContext, useEffect, useState } from 'react';
import themes, { Theme } from '@/themes';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const getSystemTheme = (): Theme => {
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return themes.darkTheme;
    }
    return themes.lightTheme;
  };

  const [theme, setTheme] = useState<Theme>(getSystemTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? themes.darkTheme : themes.lightTheme);
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.darkTheme ? themes.lightTheme : themes.darkTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
