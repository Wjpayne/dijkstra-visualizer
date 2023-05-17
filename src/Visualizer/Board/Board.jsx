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

  const handleMouseLeave = () => {
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

  if (!storeGetState.visitingAnimation) {
    const { isWall, isStart, isStop } = storeGetState.nodes[row][col];

    const extraClass = isStop
      ? "node-stop"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : "node-item";

    return (
      <div
        draggable={false}
        eid={`node-${col} - ${row}`}
        className={extraClass}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onDragStart={(e) => {
          e.preventDefault;
          e.stopPropagation;
        }}
      >
        Board
      </div>
    );
  } else if (storeGetState.visitingAnimation) {
    return <div id={`node-${col}-${row}`} className="node-visited"></div>;
  }
};

const updateToggledWall = (row, col) => {
  let nodes = store.getState().nodes;
  nodes[row][col].isWall = !nodes[row][col].isWall;
  const action = {
    type: "update_wall",
    value: nodes,
  };
  store.dispatch(action);
};

const mouseClickTrue = () => {
  const action = {
    type: "set_mouseClick_true",
  };
  store.dispatch(action);
};

export const actionMouseUp = () => {
  const action = {
    type: "mouse_up",
  };
  store.dispatch(action);
};

const actionDragStart = () => {
  const action = {
    type: "drag_start",
  };
  store.dispatch(action);
};

const actionDragStop = () => {
  const action = {
    type: "drag_stop",
  };
  store.dispatch(action);
};

const updateStartNode = (row, col) => {
  let nodes = store.getState().nodes;
  if (!nodes[row][col].isStop) {
    nodes[row][col].isStart = true;
    nodes[row][col].isWall = false;
    const action = {
      type: "update_start",
      value: nodes,
    };
    store.dispatch(action);
  }
};

const updateStopNode = (row, col) => {
  let nodes = store.getState().nodes;
  if (!nodes[row][col].isStart) {
    nodes[row][col].isStop = true;
    nodes[row][col].isWall = false;
    const action = {
      type: "update_stop",
      value: nodes,
    };
    store.dispatch(action);
  }
};

const deleteNode = (row, col) => {
  let nodes = store.getState().nodes;
  nodes[row][col].isStop = false;
  nodes[row][col].isStart = false;
  nodes[row][col].isWall = false;
  const action = {
    type: "delete_node",
    value: nodes,
  };
  store.dispatch(action);
};

const registerPreviousNode = (row, col) => {
  const action = {
    type: "set_pre_node",
    value: [row, col],
  };
  store.dispatch(action);
};

export const setStopNode = (row, col) => {
  const action = {
    type: "set_stop_node",
    value: [row, col],
  };
  store.dispatch(action);
};

export const setStartNode = (row, col) => {
  const action = {
    type: "set_start_node",
    value: [row, col],
  };
  store.dispatch(action);
};
