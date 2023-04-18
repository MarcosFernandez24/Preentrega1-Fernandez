import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import FormCheckoutContainer from "./FormCheckoutContainer";

const FormCheckout = ({
  cart,
  mutiplicadorDePrecio,
  setOrderId,
  vaciarCarrito,
}) => {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total: mutiplicadorDePrecio(),
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        vaciarCarrito();
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
