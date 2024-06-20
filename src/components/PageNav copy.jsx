import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";


function PageNav() {
  return (
    <nav className={style.nav}>
      <ul>
        
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
