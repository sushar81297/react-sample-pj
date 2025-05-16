import bankImg from "@/assets/icon/bank.png";
import rightArrow from "@/assets/icon/right_arrow.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/cash_in");
  };
  return (
    <div className="content-container">
      <div className="menu-box" onClick={goToAbout}>
        <img src={bankImg} className="menu-icon" />
        <span>{t("cashIn")}</span>
        <img src={rightArrow} className="arrow-icon" />
      </div>

      <div className="menu-box">
        <img src={bankImg} className="menu-icon" />
        <span>{t("cashOut")}</span>
        <img src={rightArrow} className="arrow-icon" />
      </div>

      <div className="menu-box">
        <img src={bankImg} className="menu-icon" />
        <span>{t("transfer")}</span>
        <img src={rightArrow} className="arrow-icon" />
      </div>
    </div>
  );
}
