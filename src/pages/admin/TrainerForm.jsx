import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTrainer } from '../../store/TrainerSlice';

function TrainerForm({editItem}) {
  // console.log(editItem);
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const dispatch=useDispatch();

  async function handleSubmit(e){
    e.preventDefault();
    // validation
      if(editItem){
        await axios.put(
          `http://localhost:5000/trainer/update/${editItem._id}`,
          { name, email },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        alert("done");

      }
      else{
        await axios.post("http://localhost:5000/trainer/add",
          { name, email, password },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(addTrainer({ name, email, password }));
        alert("done");
      }
        
  }

  useEffect(()=>{
    console.log(editItem,"abcd");
    if(editItem){
      setName(editItem.name);
      setEmail(editItem.email);
      setPassword(editItem.password);
    }
  },[editItem])

  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="email"  placeholder='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password"  placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default TrainerForm