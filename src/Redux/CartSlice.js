import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';




const CartSlice = createSlice({
    name: "cartSlice",
    initialState:[],
    reducers:{
        addToCart: (state, action) => {
           state.push(action.payload)
           console.log(action)
        },
        removeProdect: function(state, action) {
            return state.filter(((prodec) => prodec.id != action.payload.id))
        },
        deleteAllProdect : function(state, action) {
            return []
        },
     
    }
});

export const {addToCart, removeProdect, deleteAllProdect } = CartSlice.actions;
export default CartSlice.reducer;