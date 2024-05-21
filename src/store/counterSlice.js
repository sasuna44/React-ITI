import {createSlice} from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: 'count',
    initialState: {
        count: 0
    },
    reducers: {
        // actions
        increase: (state , action) => {
            state.count += 1;
        },
        decrease: (state , action) => {
            state.count -= 1;
        }
    }
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
