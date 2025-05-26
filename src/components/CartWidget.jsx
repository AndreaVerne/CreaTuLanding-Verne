import { MdOutlineShoppingCart } from "react-icons/md"
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
  
  return (
    <div >
      <MdOutlineShoppingCart className="cart-widget__icon" />
      <Badge bg="danger">{9}</Badge>
    </div>
  );
};

export default CartWidget;