import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { user } from "./atoms/agencyBanking";

function App() {
  const userData = useRecoilValue(user);
  const { i18n, t } = useTranslation();
  useEffect(() => {
    changeLanguage("en");
  }, []);
  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return <div>{t("enter_mobile_number")}</div>;
}

export default App;
