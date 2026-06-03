import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

function Timer() {

    let quiz = useSelector((state) => state.quiz.quiz);
    const [timer, setTimer] = useState(quiz.duration*60);
    const[isTimerStarted,setTimerStarted] = useState(false);
    
    const timerRef=useRef(null);

    function startTimer() {
        if(isTimerStarted==true){
            return;
        }
        timerRef.current=setInterval(() => {
            setTimer((prev)=>{
                console.log
                return prev-1;
            })
        }, 1000)
        setTimerStarted(true);
    }

    useEffect(() => {
        startTimer();
        return()=>{
            setTimerStarted(false);
            clearInterval(timerRef.current);
        }
    }, [])
    

  return (
    <div>
          <h1>Time Left: {`${Math.floor(timer/60)}:${Math.floor(timer%60)}`}</h1>
    </div>
  )
}

export default Timer