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

import { Select,Radio } from 'antd';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined ,UploadOutlined} from '@ant-design/icons';
const { TextArea } = Input;
const { Option } = Select;

const { Header, Content, Footer } = Layout;

function UploadNotGift() {
    const uploadButton = (
        <div>
          <UploadOutlined style={{fontSize:"24px",color:"#f19c79"}}/> 
          <div style={{ marginTop: 8,fontSize:"16px" }} className="text-choco">點擊或拖曳檔案到這裡</div>
        </div>
      );
      const [size, setSize] = useState("default");

      const handleSizeChange = e => {
        setSize(e.target.value);
      };
  return (
    <div>
        <JJHeader />
      <div className="mainarea upload">
          <div className="donate-title">上架</div>
          <div className="upload-step1">
            <div className="upload-step22-selection">
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
                            placeholder=""
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
                            placeholder=""
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
                            placeholder=""
                            />
                        </Form.Item>
                </div>
                <div className="donatecard-row-container">
                    <div className="donatecard-row-text">保存期限：</div>
                        <Form.Item
                            name="date"
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
                <div className="donatecard-bigrow-container">
                    <div className="donatecard-row-text">購買證明：</div>
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
                             <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                            >
                                {uploadButton}
                            </Upload>
                        </Form.Item>
                </div>
                <div className="donatecard-textrow-container">
                    <div className="donatecard-row-text"></div>
                        <div className="upload-text-salmon">經驗證後可提升紅利回饋</div>
                </div>
            </div>
            <div className="upload-step22-selection">
                <div className="donatecard-usagerow-container">
                    <div className="donatecard-row-text">使用程度：</div>
                        <Form.Item
                            name="brand"
                            rules={[
                            {
                                required: true,
                                message: "Please input brand name!",
                            },
                            ]}
                        >
                            <Radio.Group 
                            hasFeedback="false"
                            >
                                <Radio.Button value="large">全新</Radio.Button>
                                <Radio.Button value="default">9成新</Radio.Button>
                                <Radio.Button value="small">7成新</Radio.Button>
                                <Radio.Button value="small">5成新</Radio.Button>
                                <Radio.Button value="small">5成以下(不含)</Radio.Button>
                                <Radio.Button value="small">7成新即期品</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                </div>
                <div className="donatecard-textrow-container">
                    <div className="donatecard-row-text"></div>
                        <Link to="/UsageIntro">
                            <div className="upload-text-salmon">使用程度劃分說明</div>
                        </Link>
                </div>
                <div className="donatecard-pricerow-container">
                    <div className="donatecard-row-text">預期價格：</div>
                        <Form.Item
                            name="price"
                            rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input
                            placeholder=""
                            />
                        </Form.Item>
                </div>
                <div className="donatecard-textrow-container">
                    <div className="donatecard-row-text"></div>
                        <div className="upload-text-salmon">定價說明</div>
                </div>
                <div className="donatecard-detailrow-container">
                    <div className="donatecard-row-text">補充說明：</div>
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
                            <TextArea rows={7} />
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
          <div className="upload-notgift-finish-btn-container">
            <Link to="/UploadStep1">
                <div className="upload-notgift-finish-btn1">
                    還要上架
                </div>
            </Link>
            <Link to="/UploadStep3">
                <div className="upload-notgift-finish-btn">
                    送出
                </div>
            </Link>
          </div>
          
      </div>
      <JJFooter />
    </div>
  );
}

export default UploadNotGift;
