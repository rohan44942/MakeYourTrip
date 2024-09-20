<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
=======
import {  NavLink } from "react-router-dom";
import style from "./AppNav.module.css";
function AppNav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="cities"> cities </NavLink>
        </li>
        <li>
          <NavLink to="countries"> countries </NavLink>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
