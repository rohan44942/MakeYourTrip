<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

=======
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
<<<<<<< HEAD

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
=======
      <Outlet/>
      
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; all right reserved {new Date().getFullYear()} by Rohan pvt.
          lim.
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
