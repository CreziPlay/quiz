import React, { useState } from "react";
import './styles/css.css';
import QuizComp from "./components/QuizComp";
import EndQuiz from "./components/EndQuiz";

function App() {
  const[cornum,setCornum] =useState(0);
  const[corstp,setCorstp] =useState(0);

  const corrtNm = (correct,step) => {
    setCornum(correct);
    setCorstp(step);
  }





  return (
    <div className="App">


    {
      corstp!==7?<QuizComp corrt={corrtNm}/>:<EndQuiz cornum={cornum} corst={corstp} corrt={corrtNm}/>
      
    }
    <p>{cornum},{corstp}</p>
    

      
    </div>
  );
}

export default App;

