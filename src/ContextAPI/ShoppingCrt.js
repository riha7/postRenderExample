import React, { createContext,useState } from 'react'
import Cartitems from './Cartitems'
import Cartlength from './Cartlength'
export const store=createContext()
const ShoppingCrt = () => {
    const [items, setitems] = useState([
        {brand:'sony'},{brand:'ikea'},{brand:'vaio'}
    ])
    return (
        <div>
            shoppingCArt
            <store.Provider value={[items,setitems]}>
            <Cartitems />
            <Cartlength />
            </store.Provider>
        </div>
    )
}

export default ShoppingCrt
