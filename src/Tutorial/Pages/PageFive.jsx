import React from "react";
import { Modal } from "@mui/base";
import { Box, Button, Link, Typography } from "@mui/material";


export const PageFive = (props) => {
  const { openFive, handleCloseFive, modalStyle, handleOpenFour, setDisplay } =
    props;

  const back = () => {
    handleCloseFive();
    handleOpenFour();
  };
  const finish = () => {
    handleCloseFive();
    setDisplay(false);
  };
  return (
    <div>
      <>
        <Modal
          open={openFive}
          onClose={handleCloseFive}
          aria-labelledby="modal-pageFive"
          disableScrollLock
          hideBackdrop={true}
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-pageThree"
              sx={{ textAlign: "center", fontSize: "40px", marginTop: "10px" }}
            >
              Have fun!
            </Typography>
            <Typography sx={{ textAlign: "center", margin: "100px" }}>
              Use the visualize button to visualize the algorithm and the reset
              button to clear the board.
              <br></br>
              <br></br>
              If you want to access this tutorial again, click on the tutorial
              icon in the top left corner of your screen. If you want to see the
              source code for this application, check out the github <Link underline = "none" sx = {{color: "black", fontWeight: "bold"}} href = "https://github.com/Wjpayne/dijkstra-visualizer">here</Link>
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "70px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                margin: "auto"
                
                
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
                onClick={finish}
              >
                Finish
              </Button>
            </div>
          </Box>
        </Modal>
      </>
    </div>
  );
};
