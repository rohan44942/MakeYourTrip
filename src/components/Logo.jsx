import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "./logo.png";

function Logo() {
  //  return <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />; both will work
  return (
    <Link to="/">
      <img src={logo} alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
