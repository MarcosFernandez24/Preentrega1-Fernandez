import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartTotalQuantity } = useContext(CartContext);

  const totalQuantity = cartTotalQuantity();

  return (
    <Link to="/carrito">
      <div>
        <BsFillCartFill color="black" size={30} />
        <div>
          <span>{totalQuantity}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
