import { Link } from "react-router-dom";
export default function AccMang() {
  return (
    <div className="container-dors">
      <div className="dors-box">
        <div className="dos-pic1">
          <Link to="/Donate">
            <img
              src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/donate.png?raw=true"
              alt=""
            />
          </Link>
        </div>
        <div class="choice">
          <hr />
          是否捐贈
          <hr />
        </div>
        <div className="dos-pic2">
          <Link to="/UploadStep1">
            <img
              src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/sell.png?raw=true"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
