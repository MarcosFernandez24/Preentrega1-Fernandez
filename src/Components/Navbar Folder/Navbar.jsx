import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo/Logo";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <ul className={styles.containerList}>
        <li>Todos</li>
        <li>Categorias</li>
        <li>Soporte</li>
      </ul>
      <CartWidget />

      
    </div>
  );
};

export default Navbar;
