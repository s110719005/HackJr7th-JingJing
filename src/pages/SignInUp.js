import { useContext,useState } from "react";
import { Layout } from 'antd';
import JJHeader from "../components/HeaderNew";
import JJFooter from "../components/Footer";


import * as QueryString from "query-string";
import SignUpCard from "../components/SignUp/SignUpCard";
import SignInCard from "../components/SignIn/SignInCard";

import { useSpring, animated } from "react-spring";

import { registerToFirebase,checkLogin,loginToFirebase } from '../actions'
import { WarningOutlined } from '@ant-design/icons';
import { Form, Input, Button} from 'antd';
import { Link,useHistory  } from "react-router-dom";


import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function SignInUp(props) {
  const { state:{ userRegister: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);

  //const { state: { page: { title, products } } } = useContext(StoreContext);
  const { redirect } = QueryString.parse(props.location.search);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [signInOpen, setSignInOpen] = useState("block");//卡有沒有打開
  const [signUpOpen, setSignUpOpen] = useState("block");//卡有沒有打開

  const [leftCard, setLeftCard] = useSpring(() => ({ opacity:1, config: { mass: 5, tension: 350, friction: 40 } }))//,immediate: key => key === "zIndex"
  const [leftCardBack, setLeftCardBack] = useSpring(() => ({ opacity:0, config: { mass: 5, tension: 350, friction: 40 } }))//,immediate: key => key === "zIndex"
  const [rightCard, setRightCard] = useSpring(() => ({ opacity:0, config: { mass: 5, tension: 350, friction: 40 } }))
  const [rightCardBack, setRightCardBack] = useSpring(() => ({ opacity:1, config: { mass: 5, tension: 350, friction: 40 } }))

  const [form] = Form.useForm();
  const history = useHistory();
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await registerToFirebase(dispatch, values);
    //history.push("/SignInUp");
  };
  
  return (
    <div className="">
        <JJHeader/>
        <div className="signInUp-mainarea">
          <div className="signin-card">
            <animated.div  style={leftCard}>
              <img src="https://github.com/Singularity-v/7th-Hach/blob/main/Log_Signin/login_rec.png?raw=true" 
              alt="Background" 
              className="signin-card-bg"/>
              <div
              // style={{display:signInOpen}}
              >
                <SignInCard/>
                <div className="signin-signupBtn text-choco"
                      onClick={() => {
                        //setSignInOpen("none");
                        //setSignUpOpen("block");
                        setLeftCard({
                          opacity:0
                        });
                        setLeftCardBack({
                          opacity:1
                        });
                        setRightCard({
                          opacity:1
                        });
                        setRightCardBack({
                          opacity:0
                        });
                      }}
                      >
                      還不是會員？ 點我註冊
                </div>
              </div>
                    </animated.div>
            <animated.div  style={leftCardBack}>
              <img src="https://github.com/Singularity-v/7th-Hach/blob/main/Log_Signin/login_rec.png?raw=true" 
              alt="Background" 
              className="signin-card-bg-back"/>
            </animated.div>
            
          </div>
        
        <div className="signup-card">
            <animated.div  style={rightCard}>
              <img src="https://github.com/Singularity-v/7th-Hach/blob/main/Log_Signin/signin_rec.png?raw=true" 
              alt="Background" 
              className="signup-card-bg"/>
              <div
                //style={{display:signUpOpen}}
              >
                {/* <SignUpCard/> */}
                  <div className="signupcard-content">
                    <div className="signincard-title">註冊</div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        form={form}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <div className="signincard-first-row">
                          <div className="signincard-form-column">
                            <div className="signincard-subtitle">姓名</div>
                            <Form.Item
                                name="name"
                                rules={[{required: true,message: "Please input your name!",},]}
                                hasFeedback
                            >
                                <Input placeholder="Name"/>
                            </Form.Item>
                          </div>
                          <div className="signincard-form-column2">
                            <div className="signincard-subtitle">生日</div>
                            <Form.Item
                                name="birthday"
                                rules={[{required: true,message: "Please input your birthday!",},]}
                                hasFeedback
                            >
                                <Input placeholder="DD/MM/YYYY"/>
                            </Form.Item>
                            </div>
                          </div>
                        <div className="signincard-subtitle">電子郵件</div>
                        <Form.Item
                            name="email"
                            rules={[{type: "email",message: "The input is not valid E-mail!",},
                            {required: true,message: "Please input your E-mail!",},]}
                            hasFeedback
                        >
                            <Input placeholder="E-Mail"/>
                        </Form.Item>

                        <div className="signincard-subtitle">密碼</div>
                        <Form.Item
                            name="password"
                            rules={[{required: true,message: "Please input your password!",},]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Password"/>
                        </Form.Item>

                        <div className="signincard-subtitle">手機號碼</div>
                        <Form.Item
                            name="phone"
                            rules={[{required: true,message: "Please input your Phone Number!",},]}
                            hasFeedback
                        >
                            <Input placeholder="Phone numbers"/>
                        </Form.Item>

                        <div className="signup-btn-container">
                            {loading ? (
                                <Button
                                    type="primary"
                                    className="signin-btn-text"
                                    htmlType="submit"
                                    loading
                                >
                                    完成註冊
                                </Button>
                                ) : (
                                <Button
                                    type="primary"
                                    className="signin-btn-text"
                                    htmlType="submit"
                                    onClick={() => {
                                      setLeftCard({
                                        opacity:1
                                      });
                                      setLeftCardBack({
                                        opacity:0
                                      });
                                      setRightCard({
                                        opacity:0
                                      });
                                      setRightCardBack({
                                        opacity:1
                                      });
                                    }}
                                >
                                    完成註冊
                                </Button>
                                )}
                                {error === "" ? (
                                <></>
                                ) : (
                                <div className="">
                                    <h3 className="">
                                    <WarningOutlined className="" />
                                    {"  "}There was a problem
                                    </h3>
                                    <p className="">{error}</p>
                                </div>
                                )}
                        </div>
                          <div className="signin-row">
                              <div className="signin-line"></div>
                              <div className="text-choco">&nbsp;&nbsp;其他註冊&nbsp;&nbsp;</div>
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

                    </Form> 
                

                </div>  
              </div>
            </animated.div>
            <animated.div  style={rightCardBack}>
          <img src="https://github.com/Singularity-v/7th-Hach/blob/main/Log_Signin/signin_rec.png?raw=true" 
          alt="Background" 
          className="signup-card-bg-back"/>
            </animated.div>
          
        </div>
        </div>
        <JJFooter/>
    </div>
  );
}

export default SignInUp;
