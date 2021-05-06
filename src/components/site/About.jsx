import React from "react";
import {Navigation} from "../index";
import Headroom from "react-headroom";

function About() {
  return (
    <div className="about">
      <Headroom>
        <Navigation/>
      </Headroom>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/gaudi.JPG?raw=true"
              alt="Young woman and man in front of Gaudi building"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Hello! Or, as we Trappers like to say, .... . .-..! (iykyk)
              We humbly welcome you to our page. This escape game site was created by Megan (left) and John (right).
              Our first game, ESCovid, was made in June 2020 for the Governor's Institute of Vermont (GIV) mathematics program, and for a long time was hosted on Google forms and Tumblr.
              It has been such a journey (many lightyears, you might say) rebuilding it here, but we hope that this format leaves room for growth and greater creative control to keep innovating our puzzles!
            </p>
          </div>
        </div>
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <h1 class="font-weight-light">Mission</h1>
              <p>We believe in the power of escape games to engage challenge-craving minds and story-hungry souls (in other words: escape games == fun).
              We want this site to be accessible to ALL, which is why all the games are totally free. We are also working on adding transcripts for audio components, and exploring other ways to improve accessibility.
              Please don't hesitate to reach out if you have questions or suggestions on that front.</p>
            </div>
            <div className="col-lg-5">
              <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/logo.png?raw=true"
                  alt="to be replaced"
              />
            </div>
          </div>
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/map_about.PNG?raw=true"
                alt="Map with pins in VT, RI, GA"
            />
          </div>
          <div className="col-lg-7">
            <h1 className="font-weight-light">Our background</h1>
            <p>John is majoring in Computer Science and Applied Math at Brown University in Providence, RI (class of 2022). He dreams of designing an elaborate escape room for an anonymous villain and Megan being the President Elect. His actual dream is to be a statistical analyst for the Boston Red Sox.
              </p>
            <p>Megan is majoring in Neuroscience and Behavioral Biology at Emory University in Atlanta, GA (class of 2022). She dreams of eating muddy tofu (for the culture!) and being a real-life Among Us alien. Her actual dream is to drive a mobile therapy clinic / food truck cross-country.
              </p>
            <p>We met at math camp (shocking, I know) and love to travel! Our favorite analog games are Secret Hitler, Mao, and Settlers of Catan.</p>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <h1 className="font-weight-light">Special thanks to...</h1>
            <li><a href={'https://docs.google.com/document/d/10iOD7Wy_YU4NmkPU7ZH7YTrq11qJAANjZZ0PAotKhR8/preview#'}>Quarantine Games</a> - for linking our site and many other fun games.</li>
            <li>Erik (Megan's brother) - for designing a ssstellar logo.</li>
            <li>Anna, Jared, Alex, and Daniel - for being amazing puzzle testers :)</li>
            <li>Anna - for dressing up like princess Leia and blessing us with her screen acting skillz!</li>
            <li>Other escape games - like <a href={'https://ebonyriddle.com/?fbclid=IwAR3rjfx67wYdNghDg4lynoLX24a3hgWWJ7tSDu-RXk4xq7DH5PlIocZtVlk'}>EBONY</a> - for inspiration.</li>
            <li>GIV Math participants - for your enthusiasm and persistence, and for giving us a reason to make this.</li>
            <li>React.js and ReactBootstrap - for making this website easier to build.</li>
            <li>Google Images - we will work on more specific citations in the future lol</li>
            <li>Everyone who has taken the time to fill out the feedback form - we appreciate it!</li>
          </div>
          <div className="col-lg-5">
            <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/logo.png?raw=true"
                alt="to be replaced"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
