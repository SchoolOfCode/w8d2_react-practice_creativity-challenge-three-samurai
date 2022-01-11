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
    if(firstRender.current === true){
      firstRender.current = false
      return
    }
    
    console.log(eval(question));
    if(eval(question) === parseInt(answer)){
      setInput("");
    console.log("Correct!")
      setCount(count+1)
    setQuestion (randomQuestion());
    }else{
    console.log("Incorrect!")
    setInput("");
    }
  }, [answer])

  function randomQuestion(){
    const numOne = Math.floor(Math.random() * 10 + 1);
    const numTwo = Math.floor(Math.random() * 10 + 1);
    const operatorNumber = Math.floor(Math.random() * 3 + 1);
    let operatorSymbol = "";
    switch(operatorNumber){
      case 1 : operatorSymbol = "*";
      break;
      case 2 : operatorSymbol = "+";
      break;
      case 3 : operatorSymbol = "-"
      break;
      default: operatorSymbol = "+";
    }
    return (numOne + operatorSymbol + numTwo);
  };



  return (
    <>
      <Counter count={count} />
      <Question question={question} />
      <Input value={input} onChange={handleChange} setInput={setInput} onSubmitClick={onSubmitClick} />
    </>
  );
}

export default App;
