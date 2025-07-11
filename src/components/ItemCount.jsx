import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const comprar = () => {
    onAdd(count);
  };

  return (
    <div
      id="itemCount"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <button
          style={{ display: stock === 0 ? "none" : "" }}
          className="btn operacion"
          onClick={restar}
        >
          -
        </button>
        <span className="btn btn-count">{stock === 0 ? 0 : count}</span>
        <button
          style={{ display: stock === 0 ? "none" : "" }}
          className="btn operacion"
          onClick={sumar}
        >
          +
        </button>
      </div>
      {/* <button className='btn btn-primary'  disabled={stock === 0} onClick={comprar}>Comprar</button> */}
      <button
        className="btn mt-2"
        disabled={stock === 0 || count === 0}
        onClick={() => comprar()}
      >
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
