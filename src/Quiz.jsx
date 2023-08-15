import React from "react";

export default function Quiz(props) {
  return (
    <div id={props.key} className="question-container">
      <h4>{props.question}</h4>
      <div className="question">
        <button
          onClick={props.handleSelection}
          className={props.selected ? "selected" : ""}
        >
          {props.first}
        </button>
        <button
          onClick={props.handleSelection}
          className={props.selected ? "selected" : ""}
        >
          {props.second}
        </button>
        <button
          onClick={props.handleSelection}
          className={props.selected ? "selected" : ""}
        >
          {props.third}
        </button>
        <button
          onClick={props.handleSelection}
          className={props.selected ? "selected" : ""}
        >
          {props.fourth}
        </button>
      </div>
    </div>
  );
}
