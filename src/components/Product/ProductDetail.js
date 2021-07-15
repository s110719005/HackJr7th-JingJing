import { useContext,useState } from "react";
import { Select, Row, Col, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { StoreContext } from "../../store"
import { setProductDetail } from "../../actions";
import { Link } from "react-router-dom";


const { Option } = Select;

function ProductDetail() {
   const { state: { productDetail: { product}, requestProducts: { loading } }, dispatch } = useContext(StoreContext);
   const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#f19c79" }} spin />;

   const [nowPic, setNowPic] = useState(0);//卡有沒有打開

   return (
      <div className="mainarea productDetail">
         {loading
            ? (
               <div className="productDetail-spinner-wrap">
                  <Spin indicator={antIcon} className="spinner" />
               </div>
            ) : (
               <div className="productDetail-content">
                  <div className="productDetail-left">
                     <div className="productDetail-bigpic-container">
                        <img
                        className="productDetail-bigpic"
                        src={product.picture[nowPic]}
                        alt={product.name} 
                        />
                     </div>
                     <div className="productDetail-smallpic-map">
                        {product.picture.map((productPic,index) => (
                        
                           <div className="productDetail-smallpic-container"
                                 onClick={() => {
                                    setNowPic(index);
                                 }}
                           >
                              <img
                                 className="productDetail-smallpic"
                                 src={product.picture[index]}
                                 alt={product.name} 
                              />
                           </div>
                        
                     ))}
                     </div>
                  </div>
                  <div>
                     <div className="productdetail-brand">{product.brand}</div>
                     <div className="productdetail-name">{product.name}</div>
                     <div className="productdetail-description">{product.description}</div>
                     <div className="productdetail-category">{product.categoryC}</div>
                     <div className="productdetail-originalPrice">原價：{product.originalPrice}</div>
                     <div className="productdetail-nowPrice">淨・靚價：{product.nowPrice}</div>
                     <div className="productdetail-expireDate">保存期限：{product.expireDate}</div>
                     <div className="productdetail-useRate">使用程度：{product.useRate}</div>
                     <Link to="/UsageIntro">
                        <div className="productdetail-usageIntro">程度劃分說明</div>
                     </Link>
                     <div className="productdetail-add-btn">加入購物車</div>
                     <div className="productdetail-buy-btn">立即購買</div>
                  </div>
               </div>
            )
         }
      </div>
   );
}

export default ProductDetail;