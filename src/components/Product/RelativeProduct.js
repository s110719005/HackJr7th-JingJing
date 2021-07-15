import { useContext ,useEffect} from "react";
import { Row, Col, Spin } from "antd";
import ProductItem from "./ProductItem";

import { LoadingOutlined } from '@ant-design/icons';
import { StoreContext } from "../../store";
import RelativeProductItem from "./RelativeProductItem";

export default function RelativeProduct() {
  const { state: { relativeProductDetail: { product }, requestProducts: { loading } } } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#f19c79" }} spin />;
  useEffect(() => {
    console.log(product);
    console.log("yo");
  }, []);
  return (
    <>
    {/* hi */}
      {loading
        ? (
          <div className="product-spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <div className="product-list-container mainarea">
              
              {
                product.length===0?(
                  <div className="product-spinner-wrap">
                    很抱歉，沒有相關商品：（
                  </div>
                ):(
                  <div>
                    <div className="relative-product-title-container">
                      <div className="relative-product-title">相關產品</div>
                      <div className="relative-product-title-line"></div>
                    </div>
                    <div className="relative-product-list-container">
                        <img
                        className="relative-product-arrow"
                        src="https://github.com/Singularity-v/7th-Hach/blob/main/ProductDetail/detail_pre.png?raw=true"
                        alt="arrow"
                        />
                        <div className="relative-product-listimg-container">
                            {product.products.map((relativeProduct,index) => (
                            <div>
                                {index>=3?(
                                    <div>
                                    </div>
                                ):(
                                    <div>
                                        <RelativeProductItem product={relativeProduct}/>
                                    </div>
                                )}
                                
                            </div>
                            
                            ))}
                        </div>
                        <img
                        className="relative-product-arrow"
                        src="https://github.com/Singularity-v/7th-Hach/blob/main/ProductDetail/detail_nex.png?raw=true"
                        alt="arrow"
                        />
                    </div>
                  </div>
                )
              }
          </div>
        )
      }
    </>
    
    


    
    
  );
}

