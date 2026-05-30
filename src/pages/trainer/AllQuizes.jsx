import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AllQuizes() {

    const[trainers,setTrainers]=useState([]);

    const navigate=useNavigate();

    async function getData(){
        let res=await axios.get("http://localhost:5000/quiz/all",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log(res.data);
        setTrainers(res.data);
    }

    let result=trainers.map((item)=>{
        return(
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.code}</td>
                <td>{item.duration} min</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button
                        onClick={() => navigate(`/trainer/questions/${item._id}`)}
                    >
                        Open
                    </button>

                </td>
            </tr>
        )
    })

    useEffect(()=>{
        getData();
    },[]);
  return (
    <div>
        <h1>All Quizes</h1>
        <table border="1px">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Code</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>
    </div>
  )
}

export default AllQuizes