// QuestionBox.jsx
import React, { useRef } from 'react';


const QuestionBox = ({ question, options, currentQuestion, totalQuestions, onOptionSelect, highlight }) => {


  let ref=useRef();
  function h1(){
    ref.current.style.color="red";
  }

  function h2(){
    ref.current.style.color="blue";
  }
  return (
    <div className={`question-box ${highlight ? 'highlight' : ''}`}>
      <p>{`Question: ${currentQuestion} out of ${totalQuestions}`}</p>
      <p  ref={ref}className="question-text">{question}</p>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <button
              className="option-button"
              onClick={() => onOptionSelect(option)}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={h1}>Highlight</button>
      <button onClick={h2}>Remove Highlight</button>
    </div>
  );
};

export default QuestionBox;
