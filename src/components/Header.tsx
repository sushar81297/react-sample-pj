import { useLocation, useNavigate } from "react-router-dom";
import leftArrowIcon from "@/assets/icon/left_arrow.png";
import historyIcon from "@/assets/icon/history.png";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {pathname === "/" && (
        <div className="header-home-container">
          <div className="header-right">
            <img src={historyIcon} className="history-icon" />
            {t("history")}
          </div>
        </div>
      )}
      {pathname !== "/" && pathname !== "/404" && (
        <div className="header-container">
          {pathname !== "/success" && (
            <div className="header-left" onClick={goBack}>
              <img src={leftArrowIcon} className="header-icon" />
              {t("back")}
            </div>
          )}
        </div>
      )}
    </>
  );
}
