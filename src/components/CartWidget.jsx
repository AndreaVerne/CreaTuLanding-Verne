import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <div>
      <MdOutlineShoppingCart className="cart-widget__icon" />
      <Badge bg="danger">{totalItems()}</Badge>
    </div>
  );
};

export default CartWidget;
