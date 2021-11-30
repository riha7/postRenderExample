import React,{useContext} from 'react'
import { store } from './Main'

const ComB = () => {
    const [count] = useContext(store)
    return (
        <div>
            ComB-{count}
        </div>
    )
}

export default ComB
