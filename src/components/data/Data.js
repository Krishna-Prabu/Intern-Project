import React from 'react';

const DAY = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS_LIST = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Data = ({ name, date, like, replay, text}) => {
        const getDate = new Date(date).getDate(); 
        const getMonth = new Date(date).getMonth();
        const getYear = new Date(date).getFullYear();
        const getDay = new Date(date).getDay();
    return(
        <tr>
                <td>{name}</td>
                <td>{`${getDate}-${MONTHS_LIST[getMonth]}-${getYear} ${DAY[getDay]}`}</td>
                <td>{text}</td>
                <td>{like}</td>
                <td>{replay}</td>              
        </tr>        
    );
};

export default Data;
