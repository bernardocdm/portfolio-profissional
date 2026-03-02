import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        titulo: "Português",
        sobre:
          "Este espaço é destinado à apresentação do autor, incluindo sua formação, interesses na área de tecnologia e experiências adquiridas ao longo do curso",
        sobreMim: "Sobre Mim"
      }
    },
    en: {
      translation: {
        titulo: "English",
        sobre:
          "This section is intended to present the author, including their background, interests in technology, and experiences developed throughout the course.",
        sobreMim: "About Me"
      }
    }
  },
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;