import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./TrainerSlice";
import QuizSlice from "./quizSlice";


let store=configureStore({
    reducer:{
        trainer:trainerSlice.reducer,
        quiz:QuizSlice.reducer
    }

});

export default store;