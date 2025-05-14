import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { user } from "./atoms/agencyBanking";
import Router from "./router";

function App() {
  const userData = useRecoilValue(user);
  const { i18n, t } = useTranslation();
  useEffect(() => {
    changeLanguage("en");
  }, []);
  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div>
      {userData.name}
      {t("enter_mobile_number")}

      <Router />
    </div>
  );
}

export default App;
