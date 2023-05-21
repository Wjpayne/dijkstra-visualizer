import React, { useState, useEffect } from "react";
import { Board } from "../Board/Board";
import NodeContainer from "../Board/NodeContainer";
import {NavBar} from "../NavBar/NavBar"
const START_NODE_ROW = 10;
const START_NODE_COL = 10;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 40;

export const Pathfinder = () => {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  //set initial grid

  useEffect(() => {
    const getGrid = getInitialGrid();
    setGrid(getGrid);
  }, []);

  //handler functions

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  console.log(grid);
  return (
    <>
      <div>
        <NavBar></NavBar>
        <NodeContainer>
        {grid.map((row, rowIndex) => {
          return (
            <>
            
              {row.map((node, nodeIndex) => {
                const { row, col, isFinish, isStart, isWall } = node;
                return (
                  <Board
                    key={nodeIndex}
                    col={col}
                    row={row}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                    onMouseUp={() => handleMouseUp()}
                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                  ></Board>
                );
              })}
              </>
            
          );
        })}
        </NodeContainer>
      </div>
    </>
  );
};

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
