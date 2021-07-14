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
        <div className="">
        <div className="">Log In</div>
        <Form
                name="normal_login"
                className="login-form"
                form={form}
                initialValues={{
                    remember: true,
                }}
                onFinish={onLogIn}
                >
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
                
                {/* ///////////////////////////////////////////// */}
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
                        className="login-form__button"
                    >
                        Log in
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
                    {/* ///////////////////////////////////////////// */}
                <div className="login-form-question">
                <Form.Item>
                    <Link className="login-form-question-text text-purple" to={"/"}>
                    Forgot your password ?
                    </Link>
                </Form.Item>
                <Form.Item>
                    <Link className="login-form-question-text text-purple" to={"/Register"}>
                        Create an account !
                    </Link>
                </Form.Item>
                </div>

            </Form>
            
            
         

        </div>  
    );
}

export default SignInCard;