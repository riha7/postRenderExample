import React,{useState,useCallback} from 'react'

const MEMO = () => {
    const [countOne, setcountOne] = useState(0)
    const [countTwo, setcountTwo] = useState(4)
    const idEven=useCallback(
        () => {
            let i=0
            while(i<20000000) i++
            return countOne %2===0
        },
        [countOne],
    )
    return (
        <div>
                memo
                <button onClick={()=>setcountOne(countOne+1)}>youCOUntONe-{countOne}</button>
                {idEven() ? 'even':'odd'} <br />
                <button onClick={()=>setcountTwo(countTwo+1)}>youCOUntTWO-{countTwo}</button>
        </div>
    )
}

export default MEMO
