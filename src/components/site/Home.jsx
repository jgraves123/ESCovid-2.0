import React from "react";
import {Carousel, Navbar, Image, Container, Row, Col} from 'react-bootstrap'

function Home() {
  localStorage.clear()
  return (
    <div className="home">
      {/*<Navbar className={"navbar navbar-dark bg-primary"} expand="lg" style={{paddingBottom: "50px"}}/>*/}
      <div className="container" align={"left"}>
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <Carousel style={{marginLeft: "30px"}}>
              <Carousel.Item align='center'>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/escovid.png?raw=true"
                    alt="First slide"
                />
                {/*<div className = "para" align='center' style={{width: "60%"}}>*/}
                {/*  <p><strong>Levels and Estimated Time: </strong>Choose the level that’s right for your group!*/}
                {/*    (Either way, this is a difficult and lengthy escape room, so try not to get demoralized if it is taking awhile. Feel free to do it in multiple sittings!!!)*/}
                {/*    <br/><em>Challenging:</em> ESCovid-19 is guaranteed to challenge you in new ways, just as Covid-19 has challenged us all. 1-2 hours estimated.*/}
                {/*    <br/><em>Very Challenging:</em> Now, imagine a mutated version that has evolved to withstand your best problem-solving skills, and voila: ESCovid-20! 2-3 hours estimated.</p>*/}
                {/*</div>*/}
              </Carousel.Item>
              <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/dreamscape.png?raw=true"
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
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
          <div class="col-lg-5" style={{paddingLeft:"50px"}}>
            <h1 className="font-weight-normal white" style={{fontSize:"70px", fontFamily: "copperplate gothic", padding: "20px"}}><span style={{color: "#ed6a5a"}}>V</span>irtually <br/><span
                style={{color: "#ed6a5a"}}>I</span>m<span style={{color: "#ed6a5a"}}>P</span>ossible <br/><span
                style={{color: "#ed6a5a"}}>E</span>scape <br/><span style={{color: "#ed6a5a"}}>R</span>ooms</h1>
            {/*<br/><span style={{color: "#0b6e4f"}}>Games</span>*/}
          </div>
        </div>
      </div>
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
