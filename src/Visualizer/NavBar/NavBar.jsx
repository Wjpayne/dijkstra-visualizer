import { PlayCircle } from "@mui/icons-material";
import ReplayIcon from "@mui/icons-material/Replay";
import { AppBar, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import "./NavBar.css";

export const NavBar = (props) => {
  const { visualizeDijkstra } = props;
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
                
              >
                <ReplayIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>Reset</Grid>
            <Grid item>
              <div className="legend-start"></div>
            </Grid>
            <Grid item>Starting Node</Grid>
            <Grid item>
              <div className="legend-end"></div>
            </Grid>
            <Grid item>Ending Node</Grid>
            <Grid item>
              <div className="legend-wall"></div>
            </Grid>
            <Grid item>Wall</Grid>
            <Grid item>
              <div className="legend-visited"></div>
            </Grid>
            <Grid item>Visited</Grid>
            <Grid item>
              <div className="legend-shortestpath"></div>
            </Grid>
            <Grid item>Shortest Path</Grid>
          </Grid>
        </>
      </AppBar>
    </div>
  );
};
