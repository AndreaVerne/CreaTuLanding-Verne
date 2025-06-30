import { createContext, useState } from "react";

//contexto
export const CartContext = createContext();
//proveedor (provider)
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //funciones que modifican el estado de carrito
    const addItem = (item, cantidad) => {
       console.log("item: ", item, "cantidad: ", cantidad);
    }
return(
    <CartContext.Provider value={{cart, addItem}}>
        {children}
    </CartContext.Provider>
)
}