import React from "react";

export default function Question(props) {
  return (
    <>
      <p className="header">{props.header}</p>
      <button
        id={props.id}
        onClick={props.changeSelection}
        className={`${props.selected ? "selected" : ""} answer `}
      >
        {props.firstChoice}
      </button>
      <button
        id={props.id}
        onClick={props.changeSelection}
        changeScore={props.changeScore}
        className={`${props.selected ? "selected" : ""} answer`}
      >
        {props.secondChoice}
      </button>
      <button
        id={props.id}
        onClick={props.changeSelection}
        changeScore={props.changeScore}
        className={`${props.selected ? "selected" : ""} answer`}
      >
        {props.thirdChoice}
      </button>
      <button
        id={props.id}
        onClick={props.changeSelection}
        changeScore={props.changeScore}
        className={`${props.selected ? "selected" : ""} answer`}
      >
        {props.fourthChoice}
      </button>
    </>
  );
}
