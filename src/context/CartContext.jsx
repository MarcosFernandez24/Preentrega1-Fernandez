import { createContext, useState } from "react";

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
            quantity: elemento.quantity + product.quantity,
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
  const mutiplicadorDePrecio = () =>{

    let totalPrice = cart.reduce((acc, elemento)=>{
      return acc + (elemento.quantity * elemento.precio)
    }, 0)

return totalPrice

  }

  let data = {
    cart,
    addToCart,
    vaciarCarrito,
    cartTotalQuantity,
    mutiplicadorDePrecio 
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
