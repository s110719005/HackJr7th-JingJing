import { useContext,useState,useEffect } from "react";
import { Layout } from 'antd';
import JJHeader from "../components/HeaderNew";
import ProductList from "../components/Product/ProductList";
import JJFooter from "../components/Footer";

import { StoreContext } from "../store"
import {setPage} from "../actions"
import {getTitle} from "../utils"
import CategoryCard from "../components/Product/CategoryCard";
import CategoryItem from "../components/Product/CategoryItem";

import { Select } from 'antd';
const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

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
        <div className="mainarea product-main">
          <CategoryCard/>
          <div className="category-subtitle-container">
            <div className="category-current-name">
              {title}
            </div>
            <div className="category-subtitle-container-right">
              <div>
                <CategoryItem to="/Product/All" className="category-select-all" activeClassName="category-select-active">
                  查看全部
                </CategoryItem>
              </div>
              <Select defaultValue="預設" 
                style={{ 
                    width: 150, 
                    borderRadius:"50px",
                }} 
                onChange={handleChange}
                
                >
                    <Option value="ALL">全部</Option>
                    <Option value="TimeD">依上架時間(由新至舊)</Option>
                    <Option value="TimeA">依上架時間(由舊至新)</Option>
                    <Option value="PriceD">依價錢高低(由高至低)</Option>
                    <Option value="PriceA">依價錢高低(由低至高)</Option>
                </Select>
            </div>
          </div>
          <ProductList/>
          <div className="product-more-container">
            <div className="product-more-text text-white">
              更多商品
            </div>
          </div>
        </div>
        <JJFooter />
    </div>
  );
}

export default Product;
