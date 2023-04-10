import { createContext, useState } from "react";
import * as React from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let repeatProduct = isInCart(product.id);

    if (repeatProduct) {
      let modifiedCart = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(modifiedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const cartTotalQuantity = () => {
    const totalInCart = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return totalInCart;
  };
  const mutiplicadorDePrecio = () => {
    let totalPrice = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.precio;
    }, 0);

    return totalPrice;
  };

  
  const eliminarProductox1 = (id) => {
    const newCart = cart.filter((element) => element.id !== id);
    setCart(newCart);
  };
  const cantidadXId = (id) =>{

   const productQuant = cart.find((element)=> element.id === id)
return productQuant?.quantity
  }

  let data = {
    cart,
    addToCart,
    vaciarCarrito,
    cartTotalQuantity,
    mutiplicadorDePrecio,
    eliminarProductox1,
    cantidadXId
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
