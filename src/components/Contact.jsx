import React from "react";
import GliesePopUp from "./GliesePopUp";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/gaudi.JPG?raw=true"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact Us</h1>
            <p>
              Email us at mlagerq@emory.edu and john_graves@brown.edu. We are happy to answer any questions!
            </p>
            <br/>
            <p>Tried one of our escape games? Fill out the feedback form here:</p><a href={"https://docs.google.com/forms/d/e/1FAIpQLSdRNn2uICAC4WlS4blWU4G07OpPJJU_M5NPN17GlNVfWP7Z2A/viewform"}>ESCovid</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
