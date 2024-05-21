import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllClothes , createClothes  ,updateClothes ,deleteClothes} from '../api/clothesApi';

const initialState = { 
    products: [],
    error: null,
    isLoading: false
};

export const getAllProductsActions = createAsyncThunk(
    'product/getAllProductsAction',
    async (arg, thunkAPI) => {
        // to send error in the bulder of rejected 
        const {rejectWithValue} = thunkAPI;
        try {
            const response = await getAllClothes();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const addNewProductAction=createAsyncThunk("product/addNewProduct" , 
async(product,thunkAPI)=>{
    const{rejectWithValue} = thunkAPI;
    try{
        const response = await createClothes(product);
        return response.data;
    }catch(error){
    
        return rejectWithValue(error.message);
    }

});
export const updateProductAction =createAsyncThunk("product/updateProdcutAction" , 
async(product,thunkAPI)=>{
    const{rejectWithValue} = thunkAPI;
    try{
        const response = await updateClothes(product);
        return response.data;
    }catch(error){

        return rejectWithValue(error.message);
    }

});
export const deleteProductAction = createAsyncThunk("product/deleteProductAction", async (product_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await deleteClothes(product_id);
      return product_id;
    } catch (error) {
      return rejectWithValue(error);
    }
  });

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductsActions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProductsActions.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllProductsActions.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
});

export const productReducer = productSlice.reducer;
export const prodcutAction = productSlice.actions;
