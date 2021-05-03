import React, {Component} from 'react';
import PopUp from "./PopUp";
import ReactDOM from 'react-dom';
import './xmas.css';
import {Link} from "react-router-dom";



export default class Page1 extends Component {

    constructor(props){
        super(props);
        document.title = "Christmas Escape Room!";
        if (this.props.timing) {
            this.props.stop(false)
        }
        if (this.props.curr_stage !== 0) {
            this.props.stage(0)
        }
    }




    render() {
        return(
            <div>
            </div>
        );
    }
}

