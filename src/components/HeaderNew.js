import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Menu, Dropdown, Space } from "antd";
import { StoreContext } from "../store";

export default function Header() {
  const {
    state: {
      userSignin: { userInfo, remember },
    },
  } = useContext(StoreContext);
  const history = useHistory();
  useEffect(() => {
    if (remember) localStorage.setItem("userInfo", JSON.stringify(userInfo));
    else localStorage.removeItem("userInfo");
  }, [userInfo, remember]);

  return (
    <div className="header">
      <div>淨・靚</div>
      {userInfo === null ? (
        <div>
          <Link to="/">
            <div className="page-name text-choco">首頁</div>
          </Link>
          <Link to="/">
            <div className="page-name text-choco">商品</div>
          </Link>
          <Link to="/">
            <div className="page-name text-choco">關於</div>
          </Link>

          <Link to="/SignInUp?redirect=Account">
            <div className="page-name text-choco">登入/註冊</div>
          </Link>
          <Link to="/SignInUp?redirect=Account">
            <img
              src="https://github.com/Singularity-v/7th-Hach/blob/main/HOME/cart.png?raw=true"
              alt="Cart"
              className=""
            />
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/">
            <div className="page-name text-choco">首頁</div>
          </Link>
          <Link to="/">
            <div className="page-name text-choco">商品</div>
          </Link>
          <Link to="/">
            <div className="page-name text-choco">關於</div>
          </Link>

          <div className="page-name">
            <Link to="/SignInUp?redirect=Account" className="text-choco">
              會員
            </Link>
          </div>

          <Link to="/SignInUp?redirect=Account">
            <img
              src="https://github.com/Singularity-v/7th-Hach/blob/main/HOME/cart.png?raw=true"
              alt="Cart"
              className=""
            />
          </Link>
        </div>
      )}
    </div>
  );
}
