import React from 'react'
import { NavBar } from './NavBar/NavBar'
import Board from './Board/Board'

export const LandingPage = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div style = {{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "110px"}}>
        <Board></Board>
        </div>
    </div>
  )
}
