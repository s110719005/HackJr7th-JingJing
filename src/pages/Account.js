import { useContext,useState } from "react";
import { Layout } from 'antd';
import JJHeader from "../components/Header";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { logoutFromFirebase} from "../actions";

import { StoreContext } from "../store";


const { Header, Content, Footer } = Layout;

function Account() {
  const { state: { userSignin: { userInfo },}, dispatch } = useContext(StoreContext);
  const history = useHistory();

    const handleLogout = () => {
        logoutFromFirebase(dispatch);
        history.push("/");
      };
  return (
    <Layout>
        <div className="main-area">
            <JJHeader/>
                Account
        </div>
        <Link to="/"
            onClick={handleLogout}
        >
                Log Out
        </Link>
    </Layout>
  );
}

export default Account;
