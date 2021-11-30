import React,{useContext} from 'react'
import { store } from './Conn'

const Cont1 = () => {
    const [count] = useContext(store)
    return (
        <div>
            Child1-{count.length}
        </div>
    )
}

export default Cont1
