import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import ReactDOM from 'react-dom';
import './xmas.css';
import {Link} from "react-router-dom";
import SpeedPopUp from "./speedPopUp";
import CarouselPopUp from "./CarouselPopUp";
import PhonePopUp from "./PhonePopUp";
import TextPop from "../game/textPop";
import RemoteButton from "./remoteButton";




export default class Page2 extends Component {
    componentDidMount() {
        document.title = "ESCovid: Last Step!"
        if (this.props.curr_stage != 1) {
            this.props.stage(1)
        }
    }

    state = {
        cs_pass_open: false,
        comp_open: false,
        map: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/map.jpeg?raw=true",
        cs_pass: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/password.png?raw=true",
        pass: "",
        computer: false,
    };


    csPassPop = () => {
        this.setState({
            cs_pass_open: !this.state.cs_pass_open
        });
    };

    mapPop = () => {
        this.setState({
            comp_open: !this.state.comp_open
        });
    };

    render() {
        return(
            <div style={{marginBottom: "10"}}>
                <body>
                <RemoteButton/>

                <div height="400">
                    {/*if state is true, do this pop-up*/}
                    {this.state.map_open ? <PopUp title="Highways" x="6500" y="4000" width="100%" image={this.state.map} padding="62%" toggle={this.mapPop} /> : null}
                    {this.state.cs_pass_open ? <PopUp title="Computer Password" x="718" y="644" width="80%" image={this.state.cs_pass} padding="75%" toggle={this.csPassPop} /> : null}
                    {this.state.cell_open ? <PhonePopUp toggle={this.cellPop} /> : null}
                    {this.state.comp_open ? <SpeedPopUp toggle={this.mapPop} /> : null}

                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "65%"}}>
                <svg className="scaling-svg" viewBox="0 0 3000 1821"> {/* Needs auto
                         updating*/}
                    <image width="100%" href="https://github.com/jgraves123/escovid2/blob/reality/images/reality/basecamp.jpg?raw=true"/>
                    <circle cx="2050" cy="1090" r="45" className="clickable-done" onClick={this.mapPop}/>
                    <polygon points="1035,1520 1360,1430 1672,1542 1280,1620" className="clickable-done" onClick={this.mapPop}/>
                </svg>
                </div>

                <TextPop title={"You find yourself on a remote island..."} content={"You seem to be in some sort of temporary shelter in the wooded area near a body of water. You're not alone - in fact, you're surrounded by people who smell like they haven't showered for days. Then you see the camera crew, and know - you haven't escaped the TV after all; you've just traded an oven for a campfire. This is Survivor."}/>

                </body>
            </div>
        );
    }
}

