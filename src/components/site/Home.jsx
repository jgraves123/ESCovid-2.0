import React from "react";
import {Carousel, Navbar, Image} from 'react-bootstrap'

function Home() {
  localStorage.clear()
  return (
    <div className="home">
      {/*<Navbar className={"navbar navbar-dark bg-primary"} expand="lg" style={{paddingBottom: "50px"}}/>*/}
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <Carousel>
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
          <div class="col-lg-5">
            <div align='center'>
                <Image className="d-block w-50"
                       src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/snake.png?raw=true"
                       alt="Third slide" roundedCircle />
            </div>
            <h1 className="font-weight-normal"><span style={{color: "#ed6a5a"}}>V</span>irtually <span
                style={{color: "#ed6a5a"}}>I</span>m<span style={{color: "#ed6a5a"}}>P</span>ossible <span
                style={{color: "#ed6a5a"}}>E</span>scape <span style={{color: "#ed6a5a"}}>R</span>ooms</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
