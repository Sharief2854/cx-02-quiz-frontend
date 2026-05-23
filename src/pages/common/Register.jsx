import React, { useState } from 'react'
import { TextBox } from '../../components/styledComponents/TextBox'
import { Stack, Typography } from '@mui/material'
import { SecondaryButton } from '../../components/styledComponents/Buttons'
import { GlassyCard } from '../../components/styledComponents/GlassyCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {
  // name,email,password,confirm password state varibale
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[loading,setLoading] = useState(false);
  
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if(name.trim()=="" || email.trim()=="" || password.trim()=="" || confirmPassword.trim()==""){
      alert("Please fill all the fields");
      setLoading(false);
      return;
    }
    if(password !== confirmPassword){
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
    let obj={
      name,email,password,confirmPassword
    }
    try{
      const response = await axios.post("http://localhost:5000/auth/register",obj)
      // console.log(response);
      alert("User registered successfully");
      navigate("/login")
    } catch (error) {
      console.error("Error occurred while registering user:", error);
    }
    finally{
      setLoading(false);
    }
    
  }
  return (
    <GlassyCard>
      <Typography variant="h6" color="secondary" sx={{
        mb: 2,

      }}>
        Register To attempt quiz
      </Typography>
      <Stack
        component="form"
        spacing={2}
        onSubmit={handleSubmit}
      >
            <TextBox 
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='Enter Name'
          />
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
          <TextBox 
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type='password' 
            placeholder='Enter Confirm Password'
          />
         
          <SecondaryButton
            type='submit'
          >
            Register
          </SecondaryButton>
      </Stack>
    </GlassyCard>
  )
}

export default Register