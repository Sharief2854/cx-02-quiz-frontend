import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Code from './Code';

function StudentQuizzes() {

    const[quizzes,setQuizzes]=useState([]);
    const[displayCode,setDisplayCode]=useState(false);
    const [selectedQuiz, setselectedQuiz]=useState("");


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
                        <button onClick={()=>{
                            setDisplayCode(true)
                            setselectedQuiz(item._id)
                            localStorage.setItem("quizId",item._id)
                        
                        }
                        }>
                            Start
                        </button>
                </td>
            </tr>
        )
    })
                

    
    useEffect(()=>{
        getAllQuizzes();
    },[]);


    if(displayCode==true){
        return(
            <Code quizId={selectedQuiz}/>
        )
    }
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