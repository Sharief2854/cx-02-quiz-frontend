import React, { useEffect, useState } from 'react'
import Question from './Question'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Grid, Stack } from '@mui/material';
import { PrimaryButton } from '../../components/styledComponents/Buttons';
import Timer from './Timer';
import axios from 'axios';
import { setAnswers, setData } from '../../store/quizSlice';

function QuizPage() {
    const [questionNo, setquestionNo]=useState(0);
    const [disableBtn, setdisableBtn]=useState(false);

    let quiz=useSelector((state)=>state.quiz.quiz);
    console.log(quiz);
    const dispatch=useDispatch();
   
    // get data
    async function refresh(){
        let attemptId=localStorage.getItem("attemptId");
        if(!attemptId){
            return;
        }

        let response1=await axios.get(`http://localhost:5000/student/getAttemptDetails/${attemptId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        let response2 = await axios.post(`http://localhost:5000/student/verifyQuizCode/${localStorage.getItem("quizId") }`, {
            
        },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(response1.data,"a");
            console.log(response2.data,"b");
            dispatch(setAnswers(response1.data));
            dispatch(setData(response2.data))
        
        
    }


    function next(){
        if (questionNo >= quiz.questions.length - 1){
            setdisableBtn(true);
            return;
        }
        setquestionNo(questionNo+1);
    }

    function prev(){
        if (questionNo<=0) {
            setdisableBtn(true);
            return;
        }

        setquestionNo(questionNo-1);
    }


    useEffect(()=>{
        refresh();
    },[])

   
    if(!quiz.questions){
        return(
            <h1>No Questions</h1>
        )
    }

  return (
    <div>
        <h1>Quiz Page</h1>
        <Timer/>
        <Grid
            container
            spacing={2}
        >
              <Grid
                size={9}
              >
                  <Question question={quiz.questions[questionNo]} questionNo={questionNo}   />
                  <Stack
                      direction="row"
                      sx={{
                          justifyContent: "space-between",
                          mt: 3
                      }}
                  >
                      <PrimaryButton
                          onClick={prev}

                      >
                          Prev
                      </PrimaryButton>

                      <PrimaryButton
                          onClick={next}

                      >
                          save and Next
                      </PrimaryButton>
                  </Stack>
              </Grid>
              <Grid
                size={3}
              >
                  <Grid
                      container
                      spacing={2}

                  >
                      {
                          quiz.questions.map((item, ind) => {
                              return (
                                  <Grid
                                      size={3}

                                  >
                                      <Box
                                        onClick={()=>{
                                            setquestionNo(ind);
                                        }}
                                          sx={{
                                              border: `1px solid black`,
                                              display: "inline-block",
                                              p: 2,
                                              borderRadius: "50%",
                                              "&:hover": {
                                                  border: "2px solid black",
                                                  cursor: "pointer"
                                              }
                                          }}

                                      >

                                          {ind + 1}
                                      </Box>
                                  </Grid>
                              )
                          })
                      }
                  </Grid>
              </Grid>
        </Grid>
        
    </div>
  )
}

export default QuizPage