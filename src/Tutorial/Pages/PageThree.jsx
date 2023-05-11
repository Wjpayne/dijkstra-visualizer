import React from "react";
import { Modal } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";
import PageThreeImage from "../Images/PageThreeImage.gif";

export const PageThree = (props) => {
  const {
    openThree,
    handleCloseThree,
    modalStyle,
    handleOpenFour,
    handleOpenTwo,
  } = props;

  const next = () => {
    handleCloseThree();
    handleOpenFour();
  };

  const back = () => {
    handleCloseThree();
    handleOpenTwo();
  };
  return (
    <div>
      <>
        <Modal
          open={openThree}
          onClose={handleCloseThree}
          aria-labelledby="modal-pageThree"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-pageThree"
              sx={{ textAlign: "center", fontSize: "40px", marginTop: "10px" }}
            >
              How it works
            </Typography>
            <Typography sx={{ textAlign: "center", margin: "10px" }}>
              Click on the grid to add a wall. Walls are impenetrable, meaning a
              path cannot cross through them.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <img style={{ width: "500px" }} src={PageThreeImage}></img>
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
