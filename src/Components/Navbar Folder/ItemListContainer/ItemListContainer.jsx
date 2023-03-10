import { useEffect, useState } from "react";
import { productos } from "../../Productos/ProductosMock";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = () => {
  const [itemss, setItems] = useState([]);

  useEffect(() => {
    const listaDeProductos = new Promise((resolve, reject) => {
      resolve(productos);
    });
    listaDeProductos
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(itemss);

  return (
    <div>
      <ItemList itemss={itemss} />
    </div>
  );
};

export default ItemListContainer;
