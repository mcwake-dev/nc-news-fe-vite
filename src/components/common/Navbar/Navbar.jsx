import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={styles.brand}>
        <span className={styles.colourBar}></span>
        <Link className={styles.item} to="/">
          <i className="far fa-newspaper"></i>&nbsp;nc news.
        </Link>
        <button
          className={`${styles.burger} ${menuActive ? styles.menuActive : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className={`${styles.menu} ${menuActive ? styles.menuActive : ""}`}>
        <div className={styles.container}>
          <div className={styles.main}>
            <Link to="/" className={styles.item}>
              Home
            </Link>
            <Link to="/articles" className={styles.item}>
              Articles
            </Link>
            <Link to="/users" className={styles.item}>
              Users
            </Link>
          </div>
          <div className={styles.auth}>
            <Link to="/users/login" className={styles.item}>
              Login
            </Link>
            <Link to="/users/register" className={styles.item}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
