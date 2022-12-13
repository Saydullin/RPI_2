import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../locales/en/translation.json";
import translationRU from "../locales/ru/translation.json";

const resources = {
    "en": {
        translation: translationEN
    },
    "ru": {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        debug: false,
        ns: ['ru', 'en'],
        resources: resources,
        detection: {
            order: ["localStorage", "cookie"],
            caches: ["localStorage", "cookie"],
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
