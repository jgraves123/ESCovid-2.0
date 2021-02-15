import React from "react";
import Leader from "../game/leaderboard";
import {Carousel, Navbar, Image, Container, Row, Col, Accordion, Card, Button} from 'react-bootstrap';
import Griddle, {plugins} from "griddle-react";
import {dataesc19, dataesc20, sortProperties} from "./leaderdata";

function Home() {
  localStorage.clear()
  return (
    <div>
          <div align={"center"} style={{marginTop: "20px"}}>
            <div style={{width: "90%"}}>
            <Carousel interval={50000} pause={"false"} style={{height: "100%"}}>
              <Carousel.Item align='center' style={{backgroundColor: "#fcc81a"}}>
                <div className="sideContent" style={{backgroundColor: "#fcc81a"}}>
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
              <Carousel.Item align='center' style={{backgroundColor: "#0fd145"}}>
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
              <Carousel.Item style={{backgroundColor: "#fcc81a"}}>
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
                      src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/dreamscape12.png?raw=true"
                      alt="Dreamscape"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item style={{backgroundColor: "#0fd145"}}>
                <div className="sideContent" style={{backgroundColor: "#0fd145"}}>
                  <div className="sideText">
                    <h1>Coming Soon!</h1>
                    <br/>
                    <p>Wouldn't it be funny if were actually trapped in here?</p>
                  </div>
                </div>
                <div style={{width: "70%", float: "left"}}>
                  <img
                      className="d-block w-100"
                      src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/comic12.png?raw=true"
                      alt="dropped comic"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
      <div align='left'>
        <div style={{width: "90%"}}>
      <div align='left' className="sectiontitle">
        <h1>What is a virtual escape room?</h1>
      </div>
      <div align='left' style={{padding: "2vw"}} >
        <Row style={{padding: "2vw 0"}}>
          <Col xs={8}>
            <Image src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/password.gif?raw=true" thumbnail />
          </Col>
          <Col xs={4}><h3>Our virtual escape rooms will take you through a story in which YOU are the main characters.
          Each stage will put your intellect and craftiness to the test to put together the passkey to advance.</h3></Col>
        </Row>
        <Row style={{padding: "2vw 0"}}>
          <Col xs={6}>
            <h3>You will interact with multimedia clues and puzzles along the way - we strive to engage everyone on the team!</h3>
          </Col>
          <Col sm>
            <Image src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/video.gif?raw=true" thumbnail />
          </Col>
        </Row>
        <Row style={{padding: "2vw 0"}}>
          <Col sm>
            <Image src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/annotate.gif?raw=true" thumbnail />
          </Col>
          <Col xs={8}>
            <h3>We recommend that teams video-conference throughout and share screens to have a cohesive experience.</h3>
          </Col>
        </Row>
      </div>
      </div>
      </div>
        <div align='right'>
          <div style={{width: "90%"}}>
            <div align='left' className="sectiontitle">
              <h1>Leaderboards</h1>
            </div>
            <div style={{margin: "0 2vw"}}>
              <Row align='center'>
                <Col sm>
                  <h2>ESCovid-19 Leaderboard</h2>
                  <Griddle data={dataesc19.slice(0,5)} plugins={[plugins.LocalPlugin]} sortProperties={sortProperties} style={{padding: "2vw"}}/>
                </Col>
                <Col sm>
                  <h2>ESCovid-20 Leaderboard</h2>
                  <Griddle data={dataesc20.slice(0,5)} plugins={[plugins.LocalPlugin]} sortProperties={sortProperties} style={{padding: "2vw"}}/>
                </Col>
                <Col sm>
                  <h2>Imaginary other Leaderboard</h2>
                  <Griddle data={dataesc20.slice(0,5)} plugins={[plugins.LocalPlugin]} sortProperties={sortProperties} style={{padding: "2vw"}}/>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      {/*<Leader track={false} game={"escovid-19"} team={"no team"} hints={0}/>*/}
      <div align='left'>
        <div style={{width: "90%"}}>
          <div align='left' className="sectiontitle">
            <h1>FAQs</h1>
          </div>
          <div align='left' style={{padding: "2vw"}} >
            <Accordion>
              <h3>Your questions, our answers.</h3>

              <h4 style={{paddingTop: "1vw"}}>Before</h4>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="-1" style={{backgroundColor: "#0fd145"}}>
                  Is it actually impossible to escape?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="-1">
                  <Card.Body>No! It may feel that way at times, but as you can see from our leaderboards, they have all be solved before!</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" style={{backgroundColor: "#0fd145"}}>
                  What difficulty level is right for me?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Novice: This is your first escape room, or you have younger or less tech-savvy group members.<br/>
                    Moderate: At least one person in your group has done an escape room before, and you have some experience with riddles in general.
                    <br/>Expert: You've played many-an-escape game before - one might even call you an escape artist. These may also require special skills or knowledge, though no one is disqualified as long as they're willing to learn!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0.5" style={{backgroundColor: "#0fd145"}}>
                  Can I play with more (or less) than the recommended number of players?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0.5">
                  <Card.Body>Yes! The recommendations are meant to be a guide, not an ultimatum.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" style={{backgroundColor: "#0fd145"}}>
                  How much does it cost?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                  <Card.Body>Everything on our site is free! If you'd like to support our work, you can donate here.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" style={{backgroundColor: "#0fd145"}}>
                  What happens if we get stuck?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="2">
                  <Card.Body>It is absolutely fine to get stuck once in a while - in fact it's expected. There are hint buttons along the way for this very purpose, and if you're still stuck, you can reach out to us personally.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <h4 style={{paddingTop: "1vw"}}>During & After</h4>


              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" style={{backgroundColor: "#0fd145"}}>
                  Where can I find the solutions?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="3">
                  <Card.Body>As a practice, we don't make the solutions available because we tend to believe in you! However, you can always reach out personally if you would like an explanation.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6" style={{backgroundColor: "#0fd145"}}>
                  I emailed you but got no response. What now?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="6">
                  <Card.Body>Feel free to send a follow-up email if it has been more than 24 hours. We do our best to respond to emails ASAP, but as this is a passion project, sometimes other responsibilities (or vacations!) take precedence.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4" style={{backgroundColor: "#0fd145"}}>
                  How will I know when new escape rooms are out?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="4">
                  <Card.Body>Join our email list and we will keep you up to date!</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5" style={{backgroundColor: "#0fd145"}}>
                  When will my time be added to the leaderboard?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="5">
                  <Card.Body>We try to update the leaderboard as results come in, but sometimes it will take a couple weeks.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <br/>
              <div>
                <Image src="https://images.squarespace-cdn.com/content/v1/5fb68a6facdf9a5fdefdeb3d/1606863642198-8GR30AJQTKL99CBTRS4L/ke17ZwdGBToddI8pDm48kABpwtc0gFnh3kdg-HNAm9dZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGkx8TKNhVYC3tTexUASpsrum-jO_YfaVHIydTtJlPDAyb8BodarTVrzIWCp72ioWw/showcase_cropped.gif" thumbnail />
              </div>
              <p>Don't see your question here? <a href="/contact">Contact us.</a></p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
