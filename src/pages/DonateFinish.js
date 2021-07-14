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
import DonateCard from "../components/Donate/DonateCard";

const { Header, Content, Footer } = Layout;

function DonateFinish() {
    
  
  return (
    <div className="donateFinish">
        <div className="donateFinish-bg"></div>
        <div className="donateFinish-card">
            <img
                className="donateFinish-pic"
                src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/Rectangle%20108.png?raw=true"
                alt="add button" 
            />
            <div className="donateFinish-choco-text">捐贈成功!</div>
            <div className="donateFinish-green-text">祝您每天都淨靚</div>
            <Link to="/">
                <div className="donateFinish-back-btn">返回首頁</div>
            </Link>
        </div>
    </div>
  );
}

export default DonateFinish;
