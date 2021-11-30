import React,{useContext,useState} from 'react'
import { store } from './ShoppingCrt'

const Cartitems = () => {
    const [items,setitems] = useContext(store)
    const [name, setname] = useState()
    
    const handleForm=(e)=>{
        e.preventDefault()
        setitems([...items,{brand:name}])
    }
    const deletHandle=(id)=>{
        let d=items.filter((old,index)=>index !==id)
        setitems(d)
    }
    return (
        <div>
          {items.map((item,index)=>{
              return(
                  <div key={index}>
                      <p>{item.brand} <span onClick={()=>deletHandle(index)}>x</span></p>
                  </div>
              )
          })}
            <form onSubmit={handleForm}>
        <input type="text" name='name' value={name} onChange={(e)=>setname(e.target.value)} />
        <button>ADd</button>
    </form>
        </div>
    )
}

export default Cartitems
