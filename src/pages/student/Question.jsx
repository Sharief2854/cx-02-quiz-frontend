import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from '../../store/quizSlice';
import axios from 'axios';

function Question({question,questionNo}) {
        const[selected,setSelected]=useState(-1);
        const[prevSelectedAns,setPrevSelectedAns]=useState("");
        const questions = useSelector((state) => state.quiz.answers);

        const dispatch=useDispatch();

        function getPreviousSelectedAns(){
            let ans=questions.find((item,ind)=>{
                if(item.question==question._id){
                    return true;
                }
            
            })
            setPrevSelectedAns(ans?.answer);
        }

        // console.log(question);
        let result=question.options.map((item,ind)=>{
            return(
                <Box
                    onClick={
                        async ()=>{
                            setSelected(ind);
                            await axios.post(`http://localhost:5000/student/storeQuestionAttempt/${localStorage.getItem("attemptId")}`, {
                                questionId: question._id,
                                answer: item
                            }, {
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                }
                            });
                            
                            dispatch(addAnswer({
                                question:question._id,
                                answer:item
                            }))

                        }}
                    key={ind}
                    sx={{
                        border: "1px solid black",
                        p: 2,
                        borderRadius: 2,
                        backgroundColor:selected==ind || prevSelectedAns==item ?"blue":"white",
                        "&:hover": {
                            border: "2px solid black",
                            cursor: "pointer",
                            // backgroundColor: "gray"
                        }
                    }}
                >
                    {item}
                </Box>
            )
        })

        useEffect(()=>{
            setSelected(-1);
            getPreviousSelectedAns();
        },[questionNo])
                    

  return (
    <Box>
        <Typography
            variant='h5'
        >
            {questionNo+1}.{question.question}
        </Typography>

        <Stack
            spacing={2}
        >
           {result} 
        </Stack>
    </Box>
  )
}

export default Question