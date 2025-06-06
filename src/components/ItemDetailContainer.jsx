import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { getProducts, getOneProduct } from '../mock/AsyncMock';
import { Col, Container, Row } from 'react-bootstrap';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
     const [loading, setLoading] = useState(true);
    useEffect(()=>{
        getOneProduct('03')
        //.then((res)=> setDetail(res))
       // .catch((error)=> console.log(error))
    }, [])
    
    useEffect(()=>{
        getProducts()
            .then((res) =>
                setDetail(res))
            .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    },[])

    return (
        <>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                  <Container>
        <Row>
          {detail.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4" >
              <ItemDetail detail={item} />
            </Col>
          ))}
        </Row>
      </Container>
                </>
            )}
        </>
    )
}

export default ItemDetailContainer