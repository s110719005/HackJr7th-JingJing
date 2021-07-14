import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Menu, Dropdown, Space } from "antd";
import { StoreContext } from "../store";
import HeaderNavItem from "./HeaderNavItem";
import { headerActiveNavItemSet } from "../actions";

export default function Header() {
  const { state, dispatch } = useContext(StoreContext);

  const {
    state: {
      userSignin: { userInfo, remember },
    },
  } = useContext(StoreContext);
  const history = useHistory();
  useEffect(() => {
    const url = window.location.pathname;
    console.log(url);
    headerActiveNavItemSet(dispatch, url);
    if (remember) localStorage.setItem("userInfo", JSON.stringify(userInfo));
    else localStorage.removeItem("userInfo");
  }, [userInfo, remember]);

  return (
    <div className="header">
      <div className="logo-container">
        {/* <div>logo</div> */}
        <div className="logo-text">
          <img
            src="https://github.com/yuumaker/7th-hack/blob/main/logo/logo.png?raw=true"
            alt="Cart"
            className="logo-pic"
          />
        </div>
      </div>
      {userInfo === null ? (
        <div className="header-row">
          <HeaderNavItem
            to="/"
            className="header-nav-inactive"
            activeClassName="header-nav-active"
          >
            <div className="page-name">首頁</div>
          </HeaderNavItem>
          {/* <Link to="/">
          </Link> */}
          <HeaderNavItem
            to="/Product/All"
            className="header-nav-inactive"
            activeClassName="header-nav-active"
          >
            <div className="page-name">商品</div>
          </HeaderNavItem>
          <HeaderNavItem
            to="/About"
            className="header-nav-inactive"
            activeClassName="header-nav-active"
          >
            <div className="page-name">關於</div>
          </HeaderNavItem>

          <HeaderNavItem
            to="/SignInUp"
            className="header-nav-inactive"
            activeClassName="header-nav-active"
          >
            <div className="page-name">登入/註冊</div>
          </HeaderNavItem>
          <Link to="/SignInUp?redirect=Account">
            <img
              src="https://github.com/Singularity-v/7th-Hach/blob/main/HOME/cart.png?raw=true"
              alt="Cart"
              className="cart"
            />
          </Link>
        </div>
      ) : (
        <div className="header-row">
          <HeaderNavItem
            to="/"
            className="header-nav-inactive"
            activeClassName="header-nav-active"
          >
            <div className="page-name">首頁</div>
          </HeaderNavItem>
          <HeaderNavItem
            to="/Product/All"
            className="header-nav-inactive"
            activeClassName="header-nav-active"
          >
            <div className="page-name">商品</div>
          </HeaderNavItem>
          <HeaderNavItem
            to="/About"
            className="header-nav-inactive"
            activeClassName="header-nav-active"
          >
            <div className="page-name">關於</div>
          </HeaderNavItem>

          <HeaderNavItem
            to="/Account"
            className="header-nav-inactive"
            activeClassName="header-nav-active"
          >
            <div className="page-name">會員</div>
          </HeaderNavItem>

          <Link to="/">
            <img
              src="https://github.com/Singularity-v/7th-Hach/blob/main/HOME/cart.png?raw=true"
              alt="Cart"
              className="cart"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
