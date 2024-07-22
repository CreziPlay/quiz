import React from "react";


const EndQuiz = function({cornum,corst,corrt}) {


  const rest = () => {
    corrt(0,0)

  }
    return(
        <div className="main_div">
            <h1 className="end-h1">Тест<br/>пройден!</h1>
            <div className="footer-qiuz">
                <p className="reslt-p">Ваш результат:</p>
                <div  className="reslt">{cornum}/{corst}</div>
            </div>
            <div > <button className="btn-rest" onClick={rest} >Рестарт</button></div>
           
        </div>
    );
       
}

export default EndQuiz;