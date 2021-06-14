import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import SpeedPopUp from "./speedPopUp";
import ImmunityPopUp from "./immunityPopUp";
import TextPop from "../game/textPop";
import RemoteButton from "./remoteButton";


//TO DO:
// finish Krypto (speedPopUp)
// click something for riddle for idol search
// password input box to go to council (new page)

export default class Page2 extends Component {
    componentDidMount() {
        document.title = "ESCovid: Last Step!"
        if (this.props.curr_stage != 1) {
            this.props.stage(1)
        }
    }

    state = {
        map_open: false,
        coconut_open: false,
        pass: "",
        computer: false,
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

    render() {
        return(
            <div style={{marginBottom: "10"}}>
                <body>
                <RemoteButton/>

                <div height="400">
                    {/*if state is true, do this pop-up*/}
                    {this.state.map_open ? <ImmunityPopUp toggle={this.immunityPop} /> : null}
                    {this.state.coconut_open ? <SpeedPopUp toggle={this.speedPop} /> : null}

                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "65%"}}>
                <svg className="scaling-svg" viewBox="0 0 3000 1821"> {/* Needs auto
                         updating*/}
                    <image width="100%" href="https://github.com/jgraves123/escovid2/blob/reality/images/reality/basecamp.jpg?raw=true"/>
                    <circle cx="2050" cy="1090" r="45" className="clickable-done" onClick={this.speedPop}/>
                    <polygon points="1035,1520 1360,1430 1672,1542 1280,1620" className="clickable-done" onClick={this.immunityPop}/>
                </svg>
                </div>

                <TextPop title={"You find yourself on a remote island..."} content={"You seem to be in some sort of temporary shelter in the wooded area near a body of water. You're not alone - in fact, you're surrounded by people who smell like they haven't showered for days. Then you see the camera crew, and know - you haven't escaped the TV after all; you've just traded an oven for a campfire. This is Survivor."}/>

                </body>
            </div>
        );
    }
}

