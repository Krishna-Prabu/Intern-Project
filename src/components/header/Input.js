import React from 'react';
import classes from './Input.module.css';

const Input = ({type, onChange, placeholder, value, min, max}) => {
    const changeHandler = (e) => {
        onChange(e);
    }
    
    return ( 
        <div className={classes.input_style}>        
            <input type={type} placeholder={placeholder} value={value} onChange={changeHandler} min={min} max={max}  />
        </div>       
        
    );
};

export default Input;