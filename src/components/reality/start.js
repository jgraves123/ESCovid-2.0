import React, {Component} from 'react';
import './xmas.css';
import {Link} from "react-router-dom";
import RemoteButton from "./remoteButton";
import PopUp from "../game/PopUp";
import Password from "../game/password";
import Continue from "../game/continueButton";
import Remote from "./remote";



export default class Start extends Component {

    componentDidMount() {
        document.title = "New Reality"
        if (!this.props.counting) {
            this.props.start(true)
        }
        if (this.props.curr_stage !== 0) {
            this.props.stage(0)
        }
    }

    state = {
        tv_open: false,
        text: "https://raw.githubusercontent.com/jgraves123/escovid2/reality/images/reality/textMe.png?raw=true"
    };


    notePop = () => {
        this.setState({
            tv_open: !this.state.tv_open
        });
    };




    render() {
        return(
            <div>
                    <body align={"center"}>
                    {this.state.tv_open ? <Remote toggle={this.notePop}/> : null}
                    <div className="scaling-svg-container" style={{paddingBottom: "45%"}}>
                        <svg className="scaling-svg" viewBox="0 0 1866 800"> {/* Needs auto
                         updating*/}
                            <image width="100%" href="https://raw.githubusercontent.com/jgraves123/escovid2/reality/images/reality/livingRoom.png?raw=true"/>
                            <rect x="950" y="250" width="350" height="190" className="clickable-done" onClick={this.notePop}/>
                        </svg>
                    </div>
                    <p>You want to go to math camp but you don't think you're good enough so you decided to watch television instead</p>
                    </body>
            </div>
        );
    }
}

