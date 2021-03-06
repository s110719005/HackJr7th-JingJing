import { useContext } from "react";
import { Link,useHistory } from 'react-router-dom';
import { StoreContext } from "../../store"
import { setProductDetail,setRelative } from "../../actions";

export default function ProductItem({ product }) {
    const { dispatch } = useContext(StoreContext);
  const history = useHistory();

    const onClick = async () => {
        await setProductDetail(dispatch, product.id);
        await setRelative(dispatch,product.category,product.id);
        history.push(`/item/${product.id}`);
      };
    return (
        <div className="">
            {/* <Link to={`/product/${product.id}`}
                onClick={()=>{
                    setProductDetail(dispatch, product.id, 1,0,0);
                }}
            >
                <img
                    src={product.picture[0]}
                    alt={product.name} />
                
            </Link> */}
            <div className="product-item-picture-container">
                <div className="product-item-picture-bg"></div>
                <img
                    className="product-item-picture"
                    src={product.picture[0]}
                    alt={product.name} 
                />
                {/* <Link to={`/item/${product.id}`}
                    
                > */}
                    <div className="product-item-hover"
                    onClick={onClick}
                    >
                    NT$&nbsp;{product.nowPrice}
                    </div>
                {/* </Link> */}

            </div>
            <div className="product-item-text-container">
                <div className="product-item-brand">
                    {product.brand}
                </div>
                <div className="product-item-name">
                    {product.name}
                </div>
                <span
                    className="product-item-price">
                    NT$&nbsp;{product.originalPrice}
                </span>
            </div>
            
        </div>
    );
}
