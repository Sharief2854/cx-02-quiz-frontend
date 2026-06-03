import { createSlice } from "@reduxjs/toolkit";

let QuizSlice = createSlice({
    name: "quiz",
    initialState: {
        quiz: [],
        answers:[]
    },
    reducers: {
        setData: function (state, action) {
            state.quiz = action.payload;
        },
        addAnswer:function(state,action){
            state.answers.push(action.payload);
        },
        setAnswers:function(state,action){
            state.answers=action.payload;
            console.log(state.answers,"lkjgfd");
        }
    }
});

const { setData, addAnswer, setAnswers } = QuizSlice.actions;

export { setData, addAnswer, setAnswers };
export default QuizSlice;