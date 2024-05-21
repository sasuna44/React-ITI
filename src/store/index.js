import{configureStore} from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { productReducer} from './productSlice';

export const myStore = configureStore({
    reducer:{
        x :counterReducer,
        ProductSlice:productReducer
    }
})