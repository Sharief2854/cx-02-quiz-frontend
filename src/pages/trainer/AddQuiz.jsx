import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { PrimaryButton } from '../../components/styledComponents/Buttons'
import { TextBox } from '../../components/styledComponents/TextBox'
import { GlassyCard } from '../../components/styledComponents/GlassyCard'
import axios from 'axios'

function AddQuiz() {
    const[name,setName]=useState("");
    const[desc,setDesc]=useState("");
    const[code,setCode]=useState("");



    async function handleSubmit(){
        // validations
        let obj={
            name,desc,code
        }

        await axios.post("http://localhost:5000/quiz/add",obj,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        alert("done");
    }

  return (
    <GlassyCard
    
        sx={{
            display:"flex",
            flexDirection:"column",
            gap:"10px"
        }}
    >
        <TextBox
            placeholder='Quiz name'
            onChange={(e)=>setName(e.target.value)}
        />
        <TextBox
            placeholder='Desc'
              onChange={(e) => setDesc(e.target.value)}

        />
        <TextBox
            placeholder='Code'
              onChange={(e) => setCode(e.target.value)}

        />
        
        <PrimaryButton
            onClick={handleSubmit}
        >
            Create
        </PrimaryButton>
    </GlassyCard>
  )
}

export default AddQuiz