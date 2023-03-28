import { useEffect, useState } from "react";
import { productos } from "../../Productos/ProductosMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
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
      resolve(category ? productoPorCategoria : productos);
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
      <ItemList itemss={itemss} />
    </div>
  );
};

export default ItemListContainer;
