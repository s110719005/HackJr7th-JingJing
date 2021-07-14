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
            

          
      </div>
      <JJFooter />
    </div>
  );
}

export default Upload1;
