import { useContext,useState } from "react";
import { Layout } from 'antd';
import JJHeader from "../components/header";


import * as QueryString from "query-string";


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
    </div>
  );
}

export default SignInUp;
