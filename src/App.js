import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import Quiz from "./Quiz";
import "./App.css";
import axios from "axios";
import Question from "./Question";

function App() {
  const [data, setData] = React.useState([]);
  const [selected, setSelected] = React.useState();
  const [submit, setSubmit] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  useEffect(() => {
    const url = "https://the-trivia-api.com/v2/questions";
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [gameOver]);

  function changeSelection(e) {
    const id = e.target.id;
    const buttons = document.querySelectorAll(".answer");
    buttons.forEach((button) => {
      if (button.id === id) {
        button.classList.remove("selected");
        e.target.classList.add("selected");
      }
    });
    const selected = document.querySelectorAll(".selected");
    let selectedCount = 0;
    selected.forEach((item) => (selectedCount += 1));
    setCount((prevCount) => selectedCount);
  }

  const dataElements = data
    ? data.map((item) => (
        <div className="question">
          <Question
            header={item.question.text}
            id={item.id}
            firstChoice={item.correctAnswer}
            secondChoice={item.incorrectAnswers[0]}
            thirdChoice={item.incorrectAnswers[1]}
            fourthChoice={item.incorrectAnswers[2]}
            changeSelection={(e) => changeSelection(e)}
          />
        </div>
      ))
    : null;

  function checkScore() {
    if (count == 10) {
      let score = 0;
      const selected = document.querySelectorAll(".selected");
      selected.forEach(
        (item, id) =>
          item.textContent === data[id].correctAnswer && (score += 1)
      );
      setGameOver(true);
      setScore((prevScore) => score);
    }
  }

  function newGame() {
    setGameOver(false);
    setScore(0);
    setCount(0);
    setData([]);
  }

  return (
    <div className="App">
      <div className="quiz-container">{!gameOver && dataElements}</div>

      <div className="count-container">
        {data.length == 0 && "Loading"}
        {data.length > 0 && (
          <div className="count-header">
            {gameOver ? "Your score is" : "Answered Questions"}
          </div>
        )}
        <div className="count"> {gameOver ? score : count}/10</div>
        {!gameOver && (
          <button
            onClick={checkScore}
            className={count == 10 ? "enabled" : "disabled"}
          >
            {" "}
            {gameOver ? "Play Again!" : "Submit"}
          </button>
        )}
        {gameOver && (
          <button
            onClick={newGame}
            className={count == 10 ? "enabled" : "disabled"}
          >
            {" "}
            {gameOver ? "Play Again!" : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
