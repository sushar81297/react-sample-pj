import FooterButtonBox from "@/components/FooterButtonBox";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/cash_in_verify_code");
  };
  return (
    <>
      <div>
        <h3 className="title">{t("confirmation")}</h3>
        <div className="bank-info">
          <h4 className="sub-title">{t("transactionDetail")}</h4>

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

          <div className="info-text">
            <label>Amount</label>
            <span>4,3000 Ks</span>
          </div>

          <div className="info-text">
            <label>Fee & Charges</label>
            <span>0 Ks</span>
          </div>

          <div className="info-text">
            <label>Total</label>
            <span>4,3000 Ks</span>
          </div>
        </div>
      </div>
      <FooterButtonBox btnText={t("next")} buttonAction={handleNext} />
    </>
  );
}
