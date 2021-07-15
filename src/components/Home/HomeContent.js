import { Button, Radio } from "antd";
import { Link,useHistory } from "react-router-dom";

export default function Slider() {
  const history = useHistory();
  const onClick = () => {
    history.push("/About");
    
  };
  return (
    <div>
      <div className="home-tittle">
        <div className="box"></div>
        <p className="text-choco">理念介紹</p>
        <hr className="homecontent-hr" />
      </div>
      <div className="content-box">
        <div className="mid-box">
          <div className="content1">
            <div className="circle-box">
              <img
                src="https://github.com/Singularity-v/7th-Hach/blob/main/HOME/concept_01.png?raw=true"
                alt="loveya"
                className="lil-circle"
              />
            </div>
            <div className="mid-tittle">減少資源浪費</div>
            <div className="mid-content">
              選購二手美妝商品， 賦予商品再次利用的機會， 使商品物盡其用。
            </div>
          </div>
        </div>
        <div className="mid-box">
          <div className="content2">
            <div className="circle-box">
              <img
                src="https://github.com/Singularity-v/7th-Hach/blob/main/HOME/concept_02.png?raw=true"
                alt="loveya"
                className="lil-circle"
              />
            </div>
            <div className="mid-tittle">環境保護</div>
            <div className="mid-content">
              寄送商品時使用環保可回收包材，
              降低物流造成的碳排浪量以及塑膠袋污染，開心購物的同時為環境盡一份心力。
            </div>
          </div>
          <div className="content2">
            <div className="circle-box">
              <img
                src="https://github.com/Singularity-v/7th-Hach/blob/main/HOME/concept_03.png?raw=true"
                alt="loveya"
                className="lil-circle"
              />
            </div>
            <div className="mid-tittle">友善利用</div>
            <div className="mid-content">
              過期和即期化妝品捐贈給偏鄉技職學校、美術班或是大體化妝師，讓美妝品幫助更多需要的人。
            </div>
          </div>
        </div>
        <div className="mid-box">
          <div className="content1">
            <div className="circle-box">
              <img
                src="https://github.com/Singularity-v/7th-Hach/blob/main/HOME/concept_04.png?raw=true"
                alt="loveya"
                className="lil-circle"
              />
            </div>
            <div className="mid-tittle">依舊好用又美麗</div>
            <div className="mid-content">
              「你的毒藥是我的蜜糖」
              許多美妝產品可能因為不合用而被丟棄，然而他們依舊可以讓另一個人容光煥發。
            </div>
          </div>
        </div>
      </div>
      <div className="button-box">
          <Button className="home-button"
          onClick={onClick}
          >了解更多</Button>
      </div>
    </div>
  );
}
