import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Container, Nav } from "react-bootstrap";

export function CustomNavbar() {
  const [basicActive, setActive] = useState("main");
  const navigate = useNavigate();
  const handleBasicClick = (value) => {
    setActive(value);
    navigate(value);
  };

  return (
    <Container
      style={{
        padding: 10,
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
      }}
      fluid
    >
      <Nav variant="pills">
        <Nav.Item style={{ paddingInline: 10 }}>
          <Nav.Link
            as={Button}
            onClick={() => handleBasicClick("main")}
            active={basicActive === "main"}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ paddingInline: 10 }}>
          <Nav.Link
            as={Button}
            onClick={() => handleBasicClick("game")}
            active={basicActive === "game"}
          >
            Game
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ paddingInline: 10 }}>
          <Nav.Link
            as={Button}
            onClick={() => handleBasicClick("about")}
            active={basicActive === "about"}
          >
            About Me
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

