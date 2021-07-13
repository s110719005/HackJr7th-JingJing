import { useState,useEffect, useContext  } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../store"


export default function Header() {
  const { state: { userSignin : { userInfo, remember } } } = useContext(StoreContext);
  const history = useHistory();
  useEffect(() => {
    if(remember)
       localStorage.setItem("userInfo", JSON.stringify(userInfo));
    else
     localStorage.removeItem("userInfo");
 }, [userInfo, remember]);
  return (
    <div className="header text-white">
      <div>
          淨・靚
      </div>
      I am header
      <Link to="/">
        <div className="text-white">
            首頁
        </div>
        </Link>
      <Link to="/SignInUp?redirect=Account">
        <div className="text-white">
            登入/註冊
        </div>
        </Link>
    </div>
  );
}
