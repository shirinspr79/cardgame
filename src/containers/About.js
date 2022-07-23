import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./Game.css";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";

export const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="quote-card-view">
            <Card.Body>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
              <h1 style={{ fontSize: "1.8em", paddingBottom: "20px" }}>
                LET ME INTRODUCE<strong className="purple"> MYSELF👩🏻‍💻 </strong>
              </h1>
              <blockquote>
                <p style={{ textAlign: "justify" }}>
                  Hi Everyone, I am{" "}
                  <strong className="purple">Shirin Shapouri.</strong>
                  <br />I am a graduate of software engineering who started
                  learning React <br />
                  separately and have had a good experience in the field of
                  front-end.
                  <p>I made this site with love to connect with you.</p>
                  Apart from coding, some other activities that I love to do:
                </p>
                <ul>
                  <li className="about-activity">
                    <ImPointRight /> Surf in the internet
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Reading Books
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Exercising
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Playing Games
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Travelling
                  </li>
                </ul>
                <br />
                <p style={{ fontStyle: "italic" }}>
                  <h4> "Hopefully succesfull and long cooperation"</h4>{" "}
                </p>
              </blockquote>
            </Card.Body>
          </Card>
          <img
            className="cooperation-img"
            src="/cardgame/img/cooperation.png"
            alt="cooperation"
          ></img>
        </Col>

        <Col>
          <Row>
            <img className="girl" src="/cardgame/img/girl.png" alt="girl"></img>
          </Row>

          <Row>
            <p
              style={{
                fontStyle: "italic",
                direction: "rtl",
                paddingRight: "280px",
                paddingTop: "0px",
              }}
            >
              <h6> "FIND ME ON"</h6>{" "}
            </p>

            <ul
              id="event-list"
              style={{ direction: "rtl", paddingRight: "246px" }}
            >
              <li>
                <a
                  href="https://www.instagram.com/sprshirin/"
                  target="_blank"
                  rel="noreferrer"
                  className="connect-me"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=+989158099314&text&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-icon"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/shirinspr79/cardgame/"
                  target="_blank"
                  rel="noreferrer"
                  className="git-hub"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Row>
        </Col>
  
      </Row>
    </Container>
  );
};
