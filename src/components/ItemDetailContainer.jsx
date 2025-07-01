import React, { useState, useEffect } from "react";
import { getOneProduct } from "../mock/AsyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOneProduct(id)
      .then((res) => setDetail(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <>
        {loading ? (
          <LoaderComponent />
        ) : (
          // <p>Cargando...</p>
          <ItemDetail detail={detail} />
        )}
      </>
    </>
  );
};

export default ItemDetailContainer;
