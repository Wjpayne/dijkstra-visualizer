import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Tutorial } from "./Tutorial/Tutorial";
import "./App.css";
import { LandingPage } from "./Visualizer/LandingPage";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./Visualizer/Store/index.js";

function App() {
  const font = "'Ubuntu', sans-serif";

  const theme = createTheme({
    typography: {
      fontFamily: font,
    },
  });

  const [display, setDisplay] = useState(true);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          {display ? (
            <Tutorial setDisplay={setDisplay}></Tutorial>
          ) : (
            <LandingPage></LandingPage>
          )}
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
