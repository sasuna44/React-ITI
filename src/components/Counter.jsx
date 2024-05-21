import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { counterActions } from '../store/counterSlice';
export function Counter() {
    // Get the count from the store's counterSlice
    // console.log(count);
 const dispatch = useDispatch();
  const {count}  =  useSelector(state => state.x)
  const {increase , decrease} = counterActions;
    const increaseHandler = () => {
        // dispatch an action to the store
        dispatch(increase());
    };
    const decreaseHandler = () => {
        dispatch(decrease());

    };

    return (
        <div className='p-5 text-center text-capitalize'>
            <h1 className='text-muted'>Counter Component</h1>
            <p>Count: {count}  </p>
            <button className='btn btn-success mx-3' onClick={increaseHandler}>+</button>
            <button className='btn btn-danger mx-3' onClick={decreaseHandler}>-</button>
        </div>
    );
}
