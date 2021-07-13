import { useContext,useState } from "react";
import { Layout } from 'antd';
import JJHeader from "../components/Header";


import * as QueryString from "query-string";
import SignUpCard from "../components/SignUp/SignUpCard";
import SignInCard from "../components/SignIn/SignInCard";


//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function SignInUp(props) {
  //const { state: { page: { title, products } } } = useContext(StoreContext);
  const { redirect } = QueryString.parse(props.location.search);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  return (
    <div className="login-main-area">
        <JJHeader/>
        LogIn
        <SignInCard/>
        <SignUpCard/>
    </div>
  );
}

export default SignInUp;
