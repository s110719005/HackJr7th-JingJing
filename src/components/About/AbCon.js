import { Button, Radio } from "antd";

export default function About() {
  return (
    <div className="container-about">
      <div className="about-box">
        <div className="about1">
          <div>
            <img
              src="https://github.com/Singularity-v/7th-Hach/blob/main/About/about_banner.png?raw=true"
              alt="Cart"
            />
          </div>
        </div>

        <div className="about-tittle">賣家的上架流程與規範</div>
        <div className="about-box">
          <div className="about2">
            <div>
              <img
                src="https://github.com/Singularity-v/7th-Hach/blob/main/About/about_sells.png?raw=true"
                alt="Cart"
              />
            </div>
          </div>
        </div>

        <div className="about-tittle">環保包材</div>
        <div className="about-box">
          <div className="about3">
            <div>
              <img
                src="https://github.com/Singularity-v/7th-Hach/blob/main/About/about_comtainer.png?raw=true"
                alt="Cart"
              />
            </div>
          </div>
        </div>
        <div className="about-tittle-special">過期品妙用講堂</div>
        <div className="about-box4">
          <div className="about4">
            <Button className="about-btn">過期乳液</Button>
            <Button className="about-btn">過期香水</Button>
            <Button className="about-btn">過期眼影</Button>
          </div>
          <div className="about4">
            <Button className="about-btn">過期口紅</Button>
            <Button className="about-btn">過期粉底</Button>
          </div>
          <div className="about4">
            <Button className="about-btn">過期化妝水</Button>
            <Button className="about-btn">過期乳霜</Button>
            <Button className="about-btn">過期防曬乳</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
