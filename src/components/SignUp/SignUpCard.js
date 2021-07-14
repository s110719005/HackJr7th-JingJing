import { useState,useContext,useEffect } from "react";
import { Link,useHistory  } from "react-router-dom";
import { StoreContext } from "../../store"
import { Form, Input, Button, Checkbox, DatePicker, Select } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { registerToFirebase,checkLogin,loginToFirebase } from '../../actions'


function SignUpCard({ redirect }) {
    const { state:{ userRegister: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);
    const [form] = Form.useForm();
  const history = useHistory();
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await registerToFirebase(dispatch, values);
    history.push("/SignInUp");
  };
  
  
  useEffect(() => {
    if(userInfo) history.push("/SignInUp");
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
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
                <div>
                    <div className="signincard-subtitle">姓名</div>
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
                        placeholder="Name"
                        />
                    </Form.Item>
                    <div className="signincard-subtitle">生日</div>
                    <Form.Item
                        name="birthday"
                        rules={[
                        {
                            required: true,
                            message: "Please input your birthday!",
                        },
                        ]}
                        hasFeedback
                    >
                        <Input
                        placeholder="DD/MM/YYYY"
                        />
                    </Form.Item>
                </div>
                <div className="signincard-subtitle">電子郵件</div>
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
                        message: "Please input your password!",
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password 
                    placeholder="Password"
                    />
                </Form.Item>

                

                

                <div className="signincard-subtitle">手機號碼</div>
                <Form.Item
                    name="phone"
                    rules={[
                    {
                        required: true,
                        message: "Please input your Phone Number!",
                    },
                    ]}
                    hasFeedback
                >
                    <Input
                    placeholder="Phone numbers"
                    />
                </Form.Item>

                <div className="">
                    {loading ? (
                        <Button
                            type="primary"
                            className=""
                            htmlType="submit"
                            loading
                        >
                            Confirm
                        </Button>
                        ) : (
                        <Button
                            type="primary"
                            className=""
                            htmlType="submit"
                        >
                            Confirm
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
                
            </Form> 
         

        </div>  
    );
}

export default SignUpCard;