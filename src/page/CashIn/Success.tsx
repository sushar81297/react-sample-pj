import { useTranslation } from "react-i18next";
import payBillPng from "@/assets/icon/pay_bill.png";
import sharePng from "@/assets/icon/share.png";
import downloadPng from "@/assets/icon/download.png";

export default function Success() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1 className="success-title">{t("transactionSuccess")}</h1>
        <h3 className="title margin-zero">{t("cashIn")}</h3>
        <div className="success-info">
          <div className="icon-box">
            <div className="icon">
              <img src={payBillPng} />
            </div>
          </div>
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
            <label>Total Amount</label>
            <span>4,3000 Ks</span>
          </div>
          <hr />
          <div className="info-text">
            <label>Trnx ID</label>
            <span>12120389483574839333</span>
          </div>

          <div className="info-text">
            <label>Date & Time</label>
            <span>23 May 2022 - 01:03:11 PM</span>
          </div>
        </div>
        <br />
        <div className="share-container">
          <div className="icon">
            <img src={downloadPng} />
            <span>Download</span>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="icon">
            <img src={sharePng} />
            <span>Share</span>
          </div>
        </div>
      </div>
    </>
  );
}
