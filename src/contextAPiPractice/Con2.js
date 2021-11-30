import React,{useContext,useState} from 'react'
import { store } from './Conn'

const Con2 = () => {
    const [count,setcount] = useContext(store)
    const [name, setname] = useState('')
    // const [data, setdata] = useState([])
    const handleSubmit=(e)=>{
        e.preventDefault()
        setcount([...count,{name:name}])
    }
    const dltHandle=(id)=>{
        let dltdata=count.filter((old,index)=>index !==id)
        setcount(dltdata)
    }
    return (
        <div>
            child2
            <form onSubmit={handleSubmit}>
                <input type="text"  name='name' value={name} onChange={(e)=>setname(e.target.value)} />
                <button>adName</button>
            </form>
            {count.map((item,index)=>{
                return(
                    <div key={index}>
                        <p>{item.name} <span onClick={()=>dltHandle(index)}>x</span> </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Con2
