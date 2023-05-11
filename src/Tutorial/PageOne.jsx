import React from "react";
import { Modal } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";

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
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-pageOne"
            sx={{ textAlign: "center", fontSize: "40px", marginTop: "10px" }}
          >
            Dijkstra Algorithm Visualizer
          </Typography>
          <div style = {{height: "70%"}}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              
            }}
          >
            <Button
              sx={{
                color: "black",
                "&:hover": { backgroundColor: "transparent" },
              }}
              size="large"
              disableRipple="true"
              onClick = {next}
            >
              Start Tutorial
            </Button>
            <Button
              sx={{
                color: "black",
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
