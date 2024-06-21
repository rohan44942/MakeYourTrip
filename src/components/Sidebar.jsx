import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet/>
      
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; all right reserved {new Date().getFullYear()} by Rohan pvt.
          lim.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
