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

function Donate() {
    const {state: {userSignin: { userInfo },},dispatch,} = useContext(StoreContext);
    const history = useHistory();
    
    const [inputList, setInputList] = useState([]);
    
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<DonateCard />));
    };
    
    const [form] = Form.useForm();
    const onDonate = async (values) => {
        console.log('Received values of form: ', values);
        console.log(values.name);
        form.resetFields();
       // await loginToFirebase(dispatch, values);
      };
  
  return (
    <div>
        <JJHeader />
      <div className="mainarea donate">
          <div className="donate-title">捐贈</div>
          <div className="donate-subtitle">感謝您的加入,攜手貢獻</div>
            <Form
                name="normal_login"
                className="login-form"
                form={form}
                initialValues={{
                    remember: true,
                }}
                onFinish={onDonate}
            >
                <div><DonateCard/></div>
                <div>{inputList}</div>
                <div className="donatecard-add-btn-container">
                    <img
                        className="donatecard-add-btn"
                        src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/donate_add.png?raw=true"
                        alt="add button" 
                        onClick={onAddBtnClick}
                        />
                </div>
                <div className="donatecard-btn-container">
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="donatecard-btn-text"
                        >
                            送出
                        </Button>
                        
                    </Form.Item>
                </div>
            </Form>

          
      </div>
      <JJFooter />
    </div>
  );
}

export default Donate;
