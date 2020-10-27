import React from 'react'
import './FormInput.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
    console.log(otherProps.value);
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
                label && 
            (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>{label}</label>)
            }
        </div>
    )
}

export default FormInput
