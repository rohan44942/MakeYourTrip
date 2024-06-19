import { NavLink } from "react-router-dom";
import style from "./NavPages.module.css";

function NavPages() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavPages;
