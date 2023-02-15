

export const DataStore = {
     monthList: ["Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    dayList: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    items: [],
    remove: (id) => {}, 
    get: (item) => {},
    count: 0 
};

export const postReducer = (state, action) => {
    if(action.type === 'ADD_DATA'){
        console.log('data');
        return{
            ...state,
            items: action.items,
            count: state.items.length

        }
        
    }
    else if(action.type === 'DATE_WISE'){
        console.log('date');
        return{
            ...state,
            items: state.items.filter(item => state.dayList[new Date(item.at).getDay()] === action.payload.day &&
            new Date(item.at).getDate() === action.payload.date &&
            state.monthList[new Date(item.at).getMonth()] === action.payload.month &&
            new Date(item.at).getFullYear() === action.payload.year),
            count: state.items.length
        }
    }
    else if(action.type === 'TEXT_WISE'){
        return{
            ...state,
            items: state.items.filter((item) => item.author.includes(action.payload)),
            count: state.items.length
        }
    }
    else if(action.type === 'PAGINATION_WISE'){
        return{
            ...state,


        }
    }
    
};

