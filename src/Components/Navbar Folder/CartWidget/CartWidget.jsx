import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/carrito">
      <div>
        <BsFillCartFill color="black" size={30} />
      </div>
    </Link>
  );
};

export default CartWidget;
