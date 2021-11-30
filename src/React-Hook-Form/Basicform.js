import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useErrorHandler } from 'react-error-boundary'
//const url='https://jsonplaceholder.typicode.com/users';
const Basicform = () => {
    const getError = useErrorHandler()
        const [count, setcount] = useState(0)
        useEffect(async() => {
            try {
                if (count>11) {
                    throw new Error('new error')
                } else {
                    const x= await axios.get('https://jsonplaceholder.typicode.com/users')
                    const s=await x.data
                    console.log(s)
                }                                
            } catch (error) {
                console.log('catch error',error)
                getError(error)
            }

        }, [count])
    return (
        <div>
            {count}
            <button onClick={()=>setcount(count+1)}>incre</button>            
        </div>
    )
}

export default Basicform
