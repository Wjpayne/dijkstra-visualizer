import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { Visualizer } from "./Visualizer";

export const LandingPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "110px",
        }}
      >
        <Visualizer></Visualizer>
      </div>
    </div>
  );
};
