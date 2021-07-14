import { useContext,useState } from "react";
import { Layout } from 'antd';
import JJHeader from "../components/HeaderNew";


import * as QueryString from "query-string";
import SignUpCard from "../components/SignUp/SignUpCard";
import SignInCard from "../components/SignIn/SignInCard";


//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function SignInUp(props) {
  //const { state: { page: { title, products } } } = useContext(StoreContext);
  const { redirect } = QueryString.parse(props.location.search);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [signInOpen, setSignInOpen] = useState("block");//卡有沒有打開

  return (
    <div className="">
        <JJHeader/>
        <div className="signInUp-mainarea">
          <div className="signin-card">
            <img src="https://github.com/Singularity-v/7th-Hach/blob/main/Log_Signin/login_rec.png?raw=true" 
            alt="Background" 
            className="signin-card-bg"/>
            <div
              style={{display:signInOpen}}
            >
              <SignInCard/>
              <div className="signin-signupBtn text-choco"
                    onClick={() => {
                        setSignInOpen("none");
                     }}
                >
                    還不是會員？ 點我註冊
              </div>
            </div>
          </div>
          <div className="signup-card">
            <img src="https://github.com/Singularity-v/7th-Hach/blob/main/Log_Signin/signin_rec.png?raw=true" 
            alt="Background" 
            className="signup-card-bg"/>
            <SignUpCard/>
          </div>
        </div>
    </div>
  );
}

export default SignInUp;
