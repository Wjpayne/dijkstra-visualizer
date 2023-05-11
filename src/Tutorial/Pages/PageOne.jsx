import React from "react";
import { Modal } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as PageOneImage } from "../Images/PageOneImage.svg";
export const PageOne = (props) => {
  const { openOne, handleCloseOne, modalStyle, handleOpenTwo } = props;

  const next = () => {
    handleCloseOne();
    handleOpenTwo();
  };

  return (
    <div>
      <Modal
        open={openOne}
        onClose={handleCloseOne}
        aria-labelledby="modal-pageOne"
        sx={{ backgroundColor: "white" }}
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-pageOne"
            sx={{ textAlign: "center", fontSize: "40px", marginTop: "5px" }}
          >
            Dijkstra's Algorithm Visualizer
          </Typography>
          <div
            style={{
              width: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              marginTop: "10px"
            }}
          >
            <PageOneImage />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              bottom: "-73%"
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
              onClick={next}
            >
              Start Tutorial
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
              onClick={handleCloseOne}
            >
              Skip Tutorial
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
