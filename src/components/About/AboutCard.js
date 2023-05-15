import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishal Shah </span>
            from <span className="purple"> Anand,Gujrat,India.</span>
            <br />I am Persuing Becholars Degree in Computer Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listing Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Taking Immediate Actions on Your Idea is way more benifical then you think..!!"{" "}
          </p>
          <footer className="blockquote-footer">Vishal Shah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
