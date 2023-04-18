import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo/Logo";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Navbar = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "Categorias");
    getDocs(itemsCollection).then((res) => {
      let arrayDeCategorias = res.docs.map((categoria) => {
        return {
          ...categoria.data(),
          id: categoria.id,
        };
      });
      setCategoryList(arrayDeCategorias);
    });
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <Link to="/">
        <Logo />
      </Link>

      <ul className={styles.containerList}>
        {categoryList.map((categoria) => {
          return (
            <Link key={categoria.id} to={categoria.path}>
              {categoria.titulo}
            </Link>
          );
        })}
        <Link to="/soporte">
          <li>Soporte</li>
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
