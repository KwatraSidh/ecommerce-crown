import React from 'react';
import './formInput.styles.scss'

const FormInput =({handleChange,name,type,value,label})=>{
    return (
        <div className='group'>
            <input className='form-input' type={type} value={value} name={name} onChange={handleChange}/>
            {label?(<label className={`${value.length? 'shrink':''} form-input-label`}>{label}</label>):null}
        </div>
        
    )
}

export default FormInput;