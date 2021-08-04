import React from "react";
import Leader from "../game/leaderboard";
import {Carousel, Navbar, Image, Container, Row, Col, Accordion, Card, Button} from 'react-bootstrap';
import Griddle, {plugins} from "griddle-react";
import {dataanon, dataesc19, dataesc20, sortProperties} from "./leaderdata";
import Headroom from "react-headroom";
import {Navigation} from "../index";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {Link} from "react-router-dom";


function Home() {
  return (
      <div>
        <Headroom>
          <Navigation/>
        </Headroom>

        {/*rgb(252, 200, 26, .7)*/}

    <div style={{width: "100%"}}>
          <div align={"center"} style={{marginTop: "20px"}}>
            <div style={{width: "90%"}}>
            <Carousel interval={10000} pause={"true"} style={{height: "100%"}}>
              <Carousel.Item align='center'>
                <div style={{width: "100%", height: "47.32vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/viper.gif?raw=true")', backgroundSize: "cover"}}>
                <div className="sideContent" style={{backgroundColor: "rgb(15, 209, 69, .5)"}}>
                  <div className="sideText" style={{color: "white"}}>
                    <h1 style={{color: "white"}}>Welcome</h1>
                    <br/>
                    <p>You can check in anytime you like, <br/>
                      but you can never leave...</p>
                  </div>
                </div>
                <div style={{width: "70%", height: "47.32vw", float: "left"}}>
                  {/*<img*/}
                  {/*    className="d-block w-100"*/}
                  {/*    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/viper-big.png?raw=true"*/}
                  {/*    alt="First slide" height="100%" style={{}}*/}
                  {/*/>*/}
                </div>
                </div>
              </Carousel.Item>
              <Carousel.Item align='center'>
                <div style={{width: "100%", height: "47.32vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/escovid.gif?raw=true")', backgroundSize: "cover"}}>
                <div className="sideContent" style={{backgroundColor: "rgb(15, 209, 69, .5)"}}>
                  <div className="sideText" style={{color: "white"}}>
                    <h1 style={{color: "white"}}><Link to="/escovid" style={{color: "white"}}>ESCovid</Link></h1>
                    <br/>
                    <p>Space + math + world crisis. <br/>What more do you need?</p>
                  </div>
                </div>
                <div style={{width: "70%", float: "left"}}>
                  {/*<img*/}
                  {/*    className="d-block w-100"*/}
                  {/*    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/escovid12.png?raw=true"*/}
                  {/*    alt="escovid"*/}
                  {/*/>*/}
                </div>
                </div>
              </Carousel.Item>
              <Carousel.Item style={{backgroundColor: "#0fd145"}}>
                <div style={{width: "100%", height: "47.32vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/anonymous.gif?raw=true")', backgroundSize: "cover"}}>
                  <div className="sideContent" style={{backgroundColor: "rgb(15, 209, 69, .5)"}}>
                    <div className="sideText">
                      <h1><Link to="/anon" style={{color: "white"}}>Anonymous Connections</Link></h1>
                      <br/>
                      <p>Who are they? Where did they come from? Click here to find out.</p>
                    </div>
                  </div>
                  <div style={{width: "70%", float: "left"}}>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item style={{backgroundColor: "#fcc81a"}}>
                <div style={{width: "100%", height: "47.32vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/reality.gif?raw=true")', backgroundSize: "cover"}}>
                <div className="sideContent" style={{backgroundColor: "rgb(6, 97, 32, .8)"}}>
                  <div className="sideText">
                    <h1><Link to="/reality" style={{color: "white"}}>Escaping Reality</Link></h1>
                    <br/>
                    <p>You are stuck in a reality TV Show. How will you escape?!</p>
                  </div>
                </div>
                <div style={{width: "70%", float: "left"}}>
                  {/*<img*/}
                  {/*    className="d-block w-100"*/}
                  {/*    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/viper-mp4.mp4?raw=true"*/}
                  {/*    alt="Dreamscape"*/}
                  {/*/>*/}
                </div>
                </div>
              </Carousel.Item>
              {/*<Carousel.Item style={{backgroundColor: "#0fd145"}}>*/}
              {/*  <div style={{width: "100%", height: "47.32vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/new-comic.gif?raw=true")', backgroundSize: "cover"}}>*/}
              {/*  <div className="sideContent" style={{backgroundColor: "rgb(15, 209, 69, .5)"}}>*/}
              {/*    <div className="sideText">*/}
              {/*      <h1>Coming Soon!</h1>*/}
              {/*      <br/>*/}
              {/*      <p>Wouldn't it be funny if were actually trapped in here?</p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*  <div style={{width: "70%", float: "left"}}>*/}
              {/*  </div>*/}
              {/*  </div>*/}
              {/*</Carousel.Item>*/}
            </Carousel>
            </div>
          </div>
      <div align='left'>
        <div style={{width: "90%"}}>
      <div align='left' className="sectiontitle">
        <h1>What is a virtual escape room?</h1>
        <h4>+Hover to read more+</h4>
      </div>
      <div align='left' style={{padding: "2vw"}} >
        {/*<h3>A sentence or two overview.</h3>*/}
        <Row style={{padding: "2vw 0"}}>
          <Col xs={6}>
            <Image src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/password.gif?raw=true" thumbnail />
          </Col>
          <Col xs={4}>
            <div className="container2">
              <h2 className="text center">A Story</h2>
              <div className="overlay">
                <div style={{padding: "2vw"}}>
                  <h3 className="overlay-text center">Navigate through a story in which you are the key actor(s).
                    Each stage will present new challenges to advancing.</h3>
                </div>
              </div>
            </div>
            </Col>
          <Col xs={2}/>
        </Row>
        <Row style={{padding: "2vw 0"}}>
          <Col xs={2}/>
          <Col xs={4}>
            <div className="container2">
              <h2 className="text center">Multimedia Clues</h2>
              <div className="overlay">
                <div style={{padding: "2vw"}}>
                  <h3 className="overlay-text center">Engage with multimedia clues and puzzles along the way.</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <Image src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/audio.gif?raw=true" thumbnail />
          </Col>
        </Row>
        <Row style={{padding: "2vw 0"}}>
          <Col xs={6}>
            <Image src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/annotate.gif?raw=true" thumbnail />
          </Col>
          <Col xs={4}>
            <div className="container2">
              <h2 className="text center">Virtual Teamwork</h2>
              <div className="overlay">
                <div style={{padding: "2vw"}}>
                  <h3 className="overlay-text center">We recommend that teams video-conference throughout and share screens to have a cohesive experience.</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={2}/>
        </Row>
      </div>
      </div>
        <div align='right'>
          <div style={{width: "90%"}}>
            <div align='left' className="sectiontitle">
              <h1>Outreach</h1>
            </div>
            <div align='center' style={{padding: "2vw"}} >
              {/*<h3>A sentence or two overview.</h3>*/}
              <div style={{display: "inline-block", marginRight: "4vw",
                width: "50%", height: "30vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/snake-eyes.png?raw=true")', backgroundSize: "cover"}}>
                <div style={{paddingLeft: "200", width: "100%", float: "left", height: "40vw", paddingTop: "5vw", overflow: "hidden", align: "center"}}>
                  <div style={{backgroundColor: "rgb(255,255,255, .5)", padding: "2vw", align: "center"}}>
                    <h1 style={{fontSize: "2vw"}}>Email Sign Up</h1>
                    <MailchimpSubscribe
                        url={"https://brown.us1.list-manage.com/subscribe/post?u=8c01bb38ebee3297a0d1b426e&amp;id=2b76c51e11"}
                        render={({ subscribe, status, message }) => (
                            <div className={"testing"}>
                              <MailchimpSubscribe url={"https://brown.us1.list-manage.com/subscribe/post?u=8c01bb38ebee3297a0d1b426e&amp;id=2b76c51e11"} onSubmitted={formData => subscribe(formData)} />
                              {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                              {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                              {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                            </div>
                        )}
                    />
                    <Link to="https://www.facebook.com/VIPEREscapeGames/?__cft__[0]=AZW6r2kwJlftt0gFsjclZPdmMSO5wa93cwN1hnksgD7rTE56kVeO4B_elw9so-IUS9pDpxA_kLuf_kW55pfpCmta7wA5mZ5hp9pJAF_47BF7CzDCRyl6GdS_Zc8e8MzD31JRqFQbU12c_NPt58eEbKoC&__tn__=H-R"  style={{color: "navy"}}><strong>Facebook Page</strong></Link>
                  </div>
                </div>
              </div>
              <div style={{display: "inline-block", marginLeft: "4vw", padding: "1vw",
                width: "30%", height: "30vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/snake-eyes.png?raw=true")', backgroundSize: "cover", verticalAlign: "top"}}>
                <div style={{backgroundColor: "rgb(255,255,255, .5)", padding: "1vw", align: "center"}}>
                  <h2 style={{fontSize: "2vw"}}>Support VIPER</h2>
                  <img src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/venmo.JPG?raw=true" width={"65%"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div align='left'>
          <div style={{width: "90%"}}>
            <div align='left' className="sectiontitle">
              <h1>Leaderboards</h1>
            </div>
            <div className="leaderboard-carousel" align="center">
            <Carousel interval={100000} pause={"hover"} style={{height: "100%", maxWidth: "1000px"}}>
              <Carousel.Item align='center'>
                <h2>ESCovid-19 Leaderboard</h2>
                <Griddle components={{Layout: ({ Table, Pagination, Filter, SettingsWrapper }) => (
                      <div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
                        <Filter/>
                        <Table />
                        <Pagination/>
                      </div>
                  )}}  data={dataesc19} plugins={[plugins.LocalPlugin]} sortProperties={sortProperties} style={{padding: "2vw"}}/>
              </Carousel.Item>
              <Carousel.Item align='center'>
                <h2>ESCovid-20 Leaderboard</h2>
                <Griddle components={{Layout: ({ Table, Pagination, Filter, SettingsWrapper }) => (
                      <div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
                        <Filter/>
                        <Table />
                        <Pagination/>
                      </div>
                  )}} data={dataesc20} plugins={[plugins.LocalPlugin]} sortProperties={sortProperties} style={{padding: "2vw"}}/>
              </Carousel.Item>
              <Carousel.Item align='center'>
                <h2>Anonymous Connections</h2>
                <Griddle components={{Layout: ({ Table, Pagination, Filter, SettingsWrapper }) => (
                      <div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
                        <Filter/>
                        <Table />
                        <Pagination/>
                      </div>
                  )}} data={dataanon} plugins={[plugins.LocalPlugin]} sortProperties={sortProperties} style={{padding: "2vw"}}/>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
        </div>
      {/*<Leader track={false} game={"escovid-19"} team={"no team"} hints={0}/>*/}
      <div align='right'>
        <div style={{width: "90%"}}>
          <div align='left' className="sectiontitle">
            <h1>FAQs</h1>
            <h4>+Click to expand+</h4>
          </div>
          <div align='left' style={{padding: "2vw"}} >
            <Accordion>
              <h3>Your questions, our answers.</h3>

              <h4 style={{paddingTop: "1vw"}}>Before</h4>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="-1" className="HomeAccordion">
                  Is it actually impossible to escape?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="-1">
                  <Card.Body>No! It may feel that way at times, but as you can see from our leaderboards, they have all be solved before!</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="HomeAccordion">
                  What difficulty level is right for me?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <strong>Novice:</strong> This is your first escape room, or you have younger or less tech-savvy group members.<br/>
                    <strong>Moderate:</strong> At least one person in your group has done an escape room before, and you have some experience with riddles in general.
                    <br/><strong>Expert:</strong> You've played many-an-escape game before - one might even call you an escape artist. These may also require special skills or knowledge, though no one is disqualified as long as they're willing to learn!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0.5" className="HomeAccordion">
                  Can I play with more (or less) than the recommended number of players?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0.5">
                  <Card.Body>Yes! The recommendations are meant to be a guide, not an ultimatum.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="HomeAccordion">
                  How much does it cost?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                  <Card.Body>Everything on our site is <strong>free!</strong> If you'd like to support our work, you can donate to our venmo <em>@VIPER-GAMES</em>.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="HomeAccordion">
                  What happens if we get stuck?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="2">
                  <Card.Body>It is absolutely fine to get stuck once in a while - in fact <i>it's expected.</i> There are <strong>hint buttons</strong> along the way for this very purpose, and if you're still stuck, you can reach out to us personally.</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion><br/>

              <h4 style={{paddingTop: "1vw"}}>During & After</h4>
            <Accordion>


              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" className="HomeAccordion">
                  Where can I find the solutions?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="3">
                  <Card.Body>As a practice, we don't make the solutions available because we tend to believe in you! However, you can always reach out personally if you would like an explanation.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6" className="HomeAccordion">
                  I emailed you but got no response. What now?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="6">
                  <Card.Body>Feel free to send a follow-up email if it has been more than 24 hours. We do our best to respond to emails ASAP, but as this is a passion project, sometimes other responsibilities (or vacations!) take precedence.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4" className="HomeAccordion">
                  How will I know when new escape rooms are out?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="4">
                  <Card.Body>Join our email list and we will keep you up to date!</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5" className="HomeAccordion">
                  When will my time be added to the official leaderboard?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="5">
                  <Card.Body>We try to update the leaderboard as results come in, but sometimes it will take a couple weeks.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <br/>
              <p>Don't see your question here? <a href="/contact">Contact us.</a></p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
      </div>

  );
}

export default Home;
