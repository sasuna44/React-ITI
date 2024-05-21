import {configureStore} from '@reduxjs/toolkit';
import { counterReducer } from './counterReducer';

// to create store and contain all the reducer
// return object that has the store 
export const myStore = configureStore({
    
    reducer:{
        counterSlice: counterReducer,

    },

});