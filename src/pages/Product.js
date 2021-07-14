import { useContext,useState,useEffect } from "react";
import { Layout } from 'antd';
import JJHeader from "../components/HeaderNew";
import ProductList from "../components/Product/ProductList";

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
        <div className="mainarea">
          <CategoryCard/>
          <div className="category-subtitle-container">
            <div className="category-current-name">
              {title}
            </div>
            <div>
              <div>
                <CategoryItem to="/Product/All" className="category-select-all" activeClassName="category-select-active">
                  查看全部
                </CategoryItem>
              </div>
              <Select defaultValue="ALL" 
                style={{ 
                    width: 150, 
                    borderRadius:"50px",
                }} 
                onChange={handleChange}
                >
                    <Option value="ALL">ALL</Option>
                    <Option value="BABY">BABY</Option>
                    <Option value="BUBBLE">BUBBLE</Option>
                    <Option value="WINTER">WINTER</Option>
                </Select>
            </div>
          </div>
          <ProductList/>
        </div>
    </div>
  );
}

export default Product;
