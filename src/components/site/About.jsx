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
              We also want this site to be accessible to ALL, which is why all the games are totally free. We are also working on adding transcripts for audio components, and exploring other ways to improve accessibility.
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
          <div className="col-lg-7">
            <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/map_about.PNG?raw=true"
                alt="Map with pins in VT, RI, GA"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Our background</h1>
            <p>We met at math camp (shocking!) and love to travel! We firmly believe that chocolate is the best food and our favorite analog games are Secret Hitler and Oh Hell.</p>
            <p>John is majoring in Computer Science and Applied Math at Brown University in Providence, RI (class of 2022). He dreams of designing an elaborate escape room for an anonymous villain and Megan being the President Elect. His actual dream is to be a statistical analyst for the Boston Red Sox.
              </p>
            <p>Megan is majoring in Neuroscience and Behavioral Biology at Emory University in Atlanta, GA (class of 2022). She dreams of eating muddy tofu (for the culture!) and being a real-life Among Us alien. Her actual dream is to drive a mobile therapy clinic / food truck cross-country.
              </p>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <h1 className="font-weight-light">Special thanks to...</h1>
            <li>Quarantine Games - for linking our site and many other fun games.</li>
            <li>Erik (Megan's brother) - for designing a ssstellar logo.</li>
            <li>Anna, Jared, Alex, and Daniel - for being amazing puzzle testers :)</li>
            <li>Other escape games - EBONY, ?? - for inspiration.</li>
            <li>GIV Math participants - for your enthusiasm and persistence, and for giving us a reason to make this.</li>
            <li>Everyone who has taken the time to fill out the feedback form - we appreciate it!</li>
            <p></p>
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
