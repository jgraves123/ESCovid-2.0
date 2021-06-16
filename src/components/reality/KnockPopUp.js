import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import knock from "./knocks.m4a";
import {Post} from "../game";

export default class KnockPopUp extends Component {
    state = {
        location: "",
        time: "",
        correct_pass: false,
    };

    handleClick = () => {
        this.props.toggle();
    };

    handleChangeTime = (event) => {
        this.setState({
            time: event.target.value
        });
    }

    handleChangeLocation = (event) => {
        this.setState({
            location: event.target.value
        });
    }



    check_pass = (event) => {
        event.preventDefault();
        this.temp = ("stage" === this.state.location || "Stage" === this.state.location) && (this.state.time === "23:34")
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            correct_pass: this.temp,
        });
    }


    render() {
        return (
            <div className="modal2">
                <div className="modal_content2">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                    {!this.state.correct_pass ?

                        <div align={"center"}>
                            <h2 align="center">Do you hear that?</h2>
                            <ReactAudioPlayer src={knock} controls/>
                            <h3>You follow the noise and sneak outside... But there is no one to be
                                found.</h3>
                            <form id="path-answer" onSubmit={this.check_pass}>
                                <label width={"80%"}>
                                    <input type="text" ref="val"
                                           placeholder={"Where do you want to go?"}
                                           onChange={this.handleChangeLocation}
                                           style={{marginRight: 10, width: "100%"}}/>
                                    <br/>
                                    <input type="text" ref="val"
                                           placeholder={"At what time?"}
                                           onChange={this.handleChangeTime}
                                           style={{marginRight: 10, width: "100%"}}/>
                                </label>
                                <br/>
                                <input type="submit" value="Submit"
                                       style={{marginLeft: 10, width: "20%"}}/>
                            </form>
                        </div> :
                        <div align={"center"}>
                            <h2>Bachelor Private Meet Up</h2>
                            <p>Shh, don't be too loud we don't have much time! I really like you, but I've been watching you in the Talent competitions and you don't stand a chance. The only way for you to win is to rig the competition. The judges buzzers are connected to a circuit board back stage, and I think you should try to adjust the power so that none of them work when you are about to preform. Then none of them can buzz you! I found this key to help you figure out the circuits but you'll have to figure this out on your own! Just try to turn off power to all 4 buzzers at the same time!</p>
                            <p>*** He gives you a kiss on the cheek and sneaks away ***</p>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/escovid2/reality/images/reality/table.png?raw=true"/>
                        </div>
                    }
                </div>
            </div>
        );
    }
}