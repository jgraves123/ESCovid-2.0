import React from "react";
import {Navigation} from "../index";
import Headroom from "react-headroom";

function Contact() {
  return (
    <div className="contact">
      <Headroom>
        <Navigation/>
      </Headroom>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/instrumentpanel.png?raw=true"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"><strong>Contact Us</strong></h1>
            <p>
              Email us at <strong>viperescapegames@gmail.com</strong>. We are happy to answer any questions!
            </p>
            <p>Tried one of our escape games? Fill out the feedback form here: <a href={"https://docs.google.com/forms/d/e/1FAIpQLSdORxBBH4uy6OKIPYm7cu4sD9XbqbibUWIMciLRUI_k7mxc1g/viewform?usp=sf_link"}>Form</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
