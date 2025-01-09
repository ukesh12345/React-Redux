import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slice/UserSlices'

const store = configureStore({
    devTools:true,
    reducer:{
        Users:userReducer
    }
})
export default store;
