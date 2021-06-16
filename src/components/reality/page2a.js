import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import SpeedPopUp from "./speedPopUp";
import ImmunityPopUp from "./immunityPopUp";
import TextPop from "../game/textPop";
import RemoteButton from "./remoteButton";
import {Link} from "react-router-dom";


//TO DO:
// password input box to go to council (new page)

export default class Page2a extends Component {
    componentDidMount() {
        document.title = "Survivor!"
    }

    state = {
        riddle: "https://github.com/jgraves123/escovid2/blob/reality/images/reality/survivor/mapRiddle.png?raw=true",
        map_open: false,
        coconut_open: false,
        pass: "",
        bamboo_open: false,
        password: "",
        finished: false,
    };

    immunityPop = () => {
        this.setState({
            map_open: !this.state.map_open
        });
    };

    speedPop = () => {
        this.setState({
            coconut_open: !this.state.coconut_open
        });
    };

    riddlePop = () => {
        this.setState({
            bamboo_open: !this.state.bamboo_open
        });
    };

    handleChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }



    check_pass = (event) => {
        event.preventDefault();
        this.temp = ("outwit" === this.state.password)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            finished: this.temp,
        });
    }


    render() {
        return(
            <div style={{marginBottom: "10"}}>
                <body>
                <RemoteButton/>

                <div height="400">
                    {/*if state is true, do this pop-up*/}
                    {this.state.map_open ? <ImmunityPopUp toggle={this.immunityPop} /> : null}
                    {this.state.coconut_open ? <SpeedPopUp toggle={this.speedPop} /> : null}
                    {this.state.bamboo_open ? <PopUp title="This could give you a leg up! Best to keep it a secret from your tribe." x="1574" y="1210" width="80%" image={this.state.riddle} padding="64%" toggle={this.riddlePop} /> : null}
                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "62%"}}>
                <svg className="scaling-svg" viewBox="0 0 3000 1821"> {/* Needs auto
                         updating*/}
                    <image width="100%" href="https://github.com/jgraves123/escovid2/blob/reality/images/reality/basecamp.jpg?raw=true"/>
                    <circle cx="910" cy="520" r="20" className="clickable-done" onClick={this.riddlePop}/>
                    <circle cx="2050" cy="1090" r="45" className="clickable-done" onClick={this.speedPop}/>
                    <polygon points="1035,1520 1360,1430 1672,1542 1280,1620" className="clickable-done" onClick={this.immunityPop}/>
                </svg>
                </div>
                {!this.state.finished ? <div align={"center"} style={{paddingBottom: "20px"}}>
                    <form id="path-answer" onSubmit={this.check_pass}>
                        <label width={"80%"}>
                            <input type="text" ref="val"
                                   placeholder={"Decoded Password"}
                                   onChange={this.handleChange}
                                   style={{marginRight: 10, width: "100%"}}/>
                        </label>
                        <input type="submit" value="Submit"
                               style={{marginLeft: 10, width: "10%"}}/>
                    </form>
                </div> :
                <div align={"center"} style={{paddingBottom: "20px"}}>
                    <Link to="/reality/council">
                        <button className="button"><h3>Continue to Tribal Council</h3></button>
                    </Link>
                </div>}

                <TextPop title={"You find yourself on a remote island..."} content={"You seem to be in some sort of temporary shelter in the wooded area near a body of water. You're not alone - in fact, you're surrounded by people who smell like they haven't showered for days. Then you see the camera crew, and know - you haven't escaped the TV after all; you've just traded an oven for a campfire. This is Survivor."}/>
                </body>
            </div>
        );
    }
}

