import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store";
import { setPage, activeNavItemSet } from "../../actions";
import {getTitle} from "../../utils"


export default function CategoryItem(props) {
  const { children, to, className, activeClassName } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
    setPage(dispatch, to, getTitle(to));
   activeNavItemSet(dispatch, to);
  };
  
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`
            ${className} 
            ${state.navBar.activeItem === to ? activeClassName : ""}`}
      >
        {children}
      </div>
    </Link>
  );
}
