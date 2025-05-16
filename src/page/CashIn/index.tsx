import { Input } from "antd";
import checkOnPng from "@/assets/icon/check_on.png";
import checkOffPng from "@/assets/icon/check_off.png";
import { useState } from "react";
import FooterButtonBox from "@/components/FooterButtonBox";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CheckItem = ({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) => (
  <p onClick={onToggle} style={{ cursor: "pointer" }}>
    <img src={checked ? checkOnPng : checkOffPng} alt="check-icon" />
    &nbsp;&nbsp;{label}
  </p>
);

export default function CashIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [checkBringCard, setCheckBringCard] = useState(false);
  const [checkBringNRC, setCheckBringNRC] = useState(false);

  const handleNext = () => {
    navigate("/cash_in_amount");
  };

  return (
    <>
      <div>
        <h3 className="title">{t("cashIn")}</h3>

        <div className="input-box">
          <label className="input-label">{t("enterAccount")}</label>
          <Input placeholder={t("enterAmt")} size="large" />
        </div>

        <div className="info-box">
          <h4 className="sub-title">{t("infolabel")}</h4>
          <CheckItem
            label={t("bringBankCard")}
            checked={checkBringCard}
            onToggle={() => setCheckBringCard((prev) => !prev)}
          />
          <CheckItem
            label={t("bringNRC")}
            checked={checkBringNRC}
            onToggle={() => setCheckBringNRC((prev) => !prev)}
          />
        </div>
      </div>
      <FooterButtonBox btnText={t("next")} buttonAction={handleNext} />
    </>
  );
}
