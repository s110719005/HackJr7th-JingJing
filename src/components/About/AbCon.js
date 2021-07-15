import { Button, Radio } from "antd";
import { useContext, useState } from "react";

export default function About() {
  const [isMoment, setIsMoment] = useState("none");
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
        <div className="about-box5 " style={{ display: isMoment }}>
          <div className="about5">
            <div className="lil-tittle">過期乳液</div>
            <div className="lil-box">
              <div className="lil-tittle2">(1)護甲乳使用法</div>
              <div className="lil-content">
                用法: 擠在化妝棉上後拿來敷指甲，15分鐘後就可以讓指甲變得有光澤。
              </div>
            </div>
            <div className="lil-box">
              <div className="lil-tittle2">(2) 護髮油使用法</div>
              <div className="lil-content">
                用法:
                抹在髮尾上可以防止分岔並讓頭髮變得柔軟；另外若是在乳液裡面加入粗鹽，還可以變身成去角質乳液
              </div>
            </div>
          </div>
        </div>
        <div className="about-box4">
          <div className="about4">
            <Button
              className="about-btn"
              onClick={() => {
                setIsMoment("block");
                if (isMoment === "block") {
                  setIsMoment("none");
                }
              }}
            >
              過期乳液
            </Button>
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
