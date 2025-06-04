import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en-EN" ? "de-DE" : "en-EN";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={className}
      aria-label="Switch language"
    >
      {i18n.language === "en-EN" ? "DE" : "EN"}
    </button>
  );
};

export { LanguageSwitcher };
