import  { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProddectSlicre from "./ProddectSlicre";
export default configureStore({
    reducer: {
        prodect: ProddectSlicre,
        cart :CartSlice
    },
})