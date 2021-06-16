import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import KnockPopUp from "./KnockPopUp";
import TextPopUp from "./TextPopUp";
import {RemoteButton} from "./index";
import ReactAudioPlayer from "react-audio-player";
import knock from "./knocks.m4a"
import TextPop from "../game/textPop";




export default class Page3a extends Component {
    componentDidMount() {
        document.title = "Bachelor"
        if (this.props.curr_stage != 3) {
            this.props.stage(3)
        }
    }

    state = {
        knock_open: false,
        texts_open: false,
        note_open: false,
        morse_open: false,
        note: "https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/note.png?raw=true",
        morse: "https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/morse.png?raw=true",
    };


    notePop = () => {
        this.setState({
            note_open: !this.state.note_open
        });
    };

    morsePop = () => {
        this.setState({
            morse_open: !this.state.morse_open
        });
    };


    textsPop = () => {
        this.setState({
            texts_open: !this.state.texts_open
        });
    };

    knockPop = () => {
        this.setState({
            knock_open: !this.state.knock_open
        });
    };


    render() {
        return(
            <div style={{marginBottom: "10"}}>
                <body>
                <RemoteButton/>

                <div height="400">
                    {/*if state is true, do this pop-up*/}
                    {this.state.note_open ? <PopUp title="Secret Note" x="374" y="314" width="80%" image={this.state.note} padding="70%" toggle={this.notePop} /> : null}
                    {this.state.morse_open ? <PopUp title="Hmmmm..." x="1600" y="885" width="80%" image={this.state.morse} padding="50%" toggle={this.morsePop} /> : null}
                    {this.state.texts_open ? <TextPopUp toggle={this.textsPop} /> : null}
                    {this.state.knock_open ? <KnockPopUp toggle={this.knockPop} /> : null}

                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "68%"}}>
                    <svg className="scaling-svg" viewBox="0 0 3000 2000"> {/* Needs auto
                         updating*/}
                        <image width="100%" href="https://github.com/jgraves123/escovid2/blob/main/images/reality/bachelor.png?raw=true"/>
                        <rect x="1270" y="460" width="50" height="130" className="clickable-done" onClick={this.knockPop}/>
                        <rect x="2450" y="400" width="100" height="300" className="clickable-done" onClick={this.morsePop}/>
                        <circle cx="2790" cy="840" r="20" className="clickable-done" onClick={this.textsPop}/>
                        <polygon points="1930,380 1955,380 2000,542 1930,540" className="clickable-done" onClick={this.notePop}/>
                    </svg>
                </div>
                <TextPop title={"The bachelor really likes you, but..."} content={"...unfortunately, his opinion doesn't count for much in this new mash-up. He isn't supposed to have favorites, so you have to communicate covertly."}/>
                </body>
            </div>
        );
    }
}


