import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProdect = createAsyncThunk('prodects/getProdect', async ( ) => {
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response)
    return response.data
});


const ProddectSlicre = createSlice({
    name:'prodect',
    initialState: { 
        data: [],
        status:null,
    },
    extraReducers: {
        //getProdect
        [getProdect.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = "success";
        },
        [getProdect.pending]: (state, action) => {
            console.log(action)
            state.status = "Loading"; 
        },
        [getProdect.rejected]: (state, action) => {
           console.log(action)
            state.status = "faild";
        },
    },
});


export default ProddectSlicre.reducer;