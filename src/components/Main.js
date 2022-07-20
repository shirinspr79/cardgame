import React from "react";
import "./Main.css";
import Type from "./Type";
import { Container, Row, Col } from "react-bootstrap";

export default function Main() {
  return (
    <>
      <Container className="home-content">
        <Row>
          <Col>
            <h1
              style={{ marginLeft: "8%", marginTop: "20%" }}
              className="heading"
            >
              Hi There!{""}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 style={{ marginLeft: "8%" }}>
              I'M
              <strong className="main-name"> SHIRIN SHAPOURI</strong>
            </h1>
            <h3 style={{ marginLeft: "8%" }}>
              <Type />
            </h3>
          </Col>
          <Col>
            <img
              className="homeimg"
              src="main/img/about.png"
              alt="about img"
            />
          </Col>
        </Row>
        <marquee>
          <h6 style={{ marginTop: "6%" , marginRight:"2%"}}>
            Welcome to my
            site&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h6>
        </marquee>
      </Container>
    </>
  );
}
