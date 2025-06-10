import ItemDetailContainer from "./ItemDetailContainer"

const ItemListContainer = (props) => {
    return(
        <div className="container">
            <h1 className="text-center">{props.saludo}</h1>
            <ItemDetailContainer />
        </div>
    )
    }
    export default ItemListContainer