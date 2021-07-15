import { useContext,useState,useEffect } from "react";
import { Layout } from 'antd';
import ProductDetail from "../components/Product/ProductDetail";
import { setProductDetail } from "../actions";
import { StoreContext } from "../store";

import JJHeader from "../components/HeaderNew";
import JJFooter from "../components/Footer";
import RelativeProduct from "../components/Product/RelativeProduct";
//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function ProductDetailPage({ match }) {
    const { dispatch } = useContext(StoreContext);   
    useEffect(() => setProductDetail(dispatch, match.params.productId, 0),[]);
  return (
    <div>
        <JJHeader/>
        <ProductDetail/>
        <RelativeProduct/>
        <JJFooter/>
    </div>
  );
}

export default ProductDetailPage;
