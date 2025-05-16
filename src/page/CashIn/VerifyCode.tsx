import FooterButtonBox from "@/components/FooterButtonBox";
import OTPInput from "@/components/OTPBox";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const phoneNumber = "*******3486";

  const handleNext = () => {
    navigate("/cash_in_success");
  };
  return (
    <>
      <div>
        <h3 className="title">{t("verifyCode")}</h3>
        <p className="verify-code-label">
          {t("verfiyLabel", { phone: phoneNumber })}
        </p>
        <br />
        <div className="otp-container">
          <OTPInput length={6} />
        </div>
        <br />
        <p className="verify-code-label">
          {t("noReceiveCode")}
          <br />
          {t("resendCode")}
          &nbsp;
          <span className="active-color font-b">0:59 sec</span>
        </p>
      </div>
      <FooterButtonBox btnText={t("verify")} buttonAction={handleNext} />
    </>
  );
}
