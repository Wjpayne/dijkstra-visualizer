import React from "react";
import { Modal } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";
import PageOneImage from "../Images/PageOneImage.gif";
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
            Dijkstra Algorithm Visualizer
          </Typography>
          <div style={{ height: "70%", marginLeft: "25PX", marginTop: "10px" }}>
            <img src={PageOneImage} alt="dijsktra illustration" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
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
