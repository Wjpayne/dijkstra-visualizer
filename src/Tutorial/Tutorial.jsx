
import React, { useState } from "react";
import { PageOne } from "./Pages/PageOne";
import { PageTwo } from "./Pages/PageTwo";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "500px",
  borderRadius: "25px",
  boxShadow: 20,
  outline: "none",
  backgroundColor: "white"
};

export const Tutorial = () => {
  const [openOne, setOpenOne] = useState(true);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const handleOpenOne = () => setOpenOne(true);
  const handleCloseOne = () => setOpenOne(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);
  const handleOpenThree = () => setOpenThree(true);
  const handleCloseThree = () => setOpenThree(false);

  return (
    <div>
      <PageOne
        openOne={openOne}
        handleCloseOne={handleCloseOne}
        handleOpenTwo={handleOpenTwo}
        modalStyle={modalStyle}
      />
      <PageTwo
        openTwo={openTwo}
        handleOpenOne = {handleOpenOne}
        handleCloseTwo={handleCloseTwo}
        handleOpenThree={handleOpenThree}
        modalStyle={modalStyle}
      />
    </div>
  );
};
