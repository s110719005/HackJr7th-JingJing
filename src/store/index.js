import { createContext,useReducer } from "react";
import useReducerWithThunk from "use-reducer-thunk";


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

  export const StoreContext = createContext();

  let cartItems;
  try{
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (!cartItems) cartItems = [];
  } catch(e) {
    cartItems = [];
  }

  let shippingAddress;
  try {
    shippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));
  } catch(e) {
    shippingAddress = {};
  }

  let userInfo;
  try {
    userInfo =  JSON.parse(localStorage.getItem("userInfo"));
  } catch(e) {
    userInfo = null;
  }

const initialState = {
    cart: {
        cartItems,
        shippingAddress,
        paymentMethod: 'Google',
      },
    //user
    userSignin: {
        loading: false,
        userInfo,
        error: "",
      },
      userRegister: {
        loading: false,
        userInfo: null,
        error: "",
      },
      //user info
    userInfo:{
        info:{}
    },
    requestUserInfo: {
        loading: false,
        error: null,
    },
    
  };

function reducer(state, action) {
    switch (action.type) {
  
    case BEGIN_LOGIN_REQUEST:
        return { ...state, userSignin: { ...state.userSignin, loading: true } };
        case SUCCESS_LOGIN_REQUEST:
        return {
            ...state,
            userSignin: {
                ...state.userSignin,
                loading: false,
                userInfo: action.payload,
                error: "",
            },
        };
        case FAIL_LOGIN_REQUEST:
        return {
            ...state,
            userSignin: {
                ...state.userSignin,
                loading: false,
                userInfo: null,
                error: action.payload,
            },
        };
        case LOGOUT_REQUEST:
        cartItems = [];
        return {
            ...state,
            cartItems,
            userSignin: {
                ...state.userSignin,
                userInfo: null,
            },
        };    
        case BEGIN_REGISTER_REQUEST:
        return { ...state, userRegister: { ...state.userRegister, loading: true } };
        case SUCCESS_REGISTER_REQUEST:
        return {
            ...state,
            userRegister: {
                ...state.userRegister,
                loading: false,
                userInfo: action.payload,
                error: "",
            },
            userSignin: {
                ...state.userSignin,
                userInfo: action.payload,
            }
        };
        case FAIL_REGISTER_REQUEST:
        return {
            ...state,
            userRegister: {
                ...state.userRegister,
                loading: false,
                userInfo: null,
                error: action.payload,
            },
        };
      default:
        return state;
    }
  }

export function StoreProvider(props) {
    const [state, dispatch] = useReducerWithThunk(
      reducer,
      initialState,
      "example"
    );
    const value = { state, dispatch };
  
    return (
      <StoreContext.Provider value={value}>
        {props.children}
      </StoreContext.Provider>
    );
  }