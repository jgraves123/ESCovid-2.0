import React, {Component} from "react";
import "../index.css";
import "../game/posts.css";
import {Post} from "../game";
import Overlay from "../game/overlay";
import ReactPlayer from 'react-player';
import video from "./IMG-1332.mp4";
import Exit from "../game/exit";
import {Prompt} from 'react-router'

let rand = () => Math.floor(Math.random() * 20) - 10;

export default class Tumblr1 extends Component {

    componentDidMount() {
        document.title = "ESCovid: Last Step!"
        if (this.props.curr_stage != 1) {
            this.props.stage(1)
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
        this.temp = ("launch" === this.state.value)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        else {
            window.location.assign("/escovid/auth");
        }
        this.setState({
            value: ""
        });
    }

    render() {
                return (
                    <div>
                    <body align={"center"} className="bg" style={{backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/space/4.png?raw=true")'}}>
                    {/*<header style={{overflow: "hidden", zIndex: 0}}>*/}
                    {/*    <img width="100%" height="100%" src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/galaxy.jpg?raw=true"/>*/}
                    {/*</header>*/}
                    <div align={"center"}>
                        <div style={{margin: "30px"}}>
                            <ReactPlayer playing url={video} controls={true} style={{padding: "10px", backgroundColor: "#fd0e35"}}/>
                            <div style={{backgroundColor: "#fd0e35", width: "640px", padding: "10px"}}>
                                <h5>Subj: URGENT UPDATE -- From: MSNCTRL</h5>
                            </div>
                        </div>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>V</h1>
                        <div align={"center"} className={"middle"}>
                        {this.props.game_name === "escovid19" ?
                            <Post title={""} caption={"Someone seems to have left a few clues behind"}>
                                <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/clues_esc19.jpg?raw=true"/>
                            </Post> :
                                <img width="100%" style={{padding: "20px"}} src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/clue20.png?raw=true"/>
                        }
                        <form id="path-answer" onSubmit={this.check}>
                            <label>
                                <input type="text" placeholder="Password" onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                        <Post title={""} caption={"Promising news from one of our top researchers..."}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/gliese-intro.png?raw=true"/>
                        </Post>
                        <Post title={""} caption={"the wheels on the ship go round and round, round and round..."}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/cipher.jpg?raw=true"/>
                        </Post>
                        <Post title={""} caption={"travel far but read local :)"}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/newspaper.JPG?raw=true"/>
                        </Post>
                        <Post title={""} caption={"The orbital path model for the escape pod is in!! #thanksdesmos #srslyyoumayusedesmos"}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/path.PNG?raw=true"/>
                        </Post>
                        <Post title={"10 years into a long voyage..."} caption={""}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/tictactoe.PNG?raw=true"/>
                        </Post>
                        {this.props.game_name === "escovid20" ?
                            <div>
                                <Post title={""} caption={"Don't mind the letters just yet...they're A problem for future you, if you make it that far."}>
                                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/cards.png?raw=true"/>
                                </Post>
                                <Post title={""} caption={""}>
                                    <p style={{color: "white"}}>What has no beginning or end, never eats, but is always growing?</p>
                                </Post>
                                <Post title={""} caption={"Astronauts must not only be physically tough, but mentally sharp, too. Think you’re up to it?"}>
                                    <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/mod.png?raw=true"/>
                                </Post>
                            </div> :
                            null}
                    </div>
                    </div>
                    </body>
                    </div>
                )
        }
}