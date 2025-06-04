import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en", // Язык по умолчанию
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react уже защищает от xss
    },
  });

export default i18n;
