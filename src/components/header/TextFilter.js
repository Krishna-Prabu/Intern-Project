import React from 'react';
import Input from './Input';
import classes from './TextFilter.module.css';

const TextFilter = ({onChange}) => {
    const stringHandler = (e) => {
        onChange(e);
    }
    return(
        <div className={classes.input_text}>
            <p>SEARCH</p>
        <Input type='text' placeholder='Search Name/Comments' onChange={stringHandler} />
        </div>
    );
};

export default TextFilter;