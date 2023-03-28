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
        <Link to="/">Todos</Link>

        <Link to="/category/Mundo Abierto">Mundo Abierto</Link>
        <Link to="/category/Soulslike">Soulslike</Link>
        <Link to="/category/Horror Survival">Horror Survival</Link>
        <Link to="/category/Mazmorras">Mazmorras</Link>
        <Link to="/login">Login</Link>
        <Link to="/soporte">
          <li>Soporte</li>
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
