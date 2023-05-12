import React, { useEffect, useRef } from "react";
import { useState } from "react";
//import { getGrid } from "../../utils/startinggrid";
import "./board.css";
import { useParams } from "../Context/CreateContext";

export default function Board() {
  const {
    grid,
    setgrid,
    editing,
    seteditFlag,
    mode,
    start,
    end,
    run,
    res,
    algo,
  } = useParams();

  const [refarray] = useState(Getrefarray(grid));

  function Getrefarray(grid) {
    let array = [];
    const arrayRef = useRef(null)
    grid.forEach((elem) => {
      elem.forEach((child) => {
        array.push(arrayRef);
      });
    });
    return array;
  }

  function BFS(graph, hashmap, prevmap, start, target) {
    let queue = [start];
    let count = 0;
    hashmap[`${start.x}-${start.y}`] = true;
    while (queue.length > 0) {
      count += 1;
      let c = queue.pop();
      refarray[c.x + c.y * 50].current.style["transition-delay"] = `${
        count * 8
      }ms`;
      refarray[c.x + c.y * 50].current.classList.add("visited");
      if (c.x === target.x && c.y === target.y) return [c, count];

      if (
        c.x + 1 < 50 &&
        !hashmap[`${c.x + 1}-${c.y}`] &&
        !graph[c.y][c.x + 1].iswall
      ) {
        queue.unshift({ x: c.x + 1, y: c.y });
        prevmap[`${c.x + 1}-${c.y}`] = { ...c };
        hashmap[`${c.x + 1}-${c.y}`] = true;
      }
      if (
        c.x - 1 >= 0 &&
        !hashmap[`${c.x - 1}-${c.y}`] &&
        !graph[c.y][c.x - 1].iswall
      ) {
        queue.unshift({ x: c.x - 1, y: c.y });
        prevmap[`${c.x - 1}-${c.y}`] = { ...c };
        hashmap[`${c.x - 1}-${c.y}`] = true;
      }
      if (
        c.y + 1 < 25 &&
        !hashmap[`${c.x}-${c.y + 1}`] &&
        !graph[c.y + 1][c.x].iswall
      ) {
        queue.unshift({ x: c.x, y: c.y + 1 });
        prevmap[`${c.x}-${c.y + 1}`] = { ...c };
        hashmap[`${c.x}-${c.y + 1}`] = true;
      }
      if (
        c.y - 1 >= 0 &&
        !hashmap[`${c.x}-${c.y - 1}`] &&
        !graph[c.y - 1][c.x].iswall
      ) {
        queue.unshift({ x: c.x, y: c.y - 1 });
        prevmap[`${c.x}-${c.y - 1}`] = { ...c };
        hashmap[`${c.x}-${c.y - 1}`] = true;
      }
    }
    return null;
  }

  useEffect(() => {
    if (algo === "BFS") {
      let hashmap = {};
      let prevmap = {};
      for (let j = 0; j < 25; j++) {
        for (let i = 0; i < 50; i++) {
          hashmap[`${i}-${j}`] = false;
          prevmap[`${i}-${j}`] = null;
        }
      }
      let result = BFS(grid, hashmap, prevmap, start.current, end.current);
      let path = [];
      if (result != null) {
        let current = result[0];
        while (prevmap[`${current.x}-${current.y}`] != null) {
          path.push(current);
          current = prevmap[`${current.x}-${current.y}`];
        }
        setTimeout(() => {
          path.reverse().forEach((elem, index) => {
            refarray[elem.x + elem.y * 50].current.style[
              "transition-delay"
            ] = `${index * 15}ms`;
            refarray[elem.x + elem.y * 50].current.classList.add("path");
          });
        }, result[1] * 9);
      }
    }
  }, [run]);

  useEffect(() => {
    refarray.forEach((elem) => {
      elem.current.style["transition-delay"] = "0ms";
    });
    refarray.forEach((elem) => {
      elem.current.classList.remove("visited");
      elem.current.classList.remove("path");
    });
  }, [res]);

  return (
    <div className="board">
      {refarray.map((elem, index) => {
        let classList = ["cell"];

        let yindex = Math.floor(index / 50);
        let xindex = index % 50;
        let cell = grid[yindex][xindex];

        if (cell.iswall) {
          classList.push("wall");
        }

        return (
         
          <div
            key={`${index}`}
            ref={elem}
            className={classList.join(" ")}
            onMouseDown={() => {
              seteditFlag(true);
            }}
            onMouseUp={() => {
              seteditFlag(false);
            }}
            onMouseMove={() => {
              if (!editing) return;
              const current = grid[yindex][xindex];
              if (current.isstart || current.istarget) return;
              switch (mode) {
                case "setstart":
                  let newgridStart = grid.map((elem) => {
                    return elem.map((elem) => {
                      if (!elem.isstart) return elem;
                      return { ...elem, isstart: false };
                    });
                  });
                  newgridStart[yindex][xindex] = {
                    ...newgridStart[yindex][xindex],
                    isstart: true,
                    istarget: false,
                    weight: 1,
                    iswall: false,
                  };
                  start.current = { x: xindex, y: yindex };
                  setgrid(newgridStart);
                  break;

                case "settarget":
                  let newgridTarget = grid.map((elem) => {
                    return elem.map((elem) => {
                      if (!elem.istarget) return elem;
                      return { ...elem, istarget: false };
                    });
                  });
                  newgridTarget[yindex][xindex] = {
                    ...newgridTarget[yindex][xindex],
                    isstart: false,
                    istarget: true,
                    weight: 1,
                    iswall: false,
                  };
                  end.current = { x: xindex, y: yindex };
                  setgrid(newgridTarget);
                  break;

                case "addbricks":
                  let newgridBricks = grid.slice();
                  newgridBricks[yindex][xindex] = {
                    ...newgridBricks[yindex][xindex],
                    weight: 1,
                    iswall: true,
                  };
                  setgrid(newgridBricks);
                  break;

                default:
                  return;
              }
            }}
          >
            {cell.weight > 1 ? <i className="bi bi-virus"></i> : null}
            {cell.isstart ? <i className="start"></i> : null}
            {cell.istarget ? <i className="bi bi-geo"></i> : null}
          </div>
        );
      })}
    </div>
  );
}
