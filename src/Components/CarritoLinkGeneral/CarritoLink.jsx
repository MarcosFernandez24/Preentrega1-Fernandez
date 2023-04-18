import * as React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";
import CarritoLinkContainer from "./CarritoLinkContainer";

const CarritoLink = () => {
  const { cart, vaciarCarrito, mutiplicadorDePrecio, eliminarProductox1 } =
    useContext(CartContext);

  const totalAPagar = mutiplicadorDePrecio();

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const confirmClear = () => {
    Swal.fire({
      title: "Queres vaciar el carrito?",
      text: "Se removeran todos los productos del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire("Se vacio el carrito.", "", "success");
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h2>Gracias por su compra</h2>
        <h4>el comprobante: {orderId}</h4>
        <Link to="/">Seguir comprando</Link>
      </div>
    );
  }

  return (
    <CarritoLinkContainer
      showForm={showForm}
      cart={cart}
      eliminarProductox1={eliminarProductox1}
      setShowForm={setShowForm}
      confirmClear={confirmClear}
      totalAPagar={totalAPagar}
      mutiplicadorDePrecio={mutiplicadorDePrecio}
      setOrderId={setOrderId}
      vaciarCarrito={vaciarCarrito}
    />
  );
};

export default CarritoLink;
