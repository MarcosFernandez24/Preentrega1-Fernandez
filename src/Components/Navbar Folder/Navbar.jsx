import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import NavbarContainer from "./NavbarContainer";

const Navbar = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [open, setOpen] = useState(false);

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
    <div>
      <NavbarContainer
        setOpen={setOpen}
        open={open}
        categoryList={categoryList}
      />
      <CartWidget />
    </div>
  );
};

export default Navbar;
