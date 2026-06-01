import React, { useState } from 'react'
import Question from './Question'
import { useSelector } from 'react-redux'
import { Box, Button, Grid, Stack } from '@mui/material';
import { PrimaryButton } from '../../components/styledComponents/Buttons';

function QuizPage() {
    const [questionNo, setquestionNo]=useState(0);
    const [disableBtn, setdisableBtn]=useState(false);

    let quiz=useSelector((state)=>state.quiz.quiz);

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


  return (
    <div>
        <h1>Quiz Page</h1>
        <Grid
            container
            spacing={2}
        >
              <Grid
                size={9}
              >
                  <Question question={quiz.questions[questionNo]} questionNo={questionNo} />
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
                          next
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