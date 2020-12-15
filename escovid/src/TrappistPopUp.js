import React, { Component } from "react";

export default class GliesePopUp extends Component {
    state = {
        seen: false,
        hover: false,
        text: "Click to learn about Gliese",
        b: "info about gliese b",
        c: "info about gliese c",
        ad: "info about gliese a and d"
    };


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

    togglePopAD = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.ad
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
                    <h3>Register!</h3>
                    <div className="scaling-svg-container" style={{paddingBottom: "50%"}}>
                        <svg className="scaling-svg" viewBox="0 0 1200 675"> {/* Needs auto
                         updating*/}
                            <image width="100%" height="100%" href="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/trappist_sys.jpg?raw=true"/>
                            <circle cx="1480" cy="1600" r="150" className="clickable-done" onMouseEnter={this.togglePopAD}/>
                            <circle cx="4170" cy="1630" r="250" className="clickable-done" onMouseEnter={this.togglePopB}/>
                            <circle cx="6040" cy="1700" r="300" className="clickable-done" onMouseEnter={this.togglePopC}/>
                            <circle cx="8310" cy="1590" r="180" className="clickable-done" onMouseEnter={this.togglePopAD}/>


                        </svg>
                    </div>
                    <div>
                        <h1>{this.state.text}</h1>
                    </div>
                </div>
            </div>
        );
    }
}