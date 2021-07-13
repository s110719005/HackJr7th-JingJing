import { useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../../store"
import { setProductDetail } from "../../actions";

export default function ProductItem({ product }) {
    const { dispatch } = useContext(StoreContext);
    return (
        <div className="">
            {/* <Link to={`/product/${product.id}`}
                onClick={()=>{
                    setProductDetail(dispatch, product.id, 1,0,0);
                }}
            > */}
                <img
                    src={product.picture[0]}
                    alt={product.name} />
                
            {/* </Link> */}
            <div className="">
                {product.brand}
            </div>
            <div className="">
                {product.name}
            </div>
            <span
                className="">
                NT$&nbsp;{product.originalPrice}
            </span>
            
        </div>
    );
}
