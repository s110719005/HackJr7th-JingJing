import { useContext, useState } from "react";
import { Layout, Button } from "antd";
import { Form } from 'antd';
import JJHeader from "../components/HeaderNew";
import JJFooter from "../components/Footer";
import JJTopButton from "../components/Account/TopButton";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { logoutFromFirebase } from "../actions";

import { StoreContext } from "../store";

const { Header, Content, Footer } = Layout;

function UploadFinish() {
    
  
  return (
    <div className="donateFinish uploadFinish">
        <div className="donateFinish-bg"></div>
        <div className="donateFinish-card">
            <img
                className="donateFinish-pic"
                src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/Rectangle%20108.png?raw=true"
                alt="add button" 
            />
            <div className="donateFinish-choco-text">上架成功!</div>
            <div className="donateFinish-green-text">祝您每天都淨靚</div>
            <div className="uploadFinish-btn-row">
              <Link to="/">
                  <div className="donateFinish-back-btn">返回首頁</div>
              </Link>
              <Link to="/Account">
                  <div className="donateFinish-back-btn uploadFinish-salmon-btn">查看上架進度</div>
              </Link>
            </div>
        </div>
            <img
                    className="upload-step3-pic"
                    src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/sell_step_03.png?raw=true"
                    alt="add button" 
                />
    </div>
  );
}

export default UploadFinish;
