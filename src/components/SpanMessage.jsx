function SpanMessage({ message, color = "red" }) {
  //color seteado en rojo para que en un futuro si quiero mostrar algún mensaje exitoso pueda pasar otro color.

  return (
    <>
      <span style={{ color: color }}>
        * {message} <br></br>
      </span>
    </>
  );
}

export default SpanMessage;
