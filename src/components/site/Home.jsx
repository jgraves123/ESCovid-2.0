import React from "react";
import {Carousel, Navbar, Image, Container, Row, Col} from 'react-bootstrap'

function Home() {
  localStorage.clear()
  return (
    <div>
          <div align={"center"} style={{marginTop: "20px"}}>
            <div style={{width: "90%"}}>
            <Carousel>
              <Carousel.Item align='center'>
                <div className="sideContent" style={{backgroundColor: "#fcc81a", width: "30%", height: "535px"}}>
                  <div className="sideText">
                    <h1>Welcome</h1>
                    <br/>
                    <p>You can check in anytime you like, <br/>
                      but you can never leave...</p>
                  </div>
                </div>
                <div style={{width: "70%", float: "left"}}>
                  <img
                      className="d-block w-100"
                      src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/viper12.png?raw=true"
                      alt="First slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item align='center'>
                <div className="sideContent" style={{backgroundColor: "#0fd145"}}>
                  <div className="sideText">
                    <h1>Play now!</h1>
                    <br/>
                    <p>Space + math + world crisis. <br/>What more do you need?</p>
                  </div>
                </div>
                <div style={{width: "70%", float: "left"}}>
                  <img
                      className="d-block w-100"
                      src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/escovid12.png?raw=true"
                      alt="escovid"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="sideContent" style={{backgroundColor: "#fcc81a"}}>
                  <div className="sideText">
                    <h1>Coming Soon!</h1>
                    <br/>
                    <p>Wouldn't it be funny if were actually trapped in here?</p>
                  </div>
                </div>
                <div style={{width: "70%", float: "left"}}>
                  <img
                      className="d-block w-100"
                      src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/dreamscape12.png?raw=true"
                      alt="Dreamscape"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="sideContent" style={{backgroundColor: "#fcc81a"}}>
                  <div className="sideText">
                    <h1>Coming Soon!</h1>
                    <br/>
                    <p>See if you can *dream* a way out of this one!</p>
                  </div>
                </div>
                <div style={{width: "70%", float: "left"}}>
                  <img
                      className="d-block w-100"
                      src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/droppedcomic12.png?raw=true"
                      alt="dropped comic"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
    <br/>
    <br/>
      <Container align='left' style={{width: "90%"}} >
        <Row>
            <div align='left'>
              <h1>What is a virtual escape game?</h1>
            </div>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Image src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/escovid.png?raw=true" thumbnail />
          </Col>
          <Col>
            <h2>Difficulty</h2>
          </Col>
          <Col/>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Image src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/dreamscape.png?raw=true" thumbnail />
          </Col>
          <Col><h2>Players</h2></Col>
          <Col/>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Image src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/comic.png?raw=true" thumbnail />
          </Col>
          <Col><h2>Time to Play</h2></Col>
          <Col/>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
