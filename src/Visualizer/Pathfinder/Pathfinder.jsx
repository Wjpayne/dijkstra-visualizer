import React, { useState, useEffect } from "react";
import { Board } from "../Board/Board";
import NodeContainer from "../Board/NodeContainer";
import { NavBar } from "../NavBar/NavBar";
import { dijkstra, getNodesInShortestPathOrder } from "../Algorithm/Dijkstra";

export const Pathfinder = () => {
  //set state for grid, start and finish, current row and column, and mouse press
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [run, setRun] = useState(false);
  const [isWall, setIsWall] = useState(false);
  const [isStartNode, setisStartNode] = useState(false);
  const [isFinishNode, setisFinishNode] = useState(false);
  const [startNodeCol, setStartNodeCol] = useState(10);
  const [startNodeRow, setStartNodeRow] = useState(10);
  const [finishNodeCol, setFinishNodeCol] = useState(40);
  const [finishNodeRow, setFinishNodeRow] = useState(10);
  const [currRow, setCurrRow] = useState(0);
  const [currCol, setCurrCol] = useState(0);

  //set initial grid

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

  //create init nodes

  const createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === startNodeRow && col === startNodeCol,
      isFinish: row === finishNodeRow && col === finishNodeCol,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

  // is wall or not

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

  useEffect(() => {
    const getGrid = getInitialGrid();
    setGrid(getGrid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setGrid]);

  //handler functions for mouse

const handleMouseDown = (row, col) => {
  if (run) return;

  const node = grid[row][col];

  if (node.isStart) {
    setMouseIsPressed(true);
    setisStartNode(true);
    setCurrRow(row);
    setCurrCol(col);
  } else if (node.isFinish) {
    setMouseIsPressed(true);
    setisFinishNode(true);
    setCurrRow(row);
    setCurrCol(col);
  } else {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
    setIsWall(true);
    setCurrRow(row);
    setCurrCol(col);
  }
};

  const handleMouseUp = () => {
    setMouseIsPressed(false);
    if (isStartNode) {
      setisStartNode(!isStartNode);
    } else if (isFinishNode) {
      setisFinishNode(!isFinishNode);
    }
  };

const handleMouseEnter = (row, col) => {
  if (!mouseIsPressed) return;

  const node = grid[row][col];

  if (isStartNode && !node.isWall && !node.isFinish) {
    updateNodePosition("start", row, col);
  } else if (isFinishNode && !node.isWall && !node.isStart) {
    updateNodePosition("finish", row, col);
  } else if (isWall && !node.isWall) {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  }
};

const updateNodePosition = (type, row, col) => {
  const newGrid = grid.map(r => r.map(n => ({ ...n })));

  if (type === "start") {
    newGrid[startNodeRow][startNodeCol].isStart = false;
    newGrid[row][col].isStart = true;
    setStartNodeRow(row);
    setStartNodeCol(col);
  } else if (type === "finish") {
    newGrid[finishNodeRow][finishNodeCol].isFinish = false;
    newGrid[row][col].isFinish = true;
    setFinishNodeRow(row);
    setFinishNodeCol(col);
  }

  setGrid(newGrid);
};

  //animation

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    setRun(true);

    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        let nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`
        ).className;

        if (
          nodeClassName !== "node node-start" &&
          nodeClassName !== "node node-finish" &&
          nodeClassName !== "node node-wall"
        ) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-visited";
        }
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];

        let nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`
        ).className;

        if (
          nodeClassName !== "node node-start" &&
          nodeClassName !== "node node-finish"
        ) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-shortest-path";
        }
      }, 50 * i);
    }
  };

  const visualizeDijkstra = () => {
    const startNode = grid[startNodeRow][startNodeCol];
    const finishNode = grid[finishNodeRow][finishNodeCol];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  //reset animation and grid

  const resetGrid = () => {
    if (run) {
      const newGrid = grid.slice();

      for (const row of newGrid) {
        for (const node of row) {
          let nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`
          ).className;
          if (
            nodeClassName !== "node node-start" &&
            nodeClassName !== "node node-finish" &&
            nodeClassName !== "node node-wall"
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              "node";
          }
          if (nodeClassName === "node node-start") {
          }
        }
      }
    }

    const getGrid = getInitialGrid();
    setGrid(getGrid);
    setRun(false);
  };

  return (
    <>
      <div>
        <NavBar
          visualizeDijkstra={visualizeDijkstra}
          resetGrid={resetGrid}
        ></NavBar>
        <NodeContainer>
          {grid.map((row, rowIndex) => {
            return (
              <React.Fragment key={rowIndex}>
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
              </React.Fragment>
            );
          })}
        </NodeContainer>
      </div>
    </>
  );
};
