import { useContext } from "react";
import { Row, Col, Spin } from "antd";
import ProductItem from "./ProductItem";

import { LoadingOutlined } from '@ant-design/icons';
import { StoreContext } from "../../store";

export default function ProductList() {
  const { state: { page: { products }, requestProducts: { loading } } } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#f19c79" }} spin />;

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
                products.length===0?(
                  <div className="product-spinner-wrap">
                    很抱歉，沒有您搜尋的商品：（
                  </div>
                ):(
                  <div>
                    <Row >
                    {products.map(product => (
                      <Col 
                        //key={product.id} 
                        span={6}
                      >
                          <ProductItem product={product}/>
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

