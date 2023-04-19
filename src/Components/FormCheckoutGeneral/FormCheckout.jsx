import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import FormCheckoutContainer from "./FormCheckoutContainer";
import Swal from "sweetalert2";

const FormCheckout = ({
  cart,
  mutiplicadorDePrecio,
  setOrderId,
  vaciarCarrito,
}) => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    verificacion: "",
    telefono: "",
  });

  let order = {
    buyer: userData,
    items: cart,
    total: mutiplicadorDePrecio(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        if (
          userData.email === userData.verificacion ||
          userData.verificacion === ""
        ) {
          setOrderId(res.id);
          vaciarCarrito();
        } else {
          Swal.fire(
            "Ups",
            "El email puesto no coincide con el original",
            "error"
          );
        }
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let orderDoc = doc(db, "Productos(Juegos)", product.id);
      updateDoc(orderDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  return (
    <FormCheckoutContainer
      handleSubmit={handleSubmit}
      userData={userData}
      setUserData={setUserData}
    />
  );
};

export default FormCheckout;
