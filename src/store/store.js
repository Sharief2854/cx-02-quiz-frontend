import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./TrainerSlice";

let store=configureStore({
    reducer:{
        trainer:trainerSlice.reducer
    }

});

export default store;