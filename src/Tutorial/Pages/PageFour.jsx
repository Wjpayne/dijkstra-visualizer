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
          aria-labelledby="modal-pageThree"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-pageThree"
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
                marginTop: "70px",
              }}
            >
              <img style={{ width: "500px" }} src={PageFourImage}></img>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                bottom: "-10%",
              }}
            >
              <Button
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                size="large"
                disableRipple="true"
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
                disableRipple="true"
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
