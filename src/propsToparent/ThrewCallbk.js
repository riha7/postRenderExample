import React,{useRef} from 'react'

const ThrewCallbk = (props) => {
    
    const Valref = useRef('')
    console.log(Valref.current.value)
    return (
        <div>
            throw callback
            <input type="text" ref={Valref} />
        
            <button onClick={()=>props.update()}>parentTOchild</button>
        </div>
    )
}

export default ThrewCallbk
