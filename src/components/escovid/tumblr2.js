import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../index.css";
import "../game/posts.css";
import emailjs from 'emailjs-com';
import {Post} from "../game";
import audio from "./Escape_1.mp3";
import ReactAudioPlayer from "react-audio-player";

export default class Tumblr2 extends Component{

    componentDidMount() {
        document.title = "ESCovid: Last Step!"
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
            <body align={"center"} className={"bg"} style={{backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/space/2.png?raw=true")'}}>
            <div align={"center"} style={{paddingTop: "10vw", marginBottom: 10}}>
                <h1 style={{color: "white"}}>Password:</h1>
                <form id="path-answer" onSubmit={this.check}>
                    <label>
                        <input type="text" placeholder="Password" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <div style={{padding: "20px"}}>
                <ReactAudioPlayer src={audio} controls/>
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
            </body>
        )
    }
}