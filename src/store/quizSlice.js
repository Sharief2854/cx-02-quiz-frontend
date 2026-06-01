import { createSlice } from "@reduxjs/toolkit";

let QuizSlice = createSlice({
    name: "quiz",
    initialState: {
        quiz: []
    },
    reducers: {
        setData: function (state, action) {
            state.quiz = action.payload;
        }
    }
});

const { setData } = QuizSlice.actions;

export { setData };
export default QuizSlice;