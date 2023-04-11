import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();

  const [itemss, setItemss] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "Productos(Juegos)");

    if (category) {
      const q = query(itemsCollection, where("categoria", "==", category));
      getDocs(q).then((res) => {
        let products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItemss(products);
      });
    } else {
      getDocs(itemsCollection).then((res) => {
        let products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItemss(products);
      });
    }
  }, [category]);

  return (
    <div>
      {itemss.length > 0 ? (
        <ItemList itemss={itemss} />
      ) : (
        <PacmanLoader
          color={"orangered"}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default ItemListContainer;
