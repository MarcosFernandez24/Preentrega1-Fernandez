import { useEffect, useState } from "react";
import { productos } from "../../Productos/ProductosMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
const ItemListContainer = () => {
  const [itemss, setItemss] = useState([]);

  const { category } = useParams();

  let productoPorCategoria = undefined;
  if (category) {
    productoPorCategoria = productos.filter(
      (elemento) => elemento.categoria === category
    );
  } else {
    productoPorCategoria = productos;
  }

  useEffect(() => {
    const listaDeProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(category ? productoPorCategoria : productos);
      }, 2000);
    });
    listaDeProductos
      .then((res) => {
        setItemss(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
