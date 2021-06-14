import React, {Component} from 'react';
import './xmas.css';
import {RemoteButton} from "./index";
import "../game/posts.css";
import "../index.css";





export default class Page4 extends Component {

    componentDidMount() {
        document.title = "ESCovid: Last Step!"
        if (this.props.curr_stage != 4) {
            this.props.stage(4)
        }
        setTimeout(() => this.setState({sofa: true}), 500);
    }

    state = {
        sofa: false,
    };





    render() {
        return(
            <div>
                {this.state.sofa ?
                <body align={"center"}>
                <RemoteButton/>
                <div className="scaling-svg-container" style={{paddingBottom: "45%"}}>
                    <svg className="scaling-svg" viewBox="0 0 1866 800"> {/* Needs auto
                         updating*/}
                        <image width="100%" href="https://raw.githubusercontent.com/jgraves123/escovid2/reality/images/reality/livingRoom.png?raw=true"/>
                        <rect x="870" y="645" width="50" height="25" className="clickable-done" onClick={this.picsPop}/>
                    </svg>
                </div>
                <p>You've been ejected from the television...</p>
                </body> : <h1>Rebooting ...</h1> }
            </div>
        );
    }
}

