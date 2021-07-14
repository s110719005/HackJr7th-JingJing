import { useContext } from "react";
import { Row, Col, Spin } from "antd";
import ProductItem from "./ProductItem";

import { LoadingOutlined } from '@ant-design/icons';
import { StoreContext } from "../../store";

export default function ProductList() {
  const { state: { page: { products }, requestProducts: { loading } } } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

  return (
    <>
    {/* hi */}
      {loading
        ? (
          <div className="product-spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <Row gutter={[32, 32]}>
            {
              products.length===0?(
                <div className="product-spinner-wrap">
                  很抱歉，沒有您搜尋的商品：（
                </div>
              ):(
                <div>
                  {products.map(product => (
                    <Col 
                      key={product.id} 
                      xs={{ span: 12 }} 
                      sm={{ span: 8 }} 
                      md={{ span: 8 }} 
                      lg={{ span: 6 }}
                      xl={{ span: 6 }}
                      xxl={{ span: 2 }}
                    >
                        <ProductItem product={product}/>
                    </Col>
                  ))}
                </div>
              )
            }
            
          
        </Row>
        )
      }
    </>
    
    


    
    
  );
}

