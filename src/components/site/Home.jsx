import React from "react";
import {Carousel, Navbar, Image, Container, Row, Col} from 'react-bootstrap'

function Home() {
  localStorage.clear()
  return (
    <div className="home">
      {/*<Navbar className={"navbar navbar-dark bg-primary"} expand="lg" style={{paddingBottom: "50px"}}/>*/}
      {/*<div className="container" align={"left"}>*/}
        {/*<div className="row align-items-center my-5">*/}
          <div align={"center"} style={{marginTop: "20px"}}>
            <div style={{width: "90%"}}>
            <Carousel>
              <Carousel.Item align='center'>
                <div style={{width: "75%", float: "right"}}>
                  <img
                      className="d-block w-100"
                      src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/viper.png?raw=true"
                      alt="First slide"
                  />
                </div>
                <div style={{width: "25%", height: "577px", float: "left", backgroundColor: "#fcc81a"}}>
                  <h1>Description here</h1>
                  <p>Welcome to VIPER games</p>
                  <p>We are happy to have you.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item align='center'>
                <div style={{width: "75%", float: "left"}}>
                  <img
                      className="d-block w-100"
                      src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/escovid.png?raw=true"
                      alt="First slide"
                  />
                </div>
                <div style={{width: "25%", height: "577px", float: "right", backgroundColor: "#fcc81a"}}>
                  <h1>A math-and-space themed escape game</h1>
                  <p>Escape covid on a rocketship yay</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/dreamscape.png?raw=true"
                    alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/comic.png?raw=true"
                    alt="Third slide"
                />
                <Carousel.Caption>
                  {/*<h3>Third slide label</h3>*/}
                  {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
          {/*<div class="col-lg-5" style={{paddingLeft:"50px"}}>*/}
          {/*  <h1 className="font-weight-normal white" style={{fontSize:"70px", fontFamily: "copperplate gothic", padding: "20px"}}><span style={{color: "#ed6a5a"}}>V</span>irtually <br/><span*/}
          {/*      style={{color: "#ed6a5a"}}>I</span>m<span style={{color: "#ed6a5a"}}>P</span>ossible <br/><span*/}
          {/*      style={{color: "#ed6a5a"}}>E</span>scape <br/><span style={{color: "#ed6a5a"}}>R</span>ooms</h1>*/}
          {/*  /!*<br/><span style={{color: "#0b6e4f"}}>Games</span>*!/*/}
          {/*</div>*/}
        {/*</div>*/}
      {/*</div>*/}
      <Container align='left' style={{padding: "40px"}} >
        <Row>
            <div className={'container'} align='left'>
              <h1 className="font-weight-normal" style={{fontFamily: "copperplate gothic"}}>What is a virtual escape game?</h1>
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
