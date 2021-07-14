import { useContext, useState } from "react";
import { Layout, Button } from "antd";
import JJHeader from "../components/HeaderNew";
import JJFooter from "../components/Footer";
import JJTopButton from "../components/Account/TopButton";
import JJAccMang from "../components/Account/AccMang";
import JJBuyForm from "../components/Account/BuyForm";
import JJSaleForm from "../components/Account/SaleForm";
import JJNotice from "../components/Account/Notice";
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
  const [isMoment0, setIsMoment0] = useState("block");
  const [isMoment, setIsMoment] = useState("none");
  const [isMoment2, setIsMoment2] = useState("none");
  const [isMoment3, setIsMoment3] = useState("none");
  const [isMoment4, setIsMoment4] = useState("none");
  return (
    <Layout>
      <div className="main-area">
        <JJHeader />
        <div className="container">
          <div className="button-box">
            <Button
              className="account-button"
              onClick={() => {
                setIsMoment0("none");
                setIsMoment("block");
                setIsMoment2("none");
                setIsMoment3("none");
                setIsMoment4("none");
              }}
            >
              會員管理
            </Button>
            <Button
              className="account-button"
              onClick={() => {
                setIsMoment0("none");
                setIsMoment("none");
                setIsMoment2("block");
                setIsMoment3("none");
                setIsMoment4("none");
              }}
            >
              賣場管理
            </Button>
            <Button
              className="account-button"
              onClick={() => {
                setIsMoment0("none");
                setIsMoment("none");
                setIsMoment2("none");
                setIsMoment3("block");
                setIsMoment4("none");
              }}
            >
              購物車
            </Button>
            <Button
              className="account-button"
              onClick={() => {
                setIsMoment0("none");
                setIsMoment("none");
                setIsMoment2("none");
                setIsMoment3("none");
                setIsMoment4("block");
              }}
            >
              申請上架/捐贈
            </Button>
          </div>
        </div>
        <div className="page0" style={{ display: isMoment0 }}>
          <JJAccMang />
          <JJBuyForm />
        </div>
        <div className="page1" style={{ display: isMoment }}>
          <JJAccMang />
          <JJBuyForm />
        </div>
        <div className="page2" style={{ display: isMoment2 }}>
          <JJSaleForm />
          <JJNotice />
        </div>
        <div className="page3" style={{ display: isMoment3 }}>
          <JJAccMang />
        </div>
        <div className="page4" style={{ display: isMoment4 }}>
          <JJAccMang />
          <JJBuyForm />
        </div>
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
