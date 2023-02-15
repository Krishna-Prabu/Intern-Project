import React from 'react';
import classes from './Pagination.module.css';
const Pagination = ({onChange}) => {
    const oneHandler = () =>{
        onChange(25 - 1);
    }
    const twoHandler = () =>{
        onChange(50 - 1);
    }
    const threeHandler = () =>{
        onChange(100 - 1);
    }
    
    return(
        <div className={classes.pagination_box}>
            <p>Pagination</p>
            <ul className={classes.pagination_box_list}>
                <button className={classes.first} onClick={oneHandler}>First</button>
                <li onClick={oneHandler}>1</li>
                <li onClick={twoHandler}>2</li>
                <li onClick={threeHandler}>3</li> 
                <button className={classes.last} onClick={threeHandler}>Last</button>                     
            </ul>    
                
            
            
        </div>
    );
};

export default Pagination;