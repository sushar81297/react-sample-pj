import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Router from "@/router";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const lang = "en";
    changeLanguage(lang);
    document.body.style.setProperty("--primaryColor", "#65B448");
    document.body.style.setProperty("--btnBgColor", "#65B448");
    document.body.style.setProperty("--baseColor", "#f6fff3");
    document.documentElement.className = `lang-${lang}`;
  }, []);
  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
