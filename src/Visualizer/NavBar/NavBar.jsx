import { PlayCircle } from "@mui/icons-material";
import ReplayIcon from "@mui/icons-material/Replay";
import { AppBar, Grid, IconButton, Typography } from "@mui/material";
import React from "react";


export const NavBar = (props) => {
  const { visualizeDijkstra, resetGrid } = props;
  return (
    <div>
      <AppBar sx={{ height: "100px" }}>
        <Typography
          sx={{ display: "flex", justifyContent: "center", fontSize: "30px" }}
        >
          Dijkstra's Algorithm Visualizer
        </Typography>

        <>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={0}
          >
            <Grid item>
              <IconButton
                sx={{
                  "&:hover": { backgroundColor: "transparent" },
                  color: "white",
                }}
                onClick={() => visualizeDijkstra()}
              >
                <PlayCircle fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>Visualize</Grid>
            <Grid item>
              <IconButton
                sx={{
                  "&:hover": { backgroundColor: "transparent" },
                  color: "white",
                }}
                onClick={() => resetGrid()}
              >
                <ReplayIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>Reset</Grid>
            <Grid item>
              <div
                style={{
                  border: "1px solid white",
                  margin: "10px",
                  height: "24px",
                  width: "24px",
                  display: "inline-block",
                  backgroundColor: "rgb(126, 63, 189)",
                }}
              ></div>
            </Grid>
            <Grid item>Starting Node</Grid>
            <Grid item>
              <div
                style={{
                  border: "1px solid white",
                  margin: "10px",
                  height: "24px",
                  width: "24px",
                  display: "inline-block",
                  backgroundColor: "rgba(223, 65, 65, 0.78",
                }}
              ></div>
            </Grid>
            <Grid item>Ending Node</Grid>
            <Grid item>
              <div
                style={{
                  border: "1px solid white",
                  margin: "10px",
                  height: "24px",
                  width: "24px",
                  display: "inline-block",
                  backgroundColor: "rgba(16, 21, 95, 0.781)",
                }}
              ></div>
            </Grid>
            <Grid item>Wall</Grid>
            <Grid item>
              <div
                style={{
                  border: "1px solid white",
                  margin: "10px",
                  height: "24px",
                  width: "24px",
                  display: "inline-block",
                  backgroundColor: " rgba(0, 190, 218, 0.75)",
                }}
              ></div>
            </Grid>
            <Grid item>Visited</Grid>
            <Grid item>
              <div
                style={{
                  border: "1px solid white",
                  margin: "10px",
                  height: "24px",
                  width: "24px",
                  display: "inline-block",
                  backgroundColor: "  rgb(255, 243, 20)",
                }}
              ></div>
            </Grid>
            <Grid item>Shortest Path</Grid>
          </Grid>
        </>
      </AppBar>
    </div>
  );
};
