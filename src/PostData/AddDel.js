import React,{useState} from 'react'

const AddDel = () => {
    const [state, setstate] = useState({first:'',second:'',third:''})
    const [data, setdata] = useState([])
    const handleChange=(e)=>{
        const newdata={...state}
        newdata[e.target.name] = e.target.value;
        setstate(newdata)
        console.log(newdata);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newdat={'first':state.first,'second':state.second,'third':state.third}
        setdata([...data,newdat])   
    }
    const deleteHandler=(id)=>{
        const dltdata = data.filter((old,index)=>index===id)
        setdata(dltdata)
        setstate('')
    }
    return (
        <div>
            <h1 style={{color:'purple'}}>Add & delete data items.</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="first" value={state.first} onChange={handleChange} />
                <input type="text" name="second" value={state.second} onChange={handleChange} />
                <input type="text" name="third" value={state.third} onChange={handleChange} />
                <button>Add</button>
            </form>
                <table class="table">
                    <thead>
                        <tr>
                            <th>s.no</th>
                            <th>first</th>
                            <th>second</th>
                            <th>third</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.first}</td>
                                        <td>{item.second}</td>
                                        <td>{item.third} <span onClick={()=>deleteHandler(index)}>x</span> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default AddDel
