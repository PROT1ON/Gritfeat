import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./recordSlice";

const store = configureStore({
    reducer: {
        record: recordReducer
    }
});
