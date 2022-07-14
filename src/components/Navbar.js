import React from "react"
import { Navigate } from 'react-router-dom'

export const CustomNavbar = () => {
    return (

        <nav>
          <Navigate to='Main'>Home</Navigate>
          <Navigate to='/'>Game</Navigate>
          <Navigate to='about'>About me</Navigate>
          {/* <Navigate>Github</Navigate> */}
        </nav>
     
     )
}