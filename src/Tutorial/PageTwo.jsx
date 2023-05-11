import React from "react";
import { Modal } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";

export const PageTwo = (props) => {

    const {openTwo, handleCloseTwo, modalStyle} = props
  return (
    <div>
      {" "}
      <Modal
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby="modal-pageTwo"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-pageTwo"
            sx={{ textAlign: "center", fontSize: "40px", marginTop: "10px" }}
          >
           Page Two
          </Typography>
        </Box>
      </Modal>
    </div> 
  );
};
