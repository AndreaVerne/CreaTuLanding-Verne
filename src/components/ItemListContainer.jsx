import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { db } from "../Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productsCollection = categoryId ?
    query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products");
    getDocs(productsCollection).then((res) => {
      const list = res.docs.map((doc) => (
        {
          id: doc.id,
          ...doc.data()
        }
      ));
      setData(list);
    }).catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }, [categoryId]);
  
  return (
    <div className="container">
      <h1 className="text-center">
        {props.saludo} <i>{categoryId}</i>
      </h1>
      {loading ? <LoaderComponent /> : <ItemList data={data} />}
    </div>
  );
};
export default ItemListContainer;
