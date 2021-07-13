import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
    <div className="header text-white">
      <div className="header text-white">
        {userInfo === null ? (
          <div>
            <div>淨・靚</div>
            <Link to="/">
              <div className="text-white">首頁</div>
            </Link>
            <Link to="/">
              <div className="text-white">商品</div>
            </Link>
            <Link to="/">
              <div className="text-white">關於</div>
            </Link>

            <Link to="/SignInUp?redirect=Account">
              <div className="text-white">登入/註冊</div>
            </Link>
            <Link to="/SignInUp?redirect=Account">
              <div className="text-white">購物車</div>
            </Link>
          </div>
        ) : (
          <div>
            <div>淨・靚</div>
            <Link to="/">
              <div className="text-white">首頁</div>
            </Link>
            <Link to="/">
              <div className="text-white">商品</div>
            </Link>
            <Link to="/">
              <div className="text-white">關於</div>
            </Link>

            <Link to="/SignInUp?redirect=Account">
              <div className="text-white">會員</div>
            </Link>
            <Link to="/SignInUp?redirect=Account">
              <div className="text-white">購物車</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
