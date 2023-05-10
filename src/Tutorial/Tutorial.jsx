import { Modal } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "400px",
  borderRadius: "25px",
  boxShadow: 20,
  outline: "none",
};

export const Tutorial = () => {
  const [openOne, setOpenOne] = useState(true);
  const handleOpenOne = () => setOpenOne(true);
  const handleCloseOne = () => setOpenOne(false);

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Button
              sx={{
                color: "black",
                "&:hover": { backgroundColor: "transparent" },
              }}
              size="large"
              disableRipple="true"
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
