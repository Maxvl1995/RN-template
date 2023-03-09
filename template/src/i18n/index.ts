import i18n from "i18n-js";
import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";
import moment from "moment";
import "moment/min/locales";
import enJson from "./locales/en.json";
import { isRTL } from "./isRTL";
import mDate from "@utils/methods/mDate";

type TTranslatedKeys = keyof typeof enJson;

interface ILanguage {
  label: string;
  value: string;
  file: () => typeof enJson;
}

interface ITranslations {
  [language: string]: () => typeof enJson;
}

export const LANGUAGES: ILanguage[] = [
  {
    label: "Vietnamese",
    value: "vi",
    file: () => require("./locales/vi.json"),
  },
  {
    label: "English",
    value: "en",
    file: () => require("./locales/en.json"),
  },
];

const translations = LANGUAGES.reduce((ret, item) => {
  ret[item.value] = item.file;
  return ret;
}, {} as ITranslations);

export const setLanguage = (l: string) => {
  if (!l) {
    return;
  }
  let locale = LANGUAGES.find(
    (ll) => ll.value.toLowerCase() === l.toLowerCase()
  )?.value;
  if (!locale) {
    locale = "en";
  }
  // don't go forward if it's the same language and default language (en) was setup already
  if (i18n.locale === locale && i18n.translations?.en) {
    return;
  }
  i18n.locale = locale;
  i18n.translations = {
    ...i18n.translations,
    [locale]: translations[locale]?.(),
  };
  I18nManager.forceRTL(isRTL(locale));
  I18nManager.swapLeftAndRightInRTL(isRTL(locale));
  moment.locale(mDate.toMomentLocale(locale));
};

i18n.translations = { en: translations.en?.() };
const defaultLanguage = { languageTag: "en", isRTL: false };
const availableLanguages = Object.keys(translations);
const { languageTag } =
  RNLocalize.findBestAvailableLanguage(availableLanguages) || defaultLanguage;

setLanguage(languageTag);
i18n.fallbacks = true;

type Ti18n = {
  isRTL: boolean;
  t(scope: TTranslatedKeys, options?: Record<string, unknown>): string;
  isTranslated: (text?: string) => boolean;
} & typeof i18n;

export default i18n as Ti18n;
