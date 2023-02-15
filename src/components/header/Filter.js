import React, { useState } from 'react';
import classes from './Filter.module.css';
import Input from './Input';


const Filter = ({onChange}) => {   
    
    const [fromMonth, setFromMonth] = useState();
    const [fromDate, setFromDate] = useState();
    const [fromYear, setFromYear] = useState();
    // const [toMonth, setToMonth] = useState();
    // const [toDate, setToDate] = useState();
    // const [toYear, setToYear] = useState();
    // const [fromTime, setFromTime] = useState();
    // const [toTime, setToTime] = useState();
    // const [getDay, setGetDay] = useState();       
    
    // const minute = 1000 * 60;
    // const hour = minute * 60;
    // const day = hour * 24;
    // const year = day * 365;

    
    
    const fromDateHandler = (e) => {
            const d = e.target.value;
            // setFromTime(new Date(d).getTime());
            setFromDate(new Date(d).getDate());
            setFromMonth(new Date(d).getMonth());            
            setFromYear(new Date(d).getFullYear());
        };
    // const toDateHandler = (e) => {
    //     const d = e.target.value;
    //     setToTime(new Date(d).getTime());
    //     setToMonth(new Date(d).getMonth());        
    //     setToYear(new Date(d).getFullYear());
    // }; 
    const searchHandler = () => {
          
        onChange(fromDate, fromMonth, fromYear);      
    };
    
        return(
        <div className={classes.date_box}>             
            <label>From</label>           
            <Input type='date' onChange={fromDateHandler} />
        
            {/* <label>To</label>
            <Input type='date' onChange={toDateHandler} />
             <div className={classes.date_box_button}>  */}
            <button onClick={searchHandler}>Filter by Date</button>
                   
        </div>
    );
};

export default Filter;