import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { setPage, headerActiveNavItemSet } from "../actions";
import {getTitle} from "../utils"


export default function HeaderNavItem(props) {
  const { children, to, className, activeClassName } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
    //setPage(dispatch, to, getTitle(to));
   headerActiveNavItemSet(dispatch, to);
  };
  
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`
            ${className} 
            ${state.headerNav.activeItem === to ? activeClassName : ""}`}
      >
        {children}
      </div>
    </Link>
  );
}
