import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { productos } from "../Productos/ProductosMock";
import ItemCount from "../itemCount/itemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const productSelected = productos.find(
    (Elementos) => Elementos.id === Number(id)
  );

  const onAdd = (cantidad) => {

let producto ={
  ...productSelected,
  quantity: cantidad
}

    addToCart(producto);
    
  };

  return (
    <div>
      <h1>{productSelected.nombre}</h1>
      <h2>{productSelected.precio} USD$</h2>
      <img src={productSelected.imgSrc} alt="" />
      <h3>{productSelected.descripcion}</h3>

      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
