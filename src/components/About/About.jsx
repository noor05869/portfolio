import React, { forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import programmer from "../../Assets/programmer.jpg"
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Image from "next/image";

const About = forwardRef(({ aboutRef }) => {
  return (
    <Container ref={aboutRef} fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            className="align-items-start"
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">{"I'M"}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img mb-3"
          >
            <Image style={{ aspectRatio: "3/2" }} src={programmer} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading  justify-content-center d-flex ">
          Professional <strong className="purple mx-2">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading justify-content-center d-flex  ">
          <strong className="purple mx-2">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
})
About.displayName = "About";
export default About;