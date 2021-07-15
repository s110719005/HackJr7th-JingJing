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
          <div className="product-list-container">
              
              {
                product.length===0?(
                  <div className="product-spinner-wrap">
                    很抱歉，沒有相關商品：（
                  </div>
                ):(
                  <div>
                    相關產品
                    <Row >
                    {product.products.map((relativeProduct,index) => (
                      <Col 
                        //key={product.id} 
                        span={6}
                      >
                          {index>=3?(
                              <div>
                              </div>
                          ):(
                              <div>
                                 <RelativeProductItem product={relativeProduct}/>
                              </div>
                          )}
                         
                      </Col>
                    ))}
                    </Row>
                  </div>
                )
              }
          </div>
        )
      }
    </>
    
    


    
    
  );
}

