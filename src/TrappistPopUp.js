import React, { Component } from "react";

export default class TrappistPopUp extends Component {
    state = {
        seen: false,
        hover: false,
        text: "Click to learn about Gliese",
        e: "info about trappist e",
        fg: "info about trappist f and g",
        cdh: "info about trappist c, d and h",
        b: "info about trappist b"
    };


    togglePopE = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.e
        });
    };

    togglePopFG = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.fg
        });
    };

    togglePopCDH = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.cdh
        });
    };

    togglePopB = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.b
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
                    <div className="scaling-svg-container" style={{paddingBottom: "45%"}}>
                        <svg className="scaling-svg" viewBox="0 0 1190 554"> {/* Needs auto
                         updating*/}
                            <image width="100%" height="100%" href="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/trappist_sys.jpg?raw=true"/>
                            <circle cx="130" cy="335" r="75" className="clickable-done" onMouseEnter={this.togglePopB}/>
                            <circle cx="295" cy="335" r="70" className="clickable-done" onMouseEnter={this.togglePopCDH}/>
                            <circle cx="465" cy="335" r="53" className="clickable-done" onMouseEnter={this.togglePopCDH}/>
                            <circle cx="630" cy="335" r="62" className="clickable-done" onMouseEnter={this.togglePopE}/>
                            <circle cx="798" cy="334" r="70" className="clickable-done" onMouseEnter={this.togglePopFG}/>
                            <circle cx="964" cy="333" r="76" className="clickable-done" onMouseEnter={this.togglePopFG}/>
                            <circle cx="1132" cy="333" r="50" className="clickable-done" onMouseEnter={this.togglePopCDH}/>


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