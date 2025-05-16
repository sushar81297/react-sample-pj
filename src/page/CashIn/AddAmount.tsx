import FooterButtonBox from "@/components/FooterButtonBox";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function AddAmount() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/cash_in_confimration");
  };
  return (
    <>
      <div>
        <h3 className="title">{t("cashIn")}</h3>
        <div className="bank-info">
          <h4 className="sub-title">{t("bankinfo")}</h4>

          <div className="info-text">
            <label>Account Number</label>
            <span>*****-****-****-121212</span>
          </div>

          <div className="info-text">
            <label>Account Name</label>
            <span>Ma Ma</span>
          </div>

          <div className="info-text">
            <label>NRC</label>
            <span>12/ZaKaNa(N)123456</span>
          </div>
        </div>
        <br />
        <div className="input-box">
          <label className="input-label">{t("amount")}</label>
          <Input placeholder={t("enterAmt")} size="large" />
        </div>
      </div>
      <FooterButtonBox btnText={t("next")} buttonAction={handleNext} />
    </>
  );
}
