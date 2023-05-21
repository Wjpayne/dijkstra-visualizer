import React, { useState, useEffect } from "react";
import { Board } from "../Board/Board";
import NodeContainer from "../Board/NodeContainer";
import { NavBar } from "../NavBar/NavBar";
import {
  getInitialGrid,
  getNewGridWithWallToggled,
  START_NODE_COL,
  START_NODE_ROW,
  FINISH_NODE_COL,
  FINISH_NODE_ROW,
} from "./utils/utils";
import { dijkstra, getNodesInShortestPathOrder } from "../Algorithm/Dijkstra";

export const Pathfinder = () => {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  

  //set initial grid

  useEffect(() => {
    const getGrid = getInitialGrid();
    setGrid(getGrid);
  }, []);

  //handler functions for mouse

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

  //animation

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  }

const  animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  }

  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  //reset grid

  return (
    <>
      <div>
        <NavBar visualizeDijkstra={visualizeDijkstra} ></NavBar>
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
