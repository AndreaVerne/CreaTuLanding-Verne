import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        getProducts()
            .then(res => setDetail(
                res.find((items) => items.id === '02'
                )))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <ItemDetail datail={detail} />
        </>
    )
}

export default ItemDetailContainer