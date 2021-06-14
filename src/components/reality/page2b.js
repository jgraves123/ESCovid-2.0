import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import TextPop from "../game/textPop";
import RemoteButton from "./remoteButton";

//TO DO:
// instructions
// keyboard task
// next channel

export default class Page2b extends Component {
    componentDidMount() {
        document.title = "Council!"
    }

    state = {
        speech_open: false
    };

    speechPop = () => {
        this.setState({
            speech_open: !this.state.speech_open
        });
    };


    render() {
        return(
            <div style={{marginBottom: "10"}}>
                <body>
                <RemoteButton/>

                <div height="400">
                    {/*if state is true, do this pop-up*/}
                    {this.state.speech_open ? <PopUp toggle={this.speechPop} /> : null}
                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "65%"}}>
                <svg className="scaling-svg" viewBox="0 0 3000 1821"> {/* Needs auto
                         updating*/}
                         <image width="100%" href="https://raw.githubusercontent.com/jgraves123/escovid2/reality/images/reality/survivor/council.jpg?raw=true"/>
                </svg>
                </div>

                <TextPop title={"Go before tribal council..."} content={"You've made it to the final three. Now, it is up to the council (your previous competitors) to decide who deserves to win. Can you convince them with an eloquent speech? The pressure's on, and so is the timer."}/>

                </body>
            </div>
        );
    }
}

