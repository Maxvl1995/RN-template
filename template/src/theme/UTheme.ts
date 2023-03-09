import Logger from "../utils/methods/Logger";
import UserPreferences from "../utils/methods/UserPreferences";
import { Appearance } from "react-native";
import { isAndroid } from "../utils/UDevice";
import { TSupportedThemes } from ".";
import { IThemePreference, TThemeMode } from "./TTheme";

export const THEME_PREFERENCES_KEY = "THEME_PREFERENCES_KEY";

let themeListener: { remove: () => void } | null;

export const initialTheme = (): IThemePreference => {
  const theme = UserPreferences.getMap(
    THEME_PREFERENCES_KEY
  ) as IThemePreference;
  const initTheme: IThemePreference = {
    currentTheme: defaultTheme(),
    darkLevel: "dark",
  };
  return theme || initTheme;
};

export const defaultTheme = (): TThemeMode => {
  const systemTheme = Appearance.getColorScheme();
  if (systemTheme) {
    return systemTheme;
  }
  return "light";
};

export const getTheme = (
  themePreferences: IThemePreference
): TSupportedThemes => {
  const { currentTheme } = themePreferences;
  let theme = currentTheme;
  if (currentTheme === "automatic") {
    theme = defaultTheme();
  }
  return theme === "dark" ? "dark" : "light";
};

export const newThemeState = (
  prevState: { themePreferences: IThemePreference },
  newTheme: IThemePreference
) => {
  const themePreferences = {
    ...prevState.themePreferences,
    ...newTheme,
  };
  // set new state of themePreferences
  // and theme (based on themePreferences)
  return { themePreferences, theme: getTheme(themePreferences) };
};

export const setNativeTheme = async (
  themePreferences: IThemePreference
): Promise<void> => {
  const theme = getTheme(themePreferences);
  if (isAndroid) {
    const iconsLight = theme === "light";
    try {
      Logger.info("iconsLight: ", iconsLight);
    } catch (error) {
      Logger.error(error);
    }
  }
};

export const unsubscribeTheme = () => {
  if (themeListener && themeListener.remove) {
    themeListener.remove();
    themeListener = null;
  }
};

export const subscribeTheme = (
  themePreferences: IThemePreference,
  setTheme: () => void
): void => {
  const { currentTheme } = themePreferences;
  if (!themeListener && currentTheme === "automatic") {
    // not use listener params because we use getTheme
    themeListener = Appearance.addChangeListener(() => setTheme());
  } else if (currentTheme !== "automatic") {
    // unsubscribe appearance changes when automatic was disabled
    unsubscribeTheme();
  }
  // set native components theme
  setNativeTheme(themePreferences);
};
