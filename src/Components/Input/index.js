import React from "react";

const Input = ({ value, onChange, onSubmitClick }) => {

  return (<form onSubmit={onSubmitClick}>
    <input value={value} onChange={onChange} type="text" />
  <button>Enter</button>
  </form>);
};

export default Input;
