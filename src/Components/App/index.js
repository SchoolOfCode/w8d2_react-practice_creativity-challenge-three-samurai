import "./index.css";
import Counter from "../Counter";
import Question from "../Question";
import Input from "../Input";
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState("20 - 20");
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(0);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function onSubmitClick(e){
    e.preventDefault();
    setAnswer(input);

  }
  useEffect(()=>{
    console.log(eval(question));
    if(eval(question) === parseInt(answer)){
      setInput("");
     return console.log("Correct!")
    }
    console.log("Incorrect!")
    setInput("");
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
      default: operatorSymbol = "/";
    }
    setQuestion(numOne + operatorSymbol + numTwo);
  };



  return (
    <>
      <Counter count={count} />
      <Question question={question} />
      <Input value={input} onChange={handleChange} setInput={setInput} onSubmitClick={onSubmitClick} />
      <button onClick={randomQuestion}>Test Start</button>
    </>
  );
}

export default App;
