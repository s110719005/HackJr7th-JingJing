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

function Upload1() {
    
  return (
    <div>
        <JJHeader />
      <div className="mainarea upload">
          <div className="donate-title">上架</div>
          <div className="upload-step1">
            <div className="upload-step1-selection">
                <img
                        className="upload-notgift-btn"
                        src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/not_gift.png?raw=true"
                        alt="add button" 
                    />
                    <div className="upload-step1-hint">
                        <div className="upload-line"></div>
                        <div className="upload-text">&nbsp;&nbsp;&nbsp;是否為贈品&nbsp;&nbsp;&nbsp;</div>
                        <div className="upload-line"></div>
                    </div>
                <Link to="/UploadStep2Gift">
                    <img
                            className="upload-gift-btn"
                            src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/gift.png?raw=true"
                            alt="add button" 
                        />
                </Link>
            </div>
            <div className="upload-step1-pic-container">
                <img
                    className="upload-step1-pic"
                    src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/sell_step_01.png?raw=true"
                    alt="add button" 
                />
            </div>
          </div>

          
      </div>
      <JJFooter />
    </div>
  );
}

export default Upload1;
