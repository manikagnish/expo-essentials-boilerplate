import { StyleSheet } from "react-native-unistyles";
import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "./constants/colors";
import { TYPOGRAPHY } from "./constants/typography";
import { appState$ } from "./store/appState";

const commonTheme = {
  typography: TYPOGRAPHY,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 9999,
  },
};

const lightTheme = {
  ...commonTheme,
  colors: LIGHT_THEME_COLORS,
} as const;

const darkTheme = {
  ...commonTheme,
  colors: DARK_THEME_COLORS,
} as const;

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    initialTheme: appState$.settings.theme.get(),
  },
  breakpoints,
  themes: appThemes,
});
