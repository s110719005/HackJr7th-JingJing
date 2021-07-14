import { useState,useContext,useEffect } from "react";
import { Link,useHistory  } from "react-router-dom";
import { StoreContext } from "../../store"
import { Form, Input, Button, Checkbox, DatePicker, Select } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { registerToFirebase,checkLogin,loginToFirebase,headerActiveNavItemSet } from '../../actions'


function SignInCard({ redirect }) {
    const { state:{ userSignin: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);
    const [form] = Form.useForm();
  const history = useHistory();
  
  const onLogIn = async (values) => {
    console.log('Received values of form: ', values);
    
    await loginToFirebase(dispatch, values);
  };
  
  useEffect(() => {
    const url = window.location.pathname;
    headerActiveNavItemSet(dispatch, url);
    if(userInfo  && checkLogin(dispatch)) {
        history.push("/Account");
        console.log("signIn!");
    }
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="signincard-content"
            
        >
        <div className="signincard-title">登入</div>
        <Form
                name="normal_login"
                className="login-form"
                form={form}
                initialValues={{
                    remember: true,
                }}
                onFinish={onLogIn}
                >
                <div className="signincard-subtitle">帳號</div>
                <Form.Item
                    name="email"
                    rules={[
                    {
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                    {
                        required: true,
                        message: "Please input your E-mail!",
                    },
                    ]}
                    hasFeedback
                >
                    <Input
                    placeholder="E-Mail"
                    />
                </Form.Item>
                <div className="signincard-subtitle">密碼</div>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: "Please input your Password!",
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <div className="signin-remind">
                    <Form.Item
                        name="remember"
                        noStyle
                    >
                        <Checkbox className="text-choco">保持登入</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Link className="" to={"/"}>
                        忘記密碼?
                        </Link>
                    </Form.Item>
                </div>
                
                {/* ///////////////////////////////////////////// */}
                <div className="signin-btn-container">
                    <Form.Item>
                        {loading ? (
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form__button"
                            loading
                        >
                            Log in
                        </Button>
                        ) : (
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="signin-btn-text"
                        >
                            登入
                        </Button>
                        )}
                        {error === "" ? (
                        <></>
                        ) : (
                        <div className="login-form__error-wrap">
                            <h3 className="login-form__error-title">
                            {"  "}There was a problem
                            </h3>
                            <p className="login-form__error-message">{error}</p>
                        </div>
                        )}
                    </Form.Item>
                </div>
                    {/* ///////////////////////////////////////////// */}
                <div className="login-form-question">
                <div className="signin-row">
                    <div className="signin-line"></div>
                    <div className="text-choco">&nbsp;&nbsp;其他登入&nbsp;&nbsp;</div>
                    <div className="signin-line"></div>
                </div>
                <div className="signincard-sns-container">
                    <img src="https://github.com/Singularity-v/7th-Hach/blob/main/Log_Signin/apple.png?raw=true" 
                    alt="Background" 
                    className="signincard-sns"/>
                    <img src="https://github.com/Singularity-v/7th-Hach/blob/main/Log_Signin/fb.png?raw=true" 
                    alt="Background" 
                    className="signincard-sns"/>
                    <img src="https://github.com/Singularity-v/7th-Hach/blob/main/Log_Signin/google.png?raw=true" 
                    alt="Background" 
                    className="signincard-sns"/>
                </div>
                
                </div>

            </Form>
            
            
         

        </div>  
    );
}

export default SignInCard;