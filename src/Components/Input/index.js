import React from "react";
import "./style.css"

const Input = ({ value, onChange, onSubmitClick }) => {

  return (<form onSubmit={onSubmitClick} className="form">
    <input value={value} onChange={onChange} type="number" className="input" max="100"/>
  </form>);
};

export default Input;
