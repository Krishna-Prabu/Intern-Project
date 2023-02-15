import React, { useReducer } from 'react';



const defaultData = {
    items: []
};
const dataReducer = (state, action) => {

};

const DataProvider = () => {
    const [state, dispatch] = useReducer(dataReducer, defaultData);

    return(
            <div>
                {state}
                <button onClick={() => dispatch()}>Example</button>
            </div>
    );
};

export default DataProvider;