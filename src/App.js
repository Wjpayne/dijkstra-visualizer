import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { Tutorial } from "./Tutorial/Tutorial";

import { Pathfinder } from "./Visualizer/Pathfinder/Pathfinder";

function App() {
  const font = "'Ubuntu', sans-serif";

  const theme = createTheme({
    typography: {
      fontFamily: font,
    },
  });

  const [display, setDisplay] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "120px",
          }}
        >
          {display ? (
            <Tutorial setDisplay={setDisplay}></Tutorial>
          ) : (
            <Pathfinder></Pathfinder>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
