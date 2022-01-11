import "./index.css";
import Counter from "../Counter";
import Question from "../Question";
import Input from "../Input";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState("20 + 20");
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <Counter count={count} />
      <Question question={question} />
      <Input value={input} onChange={handleChange} />
    </>
  );
}

export default App;
