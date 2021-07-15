import { Carousel } from "antd";
export default function Slider() {
  return (
    <div className="slider">
      <Carousel autoplay>
        <div>
          <img
            src="https://github.com/yuumaker/7th-hack/blob/main/banner/banner01.png?raw=true"
            alt="Cart"
            className="test"
          />
        </div>
        <div>
          <img
            src="https://github.com/yuumaker/7th-hack/blob/main/banner/banner02.png?raw=true"
            alt="Cart"
            className="test"
          />
        </div>
        <div>
          <img
            src="https://github.com/yuumaker/7th-hack/blob/main/banner/banner03.png?raw=true"
            alt="Cart"
            className="test"
          />
        </div>
        <div>
          <img
            src="https://github.com/yuumaker/7th-hack/blob/main/banner/banner04.png?raw=true"
            alt="Cart"
            className="test"
          />
        </div>
      </Carousel>
    </div>
  );
}
