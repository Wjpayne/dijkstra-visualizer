import { PlayCircle } from "@mui/icons-material";
import ReplayIcon from '@mui/icons-material/Replay';
import { AppBar, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

export const NavBar = () => {
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
          </Grid>
        </>
      </AppBar>
    </div>
  );
};
