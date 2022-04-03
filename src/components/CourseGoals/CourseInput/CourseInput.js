import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';

const FromControl=styled.div`

  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color:${props=>(props.isValid?'red':'')};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props=>(props.isValid?'':'#ccc')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  background: ${props=>(props.isValid?'#ffd7d7':'transparent')} 
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}




`
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid,setValid]=useState(true);
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0)
    {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FromControl isValid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </FromControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
