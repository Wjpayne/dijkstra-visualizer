import React from "react";
import { NavBar } from "./NavBar/NavBar";

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
      ></div>
    </div>
  );
};
