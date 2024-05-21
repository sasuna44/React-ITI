export  function counterReducer (state ={count: 0}, action){
    if(action.type === 'INCREMENT'){
        // the old state of count  +        
        return {count: state.count + 1}
    }
    if(action.type === 'DECREMENT'){
        return {count: state.count - 1}
    }
    return state;
}