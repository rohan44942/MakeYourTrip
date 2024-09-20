import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
=======
import style from "./PageNav.module.css";
import Logo from "../components/Logo";

function PageNav() {
  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={style.ctaLink}>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
