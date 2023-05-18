import React, { useEffect, useRef, useState } from "react";
import "./Visualizer.css";
import BoardContainer from "./Board/BoardContainer";
import { Board, actionMouseUp, setStartNode } from "./Board/Board";
import store from "./Store/index";
const START_NODE_COL = 15;
const START_NODE_ROW = 10;
const STOP_NODE_COL = 35;
const STOP_NODE_ROW = 10;

export const Visualizer = (props) => {
  const nodes = store.getState().nodes;

  const nodeRef = []
  const refNode = useRef();

  for (let i = 0; i < 20; i++) {
    let refRow = [];
    for (let j = 0; j < 50; j++) {
      refRow.push(refNode);
    }
    nodeRef.push(refRow);
  }

  const getInitialGrid = () => {
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = createNode(row, col);
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    return nodes;
  };

  const createNode = (row, col) => {
    return {
      col: col,
      row: row,
      value: 1,
      preciousnode: null,
      isWall: false,
      distance: Infinity,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isStop: row === STOP_NODE_ROW && col === STOP_NODE_COL,
      isVisited: false,
    };
  };

  const setVistingAnimationFalse = () => {
    const action = {
      type: "set_visit_animate_false",
    };
    store.dispatch(action);
  };
  const setVistingAnimationTrue = () => {
    const action = {
      type: "set_visit_animate_true",
    };
    store.dispatch(action);
  };
  const resetPreviousNode = () => {
    const action = {
      type: "reset_previous_node",
    };
    store.dispatch(action);
  };

  const initStoreNodes = (nodes) => {
    setVistingAnimationFalse();
    actionMouseUp();
    resetPreviousNode();
    setStartNode(START_NODE_ROW, START_NODE_COL);
    setStartNode(STOP_NODE_ROW, STOP_NODE_COL);
    const action = {
      type: "init_nodes",
      value: nodes,
    };
    store.dispatch(action);
  };

  useEffect(() => {
    const nodes = getInitialGrid();
    initStoreNodes(nodes);
  }, []);

  const makeOtherNodeRender = (row, col) => {};

  return (
    <>
      <div className="grid-container">
        <div className="grid">
          <BoardContainer>
            {nodes.map((row, rowIndex) =>
              row.map((node, nodeIndex) => {
                const { col, row } = node;
                return (
                  <Board
                    key={[col, row]}
                    col={col}
                    row={row}
                    ref={nodeRef[row][col]}
                    makeOtherNodeRender={(preRow, preCol) => {
                      makeOtherNodeRender(preRow, preCol);
                    }}
                  ></Board>
                );
              })
            )}
          </BoardContainer>
        </div>
      </div>
    </>
  );
};
