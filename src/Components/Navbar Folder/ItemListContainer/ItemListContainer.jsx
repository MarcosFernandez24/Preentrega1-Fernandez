import { useEffect, useState } from "react";
import { productos } from "../../Productos/ProductosMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [itemss, setItems] = useState([]);

  const { category } = useParams();
  console.log(category);

  const productoPorCategoria = productos.filter(
    (elemento) => elemento.categoria === category
  );

  useEffect(() => {
    const listaDeProductos = new Promise((resolve, reject) => {
      resolve(category? productoPorCategoria : productos);
    });
    listaDeProductos
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  console.log(itemss);

  return (
    <div>
      <ItemList itemss={itemss} />
    </div>
  );
};

export default ItemListContainer;
