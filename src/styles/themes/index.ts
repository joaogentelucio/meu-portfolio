import darkTheme  from "./dark";
import lightTheme from "./light";

interface Theme {
  colors: {
    primary: string,
    secondary: string,
    text: string,
    success: string,
    error: string,
    silver: string,
    background: string,
    white: string,
    black: string,
    bottom: string,
    grey21: string,
  };
}

const themes = {
  lightTheme,
  darkTheme,
} as const; 

export default themes;
export type { Theme };