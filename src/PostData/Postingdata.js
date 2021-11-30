import React,{useState} from 'react'
const Postingdata = () => {
    const [data, setdata] = useState({userid:'',id:'',email:'',pwd:''})
    const [post, setpost] = useState([])
    const handleInput=(e)=>{
        let newdata={...data}
        newdata[e.target.name]=e.target.value;
        setdata(newdata)
        console.log(newdata)
    }
    const handleFom=(e)=>{
        e.preventDefault()
        const {userid,id,email,pwd} = data
        const getdat={'userid':userid,'id':id,'email':email,'pwd':pwd}
        setpost([...post,getdat])
        console.log(getdat)
    }
    return (
        <div>
            <h1>Form Posting</h1>
            <form onSubmit={handleFom}>
                <input type="text" name="userid" value={data.userid} onChange={handleInput} /><br />
                <input type="text" name="id" value={data.id} onChange={handleInput} /><br />
                <input type="text" name="email" value={data.email} onChange={handleInput} /><br />
                <input type="text" name="pwd" value={data.pwd} onChange={handleInput} /><br />
                <button>POst</button>
            </form>
                {/* {JSON.stringify(post)} */}
                    
                        <table className="table" style={{background:'tomato',color:'white'}}>
                            <thead>
                                <tr>
                                    <th>s.no</th>
                                    <th>userId</th>
                                    <th>id</th>
                                    <th>email</th>
                                    <th>pwd</th>
                                </tr>
                            </thead>
                            <tbody>
                            {post.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.userid}</td>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.pwd}</td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    
               
        </div>
    )
}

export default Postingdata;