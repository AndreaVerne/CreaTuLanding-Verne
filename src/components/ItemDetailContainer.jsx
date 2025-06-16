import React, { useState, useEffect } from 'react'
import Item from './Item';
import { getProducts, getOneProduct } from '../mock/AsyncMock';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    const [detail, setDetail] =useState({})
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])

    return (
        <>
            
                <>
                {loading ? (
                  <div className="center mt-2">
                    <Spinner animation="border" variant='secondary' />
                  </div>
                // <p>Cargando...</p>
            ) : (
              <ItemDetail detail={detail} />
            )}
                </>


        </>
    )
}

export default ItemDetailContainer