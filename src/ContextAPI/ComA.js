import React,{useContext} from 'react'
import { store } from './Main'

const ComA = () => {
    const [count] = useContext(store)
    return (
        <div>
            ComA {count}
            
        </div>
    )
}

export default ComA
