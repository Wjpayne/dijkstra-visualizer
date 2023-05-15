import "./Board.css";
import React from "react";
import store from "../Store";

export const Board = (props) => {
  const { row, col, makeOtherNodeRender } = props;

  const storeGetState = store.getState();

  const [boardState, setBoardState] = useState({});

  const handleMouseDown = () => {
    if (storeGetState.nodes[row][col].isStart) {
      if (storeGetState.dragStartPoint) return;
      actionDragStart();
    } else if (storeGetState.nodes[row][col].isStop) {
      if (storeGetState.dragStopPoint) return;
      actionDragStop();
    } else {
      if (storeGetState.mouseIsClicked) return;
      mouseClickTrue();
      updateToggleWall(row, col);
    }
    if (!storeGetState.visitingAnimation) {
      setBoardState({});
    }
  };

  const handleMouseUp = () => {
    if (
      !storeGetState.mouseIsClicked &&
      !storeGetState.dragStartPoint &&
      !storeGetState.dragStopPoint
    ) {
      return;
    }
    if (storeGetState.dragStartPoint) {
      if (!storeGetState.nodes[row][col].isStop) {
        setStartNode(row, col);
      }
    } else if (storeGetState.dragStopPoint) {
      if (!storeGetState.nodes[row][col].isStart) {
        setStopNode(row, col);
      }
    }
    actionMouseUp();
  };

  const handleMouseEnter = () => {
    let prevRow = storeGetState.previousNode[0];
    let prevCol = storeGetState.previousNode[1];
    if (
      !storeGetState.nodes[row][col].isStart &&
      !storeGetState.nodes[row][col.isStop]
    ) {
      if (storeGetState.dragStopPoint) {
        updateStopNode(row, col);
        deleteNode(prevRow, prevCol);
        setBoardState({});
        makeOtherNodeRender(prevRow, prevCol);
      } else if (storeGetState.dragStartPoint) {
        updateStartNode(row, col);
        deleteNode(prevRow, prevCol);
        setBoardState({});
        makeOtherNodeRender(prevRow, prevCol);
      } else if (storeGetState.mouseIsClicked) {
        updateToggleWall(row, col);
        setBoardState({});
      }
    }
  };

  const handleMouseleave = () => {
    if (storeGetState.dragStartPoint) {
      if (!storeGetState.nodes[row][col].isStop) {
        registerPreviousNode(row, col);
      }
    } else if (storeGetState.dragStopPoint) {
      if (!storeGetState.nodes[row][col].isStart) {
        registerPreviousNode(row, col);
      }
    }
  };

  



  return ( 
  
  <div>Board</div>


  )
};
