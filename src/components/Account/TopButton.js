import { Button, Radio } from "antd";
export default function Slider() {
  return (
    <div className="container">
      <div className="button-box">
        <Button className="account-button">會員管理</Button>
        <Button className="account-button">賣場管理</Button>
        <Button className="account-button">購物車</Button>
        <Button className="account-button">申請上架/捐贈</Button>
      </div>
    </div>
  );
}
