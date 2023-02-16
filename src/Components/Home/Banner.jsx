import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import carbon from "../../Assets/carbon.svg";
import Home2 from "./Home2";
import Type from "./Type";

function Banner() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content ">
          <Row className=" justify-content-center align-items-center">
            <Col className="home-header ">
              <div>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    {/* 👋🏻 */}
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Noor ullah </strong>
                </h1>
              </div>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image
                src={carbon}
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Banner;
