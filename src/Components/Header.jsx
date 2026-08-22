import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logoImage from "../assets/mg-logo-transparent.png";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} aria-label="Go to homepage">
        <img src={logoImage} alt="" />
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/about" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
