// QuestionBox.jsx
import React from 'react';

const QuestionBox = ({ question, options, currentQuestion, totalQuestions, onOptionSelect, highlight }) => {
  return (
    <div className={`question-box ${highlight ? 'highlight' : ''}`}>
      <p>{`Question: ${currentQuestion} out of ${totalQuestions}`}</p>
      <p className="question-text">{question}</p>
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
    </div>
  );
};

export default QuestionBox;
