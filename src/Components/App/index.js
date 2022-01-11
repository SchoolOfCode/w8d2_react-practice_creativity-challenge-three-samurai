import "./index.css";
import Counter from "../Counter";
import Question from "../Question";
import Input from "../Input";
import React, { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState(randomNumber());
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(0);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function onSubmitClick(e) {
    e.preventDefault();
    setAnswer(input);
  }

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false;
      return;
    }
    if (question === parseInt(answer)) {
      setInput("");
      setCount(count + 1);
      setQuestion(randomNumber());
    } else {
      setInput("");
    }
  }, [answer, count, question]);

  function randomNumber() {
    return Math.floor(Math.random() * 10 + 1);
  }

  return (
    <>
      <Counter count={count} />
      <Question question={question} />
      <Input
        value={input}
        onChange={handleChange}
        setInput={setInput}
        onSubmitClick={onSubmitClick}
      />
    </>
  );
}

export default App;
