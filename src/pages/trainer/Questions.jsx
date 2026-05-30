import { Box, Divider, Stack, Typography } from '@mui/material'
import React, { use, useEffect, useState } from 'react'
import { GlassyCard } from '../../components/styledComponents/GlassyCard'
import { TextBox } from '../../components/styledComponents/TextBox'
import { PrimaryButton } from '../../components/styledComponents/Buttons'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Questions() {

    const[question,setQuestion]=useState("");
    const[option1,setOption1]=useState("");
    const[option2,setOption2]=useState("");
    const[option3,setOption3]=useState("");
    const[option4,setOption4]=useState("");
    const[answer,setanswer]=useState("");

    const[quiz,setQuiz]=useState({});
    const[allQuestions,setAllQuestions]=useState([]);

    const[isPublished,setPublished]=useState(false);



    const{id}=useParams();

    async function handleSubmit(){
        // validations
        let obj={
            question,
            options:[option1,option2,option3,option4],
            answer,
            quiz:id
        }
        console.log(obj);
        await axios.post("http://localhost:5000/question/add",obj,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        alert("done");
        getAllQuestions();
    }

    async function getQuiz(){
        let response=await axios.get(`http://localhost:5000/quiz/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(response.data);
        setQuiz(response.data);
        setPublished(response.data.isPublished);
    }

    async function getAllQuestions(){
        let response=await axios.get(`http://localhost:5000/question/all/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(response.data);
        setAllQuestions(response.data);
    }

    let result = allQuestions.map((item,ind) => {
        return (
            <Box key={item._id}>
                <Typography variant="h5" color="initial">
                    Question {ind+1}: {item.question}
                </Typography>
                <ol type="a">
                    <li>{item.options[0]}</li>
                    <li>{item.options[1]}</li>
                    <li>{item.options[2]}</li>
                    <li>{item.options[3]}</li>
                </ol>
                <Typography variant="body" color="initial">
                    Correct Answer: {item.answer}
                </Typography>
                <Divider/>
            </Box>
            
        )
    })

    async function handlePublish(){
       try{
           await axios.put(`http://localhost:5000/quiz/publish/${id}`, {
               isPublished: !isPublished
           }, {
               headers: {
                   Authorization: `Bearer ${localStorage.getItem("token")}`
               }
           })

           isPublished ? alert("unpublished") : alert("published");
           setPublished(!isPublished);
           // getQuiz();
       }
       catch(err){
           console.log(err.response.data);
           alert(err.response.data);
       }
    }


    useEffect(()=>{
        getQuiz();
        getAllQuestions();
    },[])

    
  return (
    <Box>
        <Stack
            direction="row"
            spacing={2}
        >
              <Typography variant="h5" color="initial">
                  {quiz.name} ({quiz.duration} min)
              </Typography>
              <PrimaryButton
                onClick={handlePublish}
              >
                {isPublished?"Unpublish":"Publish"}
              </PrimaryButton>
        </Stack>

        <Typography variant="body" color="initial">
            {quiz.desc}
        </Typography>
        {/*add question form */}

        <GlassyCard
            sx={{
                display:"flex",
                flexDirection:"column",
                gap:"10px"
            }}
        >
            <TextBox
                placeholder='Question'
                onChange={(e)=>setQuestion(e.target.value)}
            />
            <TextBox
                placeholder='Option 1'
                onChange={(e)=>setOption1(e.target.value)}
            />
            <TextBox
                placeholder='Option 2'
                onChange={(e)=>setOption2(e.target.value)}
            />
            <TextBox
                placeholder='Option 3'
                onChange={(e)=>setOption3(e.target.value)}
            />
            <TextBox
                placeholder='Option 4'
                onChange={(e)=>setOption4(e.target.value)}
            />
            <TextBox
                placeholder='Correct Answer'
                onChange={(e)=>setanswer(e.target.value)}
            />

            <PrimaryButton
                onClick={handleSubmit}
            >
                    Add Question
            </PrimaryButton>
        </GlassyCard>

        {/* display all questions */}
          <Typography variant="h5" color="initial">
              All Questions
          </Typography>
          <Divider/>

          <Box>
                
                {result}
          </Box>

    </Box>
  )
}

export default Questions