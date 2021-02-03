import React, {Component} from "react";
import "../index.css";
import "../game/posts.css";
import {Post} from "../game";

export default class Tumblr1 extends Component{

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
                    <div align={"center"}>
                        {this.props.game_name == "escovid19" ?
                            <div>
                            <Post title={"Title"} caption={"Caption"}>
                                <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/clues_esc19.jpg?raw=true"/>
                            </Post>
                                <h1>Password:</h1>
                            </div>
                        : <h1> ESCovid20</h1>}
                        <form id="path-answer" onSubmit={this.check}>
                            <label>
                                <input type="text" placeholder="Password" onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                        <Post title={"Title"} caption={"Caption"}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/gliese-intro.png?raw=true"/>
                        </Post>
                        <Post title={"Title"} caption={"Caption"}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/cipher.jpg?raw=true"/>
                        </Post>
                        <Post title={"Title"} caption={"Caption"}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/newspaper.JPG?raw=true"/>
                        </Post>
                        <Post title={"Title"} caption={"Caption"}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/path%20.PNG?raw=true"/>
                        </Post>
                        <Post title={"Title"} caption={"Caption"}>
                            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/mod.JPG?raw=true"/>
                        </Post>
                    </div>
                )
        }
}