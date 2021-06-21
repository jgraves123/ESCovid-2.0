import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import SpeedPopUp from "./speedPopUp";
import ImmunityPopUp from "./immunityPopUp";
import TextPop from "../game/textPop";
import RemoteButton from "./remoteButton";
import {Link} from "react-router-dom";
import HintPop from "../game/HintPop";


//TO DO:
// password input box to go to council (new page)

export default class Page2a extends Component {
    componentDidMount() {
        document.title = "Survivor!";
        if (this.props.curr_stage !== 2) {
            this.props.stage(2)
        }
        let curr = localStorage.getItem("solved")
        if (curr == null) {
            localStorage.setItem("solved", false);
            curr = 0;
        }
    }

    state = {
        riddle: "https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/mapRiddle.png?raw=true",
        shift: "https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/shift.png?raw=true",
        map_open: false,
        shoe_open: false,
        count_map_open: false,
        coconut_open: false,
        coconut_solved: localStorage.getItem("solved")==="t",
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
        this.setState({
            coconut_solved: localStorage.getItem("solved")==="t"
        });
        console.log(this.state.coconut_solved);
        console.log(localStorage.getItem("solved"))
    };

    riddlePop = () => {
        this.setState({
            bamboo_open: !this.state.bamboo_open
        });
    };

    setHint = () => {
        this.setState({
            shoe_open: !this.state.shoe_open
        });
    };

    setHint2 = () => {
        this.setState({
            count_map_open: !this.state.count_map_open
        });
    };


    handleChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    check_pass = (event) => {
        event.preventDefault();
        this.temp = ("outwit" === this.state.password | "Outwit" === this.state.password)
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
                    {(this.state.coconut_open && this.state.coconut_solved) ? <PopUp title="Shift 5 and reverse order to speed outta here" x="1500" y="1510" width="80%" image={this.state.shift} toggle={this.speedPop} padding="60%"/> : null}
                    {(this.state.coconut_open && !this.state.coconut_solved) ? <SpeedPopUp toggle={this.speedPop} /> : null}
                    {this.state.bamboo_open ? <PopUp title="This could give you a leg up! Best to keep it a secret from your tribe." x="1574" y="1210" width="80%" image={this.state.riddle} padding="64%" toggle={this.riddlePop} /> : null}
                    {this.state.shoe_open ? <HintPop text="You found a bonus hint! Solve for the black cards in 4D set by figuring out what card is necessary to create a set along a straight line." marginTop="35vw" marginLeft="30vw" toggle={this.setHint} /> : null}
                    {this.state.count_map_open ? <PopUp title={"Counting Hint"} image={"https://docs.google.com/drawings/d/e/2PACX-1vTgCiA0sbOSUzNATA1kjnGJZfyM5twnllDI5hrmHVT1nkQwm9qmLrUxkiVQLLzfcUiu_1bG4MvWVXmF/pub?w=480&h=720"} x="480" y="720" padding="140%" width="90%" modal_w="45%" toggle={this.setHint2} /> : null}

                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "62%"}}>
                <svg className="scaling-svg" viewBox="0 0 3000 1821"> {/* Needs auto
                         updating*/}
                    <image width="100%" href="https://github.com/jgraves123/escovid2/blob/main/images/reality/basecamp.jpg?raw=true"/>
                    <circle cx="910" cy="520" r="30" className="clickable-done" onClick={this.riddlePop}/>
                    <circle cx="2050" cy="1090" r="45" className="clickable-done" onClick={this.speedPop}/>
                    <rect x="2515" y="1460" width="50" height="35" className="clickable-done" onClick={this.setHint}/>
                    <rect x="1950" y="1360" width="150" height="50" className="clickable-done" onClick={this.setHint2}/>
                    <polygon points="1035,1520 1360,1430 1672,1542 1280,1620" className="clickable-done" onClick={this.immunityPop}/>
                </svg>
                </div>
                {!this.state.finished ? <div align={"center"} style={{paddingBottom: "20px"}}>
                    <form id="path-answer" onSubmit={this.check_pass}>
                        <label width={"80%"}>
                            <input type="text" ref="val"
                                   placeholder={"Password (a real word)"}
                                   onChange={this.handleChange}
                                   style={{marginRight: 10, width: "100%"}}/>
                        </label>
                        <input type="submit" value="Onward!"
                               style={{marginLeft: 10, width: "10%"}}/>
                    </form>
                    <h6>***Your answer will be a real word***</h6>
                </div> :
                <div align={"center"} style={{paddingBottom: "20px"}}>
                    <p>Congrats, you won Survivor! Now, you'd better get out of here before they change their minds.</p>
                    <p>Next Channel: 5237</p>{/*<Link to="/reality/council">*/}
                    {/*    <button className="button"><h3>Continue to Tribal Council</h3></button>*/}
                    {/*</Link>*/}
                </div>}

                <TextPop title={"You find yourself on a remote island..."} content={"You seem to be in some sort of temporary shelter in the wooded area near a body of water. You're not alone - in fact, you're surrounded by people who smell like they haven't showered for days. Then you see the camera crew, and know - you haven't escaped the TV after all; you've just traded an oven for a campfire. This is Survivor."}/>
                </body>
            </div>
        );
    }
}

