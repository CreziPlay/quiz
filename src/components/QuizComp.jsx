import React , { useState } from "react";
import progressbar from '../img/progressbar.svg';



const QuizComp = function ({corrt}){

    const[step,setStep] =useState(0);

    const[correctn,setCorrectn] =useState(0);

    const[corcor,setCorcor] =useState(0);

    const[otvets,setOtvets] =useState([]);

    const questions = [
        {
          titele: 'React - это ?',
          variants: ['Библиотека','Фреймворк','хз'],
          correct: 0,
        },
        {
          titele: 'Vue - это ?',
          variants: ['Библиотека','Фреймворк','хз'],
          correct: 1,
        },
        {
          titele: 'На каком языке пишется Laravel?',
          variants: ['JS','PHP','PYTHON'],
          correct: 2,
        },
        {
          titele: 'Vue - это ?',
          variants: ['Библиотека','Фреймворк','хз'],
          correct: 1,
        },
        {
          titele: 'На каком языке пишется Laravel?',
          variants: ['JS','PHP','PYTHON'],
          correct: 2,
        },
        {
          titele: 'Vue - это ?',
          variants: ['Библиотека','Фреймворк','хз'],
          correct: 1,
        },
        {
          titele: 'На каком языке пишется Laravel?',
          variants: ['JS','PHP','PYTHON'],
          correct: 2,
        }
        ,
        {
          titele: '',
          variants: [''],
          correct: 0,
        }
      ]; 


      let question

      step!==questions.length ?  question = questions[step]:questions[0]
       
      
  
    
    console.log(otvets)

    const otvet=(index)=>{
     
         setStep(step+ 1) 
         if(questions[step].correct == index){
          setCorrectn(correctn + 1)
          setCorcor ((corcor - corcor) + 1);
          otvets.push(1)
  

        }else{
          setCorcor (corcor - corcor);
      
          otvets.push(0)
        }
}
          
         

          const back=()=>{
            console.log(otvets[step])

            if(otvets[step - 1] == 1){
              setCorrectn(correctn - 1)
            }
            console.log(correctn)

            setStep(step - 1);
    
          
          } 
   

    let present = Math.round((step+1)/(questions.length+1) * 100)
    console.log(present)
      corrt(correctn,step)
    return(
        <div className="main_div">
          <div  style={{width: `${present}%`}} className="div-over">
            <img className="progessbar" src={progressbar} alt="" srcset="" />
          </div>
        <h1 className="quiz-h1">{question.titele}</h1>
        <p className="m-5">Выберите ответ:</p>
        <ul>
          {
            question.variants.map((text,index)=>(
              <li className="variant" onClick={()=> otvet(index)} key={text}>{text}</li>
            ))
          }
            
        </ul>
        <div className="footer-qiuz">

          <button className="btn-rest" onClick={back}>Back</button>
          <div>
            {step+1}/{questions.length- 1}
          </div>
          
        </div>


      </div>


    )

}
export default QuizComp;
