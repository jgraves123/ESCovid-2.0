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
                <body align={"center"} style={{backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/space/2.png?raw=true")', minHeight: "700px"}}>
                <RemoteButton/>
                Sofa
                </body> : <h1>Rebooting ...</h1> }
            </div>
        );
    }
}

