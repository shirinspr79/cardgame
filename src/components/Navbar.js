import React from "react";
import { Navigate } from "react-router-dom";
// import { Button } from 'react-bootstrap'
import { Nav } from "react-bootstrap";
import { useState } from "react";

export function CustomNavbar() {
  const [basicActive, setActive] = useState("main");

  const handleBasicClick = (value) => {
    setActive(value);
  };

  return (
    <>
      <Nav variant="pills">
        <Nav.Item
          onClick={() => handleBasicClick("main")}
          active={basicActive === "main"}
        >
          <Nav.Link to="/main" tag={Navigate}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => handleBasicClick("game")}
          active={basicActive === "game"}
        >
          <Nav.Link to="/game" tag={Navigate}>
            Game
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => handleBasicClick("about")}
          active={basicActive === "about"}
        >
          <Nav.Link to="/about" tag={Navigate}>
            About Us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

// <Navbar >
//  <Nav variant="pills" defaultActiveKey="/main">
//     <Nav.Item>
//       <Nav.Link href="/main">Home</Nav.Link>
//     </Nav.Item>
//     <Nav.Item>
//       <Nav.Link href="Game">Game</Nav.Link>
//     </Nav.Item>
//     <Nav.Item >
//       <Nav.Link href="about">About me</Nav.Link>
//     </Nav.Item>
//   </Nav>
//   </Navbar>

// <nav>
//  <button onClick={ ()=> navigate('main')}>Home</button>
//  <button onClick={ ()=> navigate('game')}>Game</button>
//  <button onClick={ ()=> navigate('about')}>About me</button>
//   {/* <Navigate to='Main'>Home</Navigate>
//   <Navigate to='/'>Game</Navigate>
//   <Navigate to='/about'>About me</Navigate>
//   <Navigate>Github</Navigate> */}
// </nav>
