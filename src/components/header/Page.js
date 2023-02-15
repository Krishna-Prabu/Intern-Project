import React from 'react';
import classes from './Page.module.css';

const Page = ({onChange, data}) => {

    const pageHandler = (e) => {    
           const value = parseInt(e.target.value);
            onChange(value - 1);
            
    };
    return(
        <div className={classes.page_box}>
            <p>PAGES</p>
            <select className={classes.page_box_select} onChange={pageHandler}>
                <option value='25'>25 Per page</option>
                <option value='50'>50 Per page</option>
                <option value='100' selected>100 Per page</option>            
            </select>
        </div>
    );
};

export default Page;