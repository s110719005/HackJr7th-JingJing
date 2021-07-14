import { useContext,useState,useEffect } from "react";
import { Layout } from 'antd';
import JJHeader from "../components/HeaderNew";
import ProductList from "../components/Product/ProductList";

import { StoreContext } from "../store"
import {setPage} from "../actions"
import {getTitle} from "../utils"
import CategoryCard from "../components/Product/CategoryCard";



function Product() {
  const { state: { page: { title, products } } , dispatch} = useContext(StoreContext);
  useEffect(() => {
    const url = window.location.pathname;
    console.log(url);
    setPage(dispatch,url, getTitle(url));
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <div className="">
        <JJHeader/>
        <div className="mainarea">
          Product
          <CategoryCard/>
          <div className="category-current-name">
            {title}
          </div>
          <ProductList/>
        </div>
    </div>
  );
}

export default Product;
