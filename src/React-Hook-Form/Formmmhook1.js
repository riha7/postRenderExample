import React from 'react'
import { useForm } from 'react-hook-form'
import contents from '../static/index';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
    username:yup.string().required(),
    password:yup.string().required().min(4),
})
const Formmmhook1 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })
    const onSubmit=(data)=>console.log(data)
    console.log(errors)
    return (
        <div>
            <h1>react-hook-form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    contents.inputs.map((input,key)=>{
                        return(
                            <div key={key}>
                                <p><label>{input.label}</label> </p>
                                <p><input name={input.name} type={input.type} {...register((input.type))} /></p>
                                <p style={{color:'red'}}>{errors[input.name]  ?.message}</p>                    
                            </div>
                        )
                    })
                }
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Formmmhook1
