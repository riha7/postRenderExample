import React, { createContext,useState } from 'react'
import Con2 from './Con2'
import Cont1 from './Cont1'
export const store = createContext()
const Conn = () => {
    const [count, setcount] = useState([
        {name:'hari'},{name:'riha'},{name:'irah'}
    ])
    return (
        <div>
            Sharing data Parent
            <store.Provider value={[count,setcount]}>
                <Cont1 />
                <Con2 />
            </store.Provider>
        </div>
    )
}

export default Conn
