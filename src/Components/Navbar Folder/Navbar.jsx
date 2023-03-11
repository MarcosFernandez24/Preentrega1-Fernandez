import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo/Logo";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link to="/">
        <Logo />
      </Link>

      <ul className={styles.containerList}>
        <Link to="/">
          <li>Todos</li>
        </Link>

        <Link to="/soporte">
          <li>Soporte</li>
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
