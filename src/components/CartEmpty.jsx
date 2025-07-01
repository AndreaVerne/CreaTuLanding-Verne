import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="cartEmpty">
      <h1>Tu carrito está vacío! 😢</h1>
      <p>Probá agregando alguno de nuestros productos.</p>
      <p className="icon">⬇</p>
      <Link className="btn" to={"/"}>
        Ver productos
      </Link>
    </div>
  );
};

export default CartEmpty;
