import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../mock/AsyncMock"
import Spinner from 'react-bootstrap/Spinner';


const ItemListContainer = (props) => {
    const[data, setData]= useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((respuesta)=> {
            if(categoryId){
                //filtrar
                setData(respuesta.filter((prod)=> prod.category === categoryId))
            }else{
                setData(respuesta)
            }
        })
        .catch((error)=> console.log(error))
       .finally(()=> setLoading(false))
    },[categoryId])

    return(
        <div className="container">
            <h1 className="text-center">{props.saludo} <i>{categoryId}</i></h1>
            {loading ? (
                // <p>Cargando...</p>
                <div className="center  mt-2">
                <Spinner animation="border" variant="secondary" />
                </div>
            ) : (
                <ItemList data={data} />
            )}
        </div>
    )
    }
    export default ItemListContainer