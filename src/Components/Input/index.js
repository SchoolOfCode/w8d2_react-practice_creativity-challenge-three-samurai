import React from "react";
import "./index.css"

const Input = ({ value, onChange, onSubmitClick }) => {

  return (<form onSubmit={onSubmitClick}>
    <input value={value} onChange={onChange} type="text" className="input"/>
  </form>);
};

export default Input;
