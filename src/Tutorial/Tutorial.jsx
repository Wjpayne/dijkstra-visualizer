import React, { useState } from "react";
import { PageOne } from "./Pages/PageOne";
import { PageTwo } from "./Pages/PageTwo";
import { PageThree } from "./Pages/PageThree";
import { PageFour } from "./Pages/PageFour";
import { PageFive } from "./Pages/PageFive";

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
  backgroundColor: "white",
};

export const Tutorial = () => {
  const [openOne, setOpenOne] = useState(true);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false)
  const handleOpenOne = () => setOpenOne(true);
  const handleCloseOne = () => setOpenOne(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);
  const handleOpenThree = () => setOpenThree(true);
  const handleCloseThree = () => setOpenThree(false);
  const handleOpenFour = () => setOpenFour(true);
  const handleCloseFour = () => setOpenFour(false);
  const handleOpenFive = () => setOpenFive(true)
  const handleCloseFive = () => setOpenFive(false)

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
        handleOpenOne={handleOpenOne}
        handleCloseTwo={handleCloseTwo}
        handleOpenThree={handleOpenThree}
        modalStyle={modalStyle}
      />
      <PageThree
        openThree={openThree}
        handleOpenTwo={handleOpenTwo}
        handleCloseThree={handleCloseThree}
        handleOpenFour={handleOpenFour}
        modalStyle={modalStyle}
      />
      <PageFour
      openFour = {openFour}
      handleOpenThree = {handleOpenThree}
      handleCloseFour = {handleCloseFour}
      handleOpenFive = {handleOpenFive}
      modalStyle={modalStyle}
      />
      <PageFive
      openFive = {openFive}
      handleOpenFour = {handleOpenFour}
      handleCloseFive = {handleCloseFive}
      modalStyle={modalStyle}
      />
    </div>
  );
};
