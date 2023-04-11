import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../itemCount/itemCount";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { addToCart, cantidadXId } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "Productos(Juegos)");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(producto);
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: `Se agrego ${producto.nombre} al carrito, cantidad: ${producto.quantity}`,
      toast: true,
      timerProgressBar: true,
      showConfirmButton: false,
      timer: 3000,
    });
  };

  let cantidadQ = cantidadXId(Number(id));

  return (
    <div>
      <h1>{productSelected.nombre}</h1>
      <h2>{productSelected.precio}$</h2>
      <img src={productSelected.imgSrc} alt="" />
      <h3>{productSelected.descripcion}</h3>

      <ItemCount
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={cantidadQ}
      />
    </div>
  );
};

export default ItemDetailContainer;
