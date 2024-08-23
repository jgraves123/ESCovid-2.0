import React, {Component} from "react";
import "../../index.css";
import "../posts.css";
import {Post} from "../../index";
import audio from "./Escape_1.mp3";
import ReactAudioPlayer from "react-audio-player";

export default class Tumblr2 extends Component{

    componentDidMount() {
        document.title = "Step 3"
        if (this.props.curr_stage != 2) {
            this.props.stage(2)
        }
    }

    state = {
        value: "",
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
            value: event.target.value
        });
    }

    check = (event) => {
        event.preventDefault();
        this.temp = ("merak" === this.state.value)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        else {
            window.location.assign("/escovid/final");
        }
        this.setState({
            value: ""
        });
    }

    render() {
        return (
            <body align={"center"} className={"bg"} style={{backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/space/2.jpg?raw=true")'}}>
            <div align={"center"}>
                <div align={"center"} className={"middle"}>
                <form id="path-answer" onSubmit={this.check}>
                    <label>
                        <input type="text" placeholder="Password" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <div style={{padding: "20px"}}>
                <ReactAudioPlayer src={audio} controls/>
                <li>If you cannot hear the audio, click <a href={'https://docs.google.com/document/d/1XlJ2Vn84SUlez2LFZd2pQSAU7JMGhH_zTBjskACm2WQ/edit?usp=sharing'}>here</a> for the script (otherwise, no cheating!!)</li>
                </div>
                <Post title={""} caption={""}>
                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/stargridpuzzle.jpg?raw=true"/>
                </Post>
                <Post title={""} caption={""}>
                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/cards.png?raw=true"/>
                </Post>
                <Post title={""} caption={""}>
                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/constellations.jpg?raw=true"/>
                </Post>
                </div>
            </div>
            </body>
        )
    }
}