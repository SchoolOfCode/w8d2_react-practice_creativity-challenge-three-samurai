import React from "react";

const Input = ({ value, onChange }) => {
  function onSubmitClick(e){
    e.preventDefault();
  }
  return (<form onSubmit={onSubmitClick}><input value={value} onChange={onChange} type="text" />
  <button>Enter</button></form>);
};

export default Input;
