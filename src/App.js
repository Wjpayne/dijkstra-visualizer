
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Tutorial } from "./Tutorial/Tutorial";
import "./App.css"


function App() {

  const font = "'Ubuntu', sans-serif"

  const theme = createTheme ({
    typography: {
      fontFamily: font
    }
  })
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
    <div className="App" style = {{backgroundColor: "black"}}>
      <Tutorial></Tutorial>
    </div>
    </ThemeProvider>
  );
}

export default App;
