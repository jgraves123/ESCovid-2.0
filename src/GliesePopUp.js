import React, { Component } from "react";

export default class GliesePopUp extends Component {
    state = {
        seen: false,
        hover: false,
        text: "Hover over planets to learn more about them.",
        b: "Gliese 876 b is around twice the mass of Jupiter and completes an orbit in 61 days." +
            " Because of its size there is a high risk of it being totally gaseous and lacking a" +
            " solid surface. There is also potential that a moon surrounding the planets could" +
            " be habitable though, giving the planet an estimated 20% chance of being habitable.",
        c: "Gliese 876 c is similarly in the habitable zone but has similar risks to Gliese 876" +
            " b given its size. Scientists estimate this planet has roughly a 15% chance of" +
            " being habitable.",
        de: "Gliese 876 a and d are not in the habitable zone and have negligible chances of" +
            " being habitable."
    };

// <p>Gliese 876 is one of the closest known stars to possess a planetary system. Located 15 lightyears away, it has at least four orbiting planets, two of which are in the habitable zone. </p>
//
// <p>Gliese 876 b is around twice the mass of Jupiter and completes an orbit in 61 days. Because of its size there is a high risk of it being totally gaseous and lacking a solid surface. There is also potential that a moon surrounding the planets could be habitable.
// </p><p>
// As a fall back plan Gliese 876 c is similarly in the habitable zone but has similar risks to Gliese 876 b given its size. We estimate that each planet has a 15% of being habitable.
//


togglePopB = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.b
        });
    };

    togglePopC = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.c
        });
    };

    togglePopDE = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.de
        });
    };



    toggleHoverPop = () => {
        console.log("I'm here")
        this.setState({
            hover: !this.state.hover
        });
    };

    handleClick = () => {
        this.props.toggle();
    };



    render() {
        return (
            <div className="modal">
                <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
                    <h2 align="center" className="greytext">Gliese 876</h2>
                    <p align="center" className="popUpP">Gliese 876 is one of the closest known stars to possess a planetary system. Located 15 lightyears away, it has at least four orbiting planets, two of which are in the habitable zone.</p>
                    <div className="scaling-svg-container" style={{paddingBottom: "31%"}}>
                        <svg className="scaling-svg" viewBox="0 0 8830 2884"> {/* Needs auto
                         updating*/}
                            <image width="100%" height="100%" href="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/gliese_sys.png?raw=true"/>
                            <circle cx="1480" cy="1600" r="150" className="clickable-done" onMouseEnter={this.togglePopDE}/>
                            <circle cx="4170" cy="1630" r="250" className="clickable-done" onMouseEnter={this.togglePopC}/>
                            <circle cx="6040" cy="1700" r="300" className="clickable-done" onMouseEnter={this.togglePopB}/>
                            <circle cx="8310" cy="1590" r="180" className="clickable-done" onMouseEnter={this.togglePopDE}/>


                        </svg>
                    </div>
                    <div>
                        <h3 align="center">{this.state.text}</h3>
                    </div>
                </div>
            </div>
        );
    }
}