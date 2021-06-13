import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import CompPopUp from "./compPopUp";
import CarouselPopUp from "./CarouselPopUp";
import PhonePopUp from "./PhonePopUp";
import Password from "../game/password";
import Continue from "../game/continueButton";
import {RemoteButton} from "./index";




export default class Page3a extends Component {
    componentDidMount() {
        document.title = "ESCovid: Last Step!"
        if (this.props.curr_stage != 2) {
            this.props.stage(2)
        }
    }






    render() {
        return(
            <div>
                <RemoteButton/>
                Bachelor page goes here
            </div>
        );
    }
}

