import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TextBox } from '../../components/styledComponents/TextBox'
import { GlassyCard } from '../../components/styledComponents/GlassyCard'
import { PrimaryButton } from '../../components/styledComponents/Buttons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setData } from '../../store/quizSlice'

function Code({quizId}) {

    const[code,setCode]=useState("");

    const navigate=useNavigate();

    let dispatch=useDispatch();

    async function handleSubmit(){
        let response=await axios.post(`http://localhost:5000/student/verifyQuizCode/${quizId}`,{
            code:code
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(response.data);
        dispatch(setData(response.data))
        navigate("/quizPage");
        
    }


  return (
    <GlassyCard>
        <Typography variant="h5">Enter QuizCode</Typography>
        <TextBox
            onChange={(e)=>setCode(e.target.value)}
        />
        <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
    </GlassyCard>
  )
}

export default Code