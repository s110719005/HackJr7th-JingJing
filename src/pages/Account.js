import { useContext, useState } from "react";
import { Layout, Button } from "antd";
import JJHeader from "../components/HeaderNew";
import JJFooter from "../components/Footer";
import JJTopButton from "../components/Account/TopButton";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { logoutFromFirebase } from "../actions";

import { StoreContext } from "../store";

const { Header, Content, Footer } = Layout;

function Account() {
  const {
    state: {
      userSignin: { userInfo },
    },
    dispatch,
  } = useContext(StoreContext);
  const history = useHistory();

  const handleLogout = () => {
    logoutFromFirebase(dispatch);
    history.push("/");
  };
  return (
    <Layout>
      <div className="main-area">
        <JJHeader />
        <JJTopButton />
      </div>
      <Button className="logout-button">
        <Link to="/" onClick={handleLogout}>
          登出
        </Link>
      </Button>
      <JJFooter />
    </Layout>
  );
}

export default Account;
