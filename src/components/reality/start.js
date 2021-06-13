import React, {Component} from 'react';
import './xmas.css';
import {Link} from "react-router-dom";
import RemoteButton from "./remoteButton";



export default class Start extends Component {

    constructor(props){
        super(props);
        document.title = "Christmas Escape Room!";
        if (!this.props.counting) {
            this.props.start(true)
        }
        if (this.props.curr_stage !== 0) {
            this.props.stage(0)
        }
    }





    render() {
        return(
            <div>
                <body>
                <RemoteButton/>
                </body>
            </div>
        );
    }
}

