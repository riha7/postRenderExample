import React,{useState} from 'react'

const Basicdrop = () => {
    const [fooditem, setfooditem] = useState('')

    return (
        <div className='container'>
            <select value={fooditem} onChange={(e)=>{
                let foodList=e.target.value
                setfooditem(foodList)
            }}>
                <option value="#">--select--</option>
                <option value="idili">IDLY</option>
                <option value="upma">UPMA</option>
                <option value="dosa">DOSA</option>
            </select>
            
            <div>
            {fooditem}
            </div>
            
        </div>
    )
}

export default Basicdrop
