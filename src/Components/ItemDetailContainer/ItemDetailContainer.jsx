import React from "react";
import { useParams } from "react-router-dom";

import { productos } from "../Productos/ProductosMock";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = productos.find(
    (Elementos) => Elementos.id === Number(id)
  );

  console.log(productSelected);
  return (
    <div>
      <h1>{productSelected.nombre}</h1>
      <h2>{productSelected.precio} USD$</h2>
      <img src={productSelected.imgSrc} alt="" />
      <h3>{productSelected.descripcion}</h3>
      <button>agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
