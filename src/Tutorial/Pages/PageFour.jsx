import React from "react";
import { Modal } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";
import PageFourImage from "../Images/PageFourImage.gif";

export const PageFour = (props) => {
  const {
    openFour,
    handleCloseFour,
    modalStyle,
    handleOpenFive,
    handleOpenThree,
  } = props;

  const next = () => {
    handleCloseFour();
    handleOpenFive();
  };

  const back = () => {
    handleCloseFour();
    handleOpenThree();
  };
  return (
    <div>
      <>
        <Modal
          open={openFour}
          onClose={handleCloseFour}
          aria-labelledby="modal-pageFour"
          disableScrollLock
          hideBackdrop = {true}
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-pageFour"
              sx={{ textAlign: "center", fontSize: "40px", marginTop: "10px" }}
            >
              How it works continued
            </Typography>
            <Typography sx={{ textAlign: "center", margin: "10px" }}>
              Click and drag the start and stop node to move them across the
              board.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "75px",
              }}
            >
              <img alt = "" style={{ width: "500px" }} src={PageFourImage}></img>
            </div>
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
