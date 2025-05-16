import { Button } from "antd";

export default function FooterButtonBox({
  btnText,
  buttonAction,
}: {
  btnText: string;
  buttonAction: () => void;
}) {
  return (
    <div className="btn-container">
      <Button
        type="primary"
        block
        className="btn-item"
        size="large"
        onClick={buttonAction}
      >
        {btnText}
      </Button>
    </div>
  );
}
