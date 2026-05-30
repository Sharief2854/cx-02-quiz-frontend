import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StudentQuizzes() {

    const[quizzes,setQuizzes]=useState([]);


    async function getAllQuizzes(){
        let response=await axios.get("http://localhost:5000/student/allQuizzes", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(response.data);
        setQuizzes(response.data);
    }

    let result=quizzes.map((item,ind)=>{
        return(
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.duration}</td>
                <td>{item.trainer.name}</td>
                <td>
                        <button>Start</button>
                </td>
            </tr>
        )
    })
                

    
    useEffect(()=>{
        getAllQuizzes();
    },[]);
  return (
    <div>
        <h1>All Quizzes</h1>
        <table border="1px">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Duration</th>
                    <th>Trainer Name</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
            
        </table>
    </div>
  )
}

export default StudentQuizzes