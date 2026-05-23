import React, { useState } from 'react'
import { TextBox } from '../../components/styledComponents/TextBox'
import { Stack, Typography } from '@mui/material'
import { SecondaryButton } from '../../components/styledComponents/Buttons'
import { GlassyCard } from '../../components/styledComponents/GlassyCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim() == "" || password.trim() == "") {
      alert("Please fill all the fields");
      return;
    }
    let obj = {
      email, password
    }
    try {
      axios.post("http://localhost:5000/auth/login", obj).then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        if(res.data.role=="student"){
          navigate("/student");
        } 
        else if(res.data.role=="trainer") {
          navigate("/trainer");
        }
        else{
          navigate("/admin");
        }
      });
    } catch (error) {
      console.error("Error occurred while registering user:", error);
    }
    console.log(obj);

  }
  return (
    <GlassyCard>
      <Typography variant="h6" color="secondary" sx={{
        mb: 2,

      }}>
        Login To attempt quiz
      </Typography>
      <Stack
        component="form"
        spacing={2}
        onSubmit={handleSubmit}
      >
      
        <TextBox
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='Enter Email'
        />
        <TextBox
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Enter Password'
          type='password'
        />
        
        <SecondaryButton
          type='submit'
        >
          Login
        </SecondaryButton>
      </Stack>
    </GlassyCard>
  )
}

export default Login