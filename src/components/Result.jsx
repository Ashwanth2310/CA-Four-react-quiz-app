// Result.jsx
import React from 'react';

const Result = ({ answers, totalQuestions }) => {
  const correctAnswers = answers.filter((answer) => answer).length;
  const percentage = (correctAnswers / totalQuestions) * 100;

  let resultMessage;
  if (percentage < 50) {
    resultMessage = 'You need more practice, you can do it!';
  } else if (percentage < 80) {
    resultMessage = 'Good effort!';
  } else {
    resultMessage = '🎊 Excellent! You nailed it! 🎊';
  }

  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p>{`Correct Answers: ${correctAnswers} out of ${totalQuestions}`}</p>
      <p>{resultMessage}</p>
    </div>
  );
};

export default Result;
