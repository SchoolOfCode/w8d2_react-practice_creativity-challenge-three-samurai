import "./index.css";
import Counter from "../Counter";
import Question from "../Question";
import Input from "../Input";
import React, { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState(randomQuestion());
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(0);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function onSubmitClick(e){
    e.preventDefault();
    setAnswer(input);

  }

  const firstRender = useRef(true);


  useEffect(()=>{
    console.log(question)
    if(firstRender.current === true){
      firstRender.current = false;
      return;
    }
    if(question[1] === parseInt(answer)){
      setInput("");
    console.log("Correct!")
      setCount(count+1)
    setQuestion(randomQuestion());
    }else{
    console.log("Incorrect!")
    setInput("");
    }
  }, [answer, count, question])

  function randomQuestion(){
    const numOne = Math.floor(Math.random() * 10 + 1);
    const numTwo = Math.floor(Math.random() * 10 + 1);
    const operatorNumber = Math.floor(Math.random() * 3 + 1);
    let operatorSymbol = "";
    let questionAnswer = 0;
    switch(operatorNumber){
      case 1 : operatorSymbol = "*";
      questionAnswer = numOne*numTwo;
      break;
      case 2 : operatorSymbol = "+";
      questionAnswer = numOne+numTwo;
      break;
      default : operatorSymbol = "-"
      questionAnswer = numOne-numTwo;
      break;
    }
    return[numOne + operatorSymbol + numTwo, questionAnswer]
  };



  return (
    <div className="game">
      <Counter count={count} />
      <Question question={question[0]} className="question"/>
      <Input value={input} onChange={handleChange} setInput={setInput} onSubmitClick={onSubmitClick} />
    </div>
  );
}

export default App;
