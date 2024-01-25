// App.js
import React, { useState } from 'react';
import QuestionBox from './components/QuestionBox.jsx';
import Score from './components/Result.jsx'; // Import the Score component
import questions from './questions.jsx';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [highlight, setHighlight] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const handleOptionSelect = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion - 1] = selectedOption.isCorrect;
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleHighlightClick = () => {
    setHighlight(!highlight);
  };

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const allQuestionsAnswered = answers.every((answer) => answer !== null);

  // Calculate percentage
  const correctAnswers = answers.filter((answer) => answer).length;
  const percentage = (correctAnswers / questions.length) * 100;

  // Set the container colour based on the percentage and darkMode
  let containerClassName = 'container';
  if (allQuestionsAnswered) {
    if (percentage < 50) {
      containerClassName += ' red-bg';
    } else if (percentage < 80) {
      containerClassName += ' yellow-bg';
    } else {
      containerClassName += ' green-bg';
    }
  }

  // Set the background color to dark or light mode
  const backgroundColor = darkMode ? '#52baba' : '#23ccccb7';

  return (
    <div className={containerClassName} style={{ backgroundColor }}>
      {allQuestionsAnswered ? (
        // Display the score after all questions are answered
        <Score answers={answers} totalQuestions={questions.length} />
      ) : (
        // Displays the current question
        <QuestionBox
          question={questions[currentQuestion - 1].text}
          options={questions[currentQuestion - 1].options}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          onOptionSelect={handleOptionSelect}
          highlight={highlight}
        />
      )}

      {!allQuestionsAnswered && (
        <button onClick={handleHighlightClick}>
          {highlight ? 'Remove Highlight' : 'Highlight'}
        </button>
      )}

      <button className="mode-toggle-button" onClick={handleModeToggle}>
        {darkMode ? ' Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default App;
