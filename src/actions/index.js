import {
    //login
    BEGIN_LOGIN_REQUEST,
    SUCCESS_LOGIN_REQUEST,
    FAIL_LOGIN_REQUEST,
    LOGOUT_REQUEST,
    //register
    BEGIN_REGISTER_REQUEST,
    SUCCESS_REGISTER_REQUEST,
    FAIL_REGISTER_REQUEST,
  } from "../utils/constants";

  import {
    
    signInWithEmailPassword,
    registerWithEmailPassword,
    signOut,
    checkLoginApi,
    
  }from "../api"

  export const loginToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_LOGIN_REQUEST });
    try {
      const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
      dispatch({
        type: SUCCESS_LOGIN_REQUEST,
        payload: user.user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_LOGIN_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }
  
  
  export const registerToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_REGISTER_REQUEST });
    try {
      const user = await registerWithEmailPassword(userInfo.email, userInfo.password, userInfo.name,userInfo.birthday,userInfo.phone);
      console.log(userInfo)
      dispatch({
        type: SUCCESS_REGISTER_REQUEST,
        payload: user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_REGISTER_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }
  
  export const logoutFromFirebase = async (dispatch) => {
    signOut();
    dispatch({ type: LOGOUT_REQUEST });
  }

  export const checkLogin = (dispatch) => {
    const isLogin = checkLoginApi();
    if(!isLogin) {
      console.log("check");
      localStorage.removeItem('orderInfo')
      dispatch({ type: LOGOUT_REQUEST });    
    }
    return isLogin;
  }