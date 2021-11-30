import React, { createContext,useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'
export const store=createContext()
const Main = () => {
    const [count, setcount] = useState(0)
    return (
        <div>
            Main
            <store.Provider value={[count,setcount]}>
            <ComA />
            <ComB />
            <button onClick={()=>setcount(count+1)}>increment</button>
            </store.Provider>
        </div>
    )
}

export default Main
