import React,{useState} from 'react'

const CallbkMemo = () => {
     const [items, setitems] = useState([{brand:'sony'},{brand:'ikea'}])
    const [data, setdata] = useState({first:''})
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newdat={'first':data.first}
        setitems([...items,newdat])
    }
    const handleInput=(e)=>{
        const newdata={...data}
        newdata[e.target.name] = e.target.value
        setdata(newdata)
        console.log(newdata)
    }
    const dltHandle=(id)=>{
        const x=items.filter((old,index)=>index !==id)
        setitems(x)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="first" value={data.first} onChange={handleInput} />
                <button>cLick</button>
            </form>
            {items.map((item,index)=>{
                return(
                    <div key={index}>
                        <p>{item.brand}</p>
                        <p>{item.first} <span onClick={()=>dltHandle(index)}>x</span> </p>                      
                    </div>
                )
            })}
        </div>
    )
}

export default CallbkMemo
