import { useContext, useState } from "react";
import { Layout, Button } from "antd";
import { Form,Input,DatePicker } from 'antd';
import JJHeader from "../components/HeaderNew";
import JJFooter from "../components/Footer";
import JJTopButton from "../components/Account/TopButton";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { logoutFromFirebase } from "../actions";

import { StoreContext } from "../store";

import { Select } from 'antd';
const { Option } = Select;

const { Header, Content, Footer } = Layout;

function UploadGift() {
    
  return (
    <div>
        <JJHeader />
      <div className="mainarea upload">
          <div className="donate-title">上架</div>
          <div className="upload-step1">
            <div className="upload-step2-selection">
            <div className="donatecard-row-container">
                <div className="donatecard-row-text">商品分類：</div>
                    <Form.Item
                        name="category"
                        rules={[
                        {
                            required: true,
                            message: "Please input brand name!",
                        },
                        ]}
                        hasFeedback
                    >
                        <Select
                            showSearch
                            placeholder="Select a category"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="sunscreen">防曬乳</Option>
                            <Option value="primer">妝前乳/飾底乳</Option>
                            <Option value="contouring">修容</Option>
                            <Option value="foundation">粉底液</Option>
                            <Option value="concealer">遮瑕</Option>
                            <Option value="pressedPowder">氣墊粉餅</Option>
                            <Option value="lipBlush">唇頰彩妝</Option>
                            <Option value="eyeshadow">眼部彩妝</Option>
                            <Option value="lotion">乳液</Option>
                            <Option value="facialMask">面膜</Option>
                            <Option value="toner">化妝水</Option>
                            <Option value="candle">蠟燭</Option>
                            <Option value="perfume">香水</Option>
                            <Option value="essentialOil">精油</Option>
                            <Option value="else">其他</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className="donatecard-row-container">
                    <div className="donatecard-row-text">品牌：</div>
                        <Form.Item
                            name="brand"
                            rules={[
                            {
                                required: true,
                                message: "Please input brand name!",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input
                            placeholder="brand name"
                            />
                        </Form.Item>
                </div>
                <div className="donatecard-row-container">
                    <div className="donatecard-row-text">品名：</div>
                        <Form.Item
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input
                            placeholder="product name"
                            />
                        </Form.Item>
                </div>
                <div className="donatecard-row-container">
                    <div className="donatecard-row-text">保存期限：</div>
                        <Form.Item
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                            ]}
                            hasFeedback
                        >
                            <DatePicker/>
                        </Form.Item>
                </div>
            </div>
            <div className="upload-step1-pic-container">
                <img
                    className="upload-step1-pic"
                    src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/sell_step_02.png?raw=true"
                    alt="add button" 
                />
            </div>
          </div>
          <Link to="/FinishUpload">
                <div className="upload-gift-finish-btn">送出</div>
          </Link>

          
      </div>
      <JJFooter />
    </div>
  );
}

export default UploadGift;
