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
            <div align={"center"}>
                <h1>Password:</h1>
                <form id="path-answer" onSubmit={this.check}>
                    <label>
                        <input type="text" placeholder="Password" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <ReactAudioPlayer src={audio} autoPlay="false" controls/>
                <Post title={"Title"} caption={"Caption"}>
                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/stargridpuzzle.jpg?raw=true"/>
                </Post>
                <Post title={"Title"} caption={"Caption"}>
                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/card.png?raw=true"/>
                </Post>
                <Post title={"Title"} caption={"Caption"}>
                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/constellations.jpg?raw=true"/>
                </Post>
                <Post title={"Title"} caption={"Caption"}>
                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/path.PNG?raw=true"/>
                </Post>
                <Post title={"Title"} caption={"Caption"}>
                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/tictactoe.PNG?raw=true"/>
                </Post>
                {this.props.game_name == "escovid20" ?
                    <div>
                        <Post title={"Title"} caption={"Caption"}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/mod.JPG?raw=true"/>
                        </Post>
                        <Post title={"Title"} caption={"Caption"}>
                            <p style={{color: "white"}}>riddle</p>
                        </Post>
                    </div> :
                    null}
            </div>
        )
    }
}