import React from "react";
import "./board.css";

export const Board = (props) => {
  const {
    col,
    row,
    isFinish,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    isStart,
  } = props;

  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";
  return (
    <>
    
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></div>
    </>
  );
};
