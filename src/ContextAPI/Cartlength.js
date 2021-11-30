import React,{useContext} from 'react'
import { store } from './ShoppingCrt'

const Cartlength = () => {
    const [items] = useContext(store)
    return (
        <div>
           items- {items.length}
        </div>
    )
}

export default Cartlength
