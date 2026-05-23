import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setData, deleteTrainer } from '../../store/TrainerSlice';
import TrainerForm from './TrainerForm';

function AdminTrainers() {
    let trainers=useSelector((state)=>state.trainer.trainers);
    const[editItem,setedititem]=useState({});
    

    const dispatch=useDispatch();
    async function getData(){
        let response=await axios.get(
            "http://localhost:5000/trainer",
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            }
            
        );
        dispatch(setData(response.data.trainers));
        
    }

    async function deleteTrainer(id){
        let result=confirm("want to delete?");
        if(result===false){
            return;
        }
        let response=await axios.delete(
            `http://localhost:5000/trainer/delete/${id}`,
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            }
        )
        dispatch(deleteTrainer(id));
        // getData();
    }

    function editTrainer(item){
        setedititem(item);
    }

    let result=trainers.map((item)=>{
        return(
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.isVerified?"Verified":"Not Verified"}</td>
                <td>
                    <button onClick={()=>editTrainer(item)}>Edit</button>
                    <button onClick={()=>deleteTrainer(item._id)}>Delete</button>
                </td>
            </tr>
        )
    })
    useEffect(()=>{
        getData();
    },[]);  
  return (
    <div>
        <TrainerForm editItem={editItem}/>
        <h1>Trainers</h1>
        <table border="1px">
            <thead>
                <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Verified</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>
    </div>
  )
}

export default AdminTrainers