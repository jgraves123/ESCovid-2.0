import React, {Component} from 'react';
import './xmas.css';
import {RemoteButton} from "./index";




export default class Page4 extends Component {

    componentDidMount() {
        document.title = "ESCovid: Last Step!"
        if (this.props.curr_stage != 4) {
            this.props.stage(4)
        }
    }






    render() {
        return(
            <div>
                <RemoteButton/>
                Sofa
            </div>
        );
    }
}

