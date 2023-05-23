import React from "react";
import { Modal } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";
import PageTwoImage from "../Images/PageTwoImage.gif";

export const PageTwo = (props) => {
  const {
    openTwo,
    handleCloseTwo,
    modalStyle,
    handleOpenThree,
    handleOpenOne,
  } = props;

  const next = () => {
    handleCloseTwo();
    handleOpenThree();
  };

  const back = () => {
    handleCloseTwo();
    handleOpenOne();
  };
  return (
    <div>
      <>
        <Modal
          open={openTwo}
          onClose={handleCloseTwo}
          aria-labelledby="modal-pageTwo"
          disableScrollLock
          hideBackdrop = {true}
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-pageTwo"
              sx={{ textAlign: "center", fontSize: "40px", marginTop: "10px" }}
            >
              What is Dijkstra's algorithm?
            </Typography>
            <Typography sx={{ textAlign: "center", margin: "10px" }}>
              At it's core, Dijkstra's algorithm seeks to find the shortest path
              between two points. This application visualizes Dijkstra's
              pathfinding algorithm and put's it into action! The algorithms for
              this application are adapted for a 2D grid, where movements from
              one node to another have a "cost" of 1.
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img alt = "Dijkstra's algorithm example" src={PageTwoImage}></img>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                bottom: "-4.75%",
              }}
            >
              <Button
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                size="large"
                disableRipple
                onClick={back}
              >
                Back
              </Button>
              <Button
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                size="large"
                disableRipple
                onClick={next}
              >
                Next
              </Button>
            </div>
          </Box>
        </Modal>
      </>
    </div>
  );
};
