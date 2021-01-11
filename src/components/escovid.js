import React, {Component, Fragment} from 'react';
import "./index.css";
import "./posts.css";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
import Post from "./post";

function Instructions(){
    return(
        <div align="center">
            <h1>Instructions...</h1>
            <Link to="/escovid/gform">
                <button className="button"><h3>Begin ESCovid-19</h3></button>
            </Link>
            <Link to="/escovid/gform">
                <button className="button"><h3>Begin ESCovid-20</h3></button>
            </Link>
        </div>
    )
}
function Gform(props){
    return(
        <div align="center">
            <h1>Google forms page</h1>
            <Link to="/escovid/tumblr">
                <button className="button"><h3>Continue</h3></button>
            </Link>
        </div>
    )
}

class Tumblr extends Component{

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
        if (this.props.phase === 1){
            if (this.props.level === 19){
                return (
                    <div>
                        <h1>ESCovid-19 Tumblr1</h1>
                                <form id="path-answer" onSubmit={this.check}>
                                    <label>
                                        <input type="text" placeholder="Password" onChange={this.handleChange} />
                                    </label>
                                    <input type="submit" value="Submit"/>
                                </form>
                    </div>
                )
            }
            else if (this.props.level === 20){
                return (
                    <div>
                        <h1>ESCovid-20 Tumblr1</h1>
                        <Link to="/escovid/auth">
                            <button className="button"><h3>Continue</h3></button>
                        </Link>
                    </div>
                )
            }
        }
        if (this.props.level === 19){
            return (
                <div>
                    <h1>ESCovid-19 Tumblr Auth</h1>
                    <Link to="/escovid/final">
                        <button className="button"><h3>Continue</h3></button>
                    </Link>
                </div>
            )
        }
        else if (this.props.level === 20){
            return (
                <div>
                    <h1>ESCovid-20 Tumblr Auth</h1>
                    <Link to="/escovid/final">
                        <button className="button"><h3>Continue</h3></button>
                    </Link>
                </div>
            )
        }
    }
    }








class Escovid extends Component {

    render() { //specific posts render more generic post structure
        if (this.props.page === "start"){
            return (
                <div><Instructions/></div>
            )
        }
        else if (this.props.page === "gform"){
            return (
                <div>
                    <Gform/>
                </div>
            )
        }
        else if (this.props.page === "tumblr"){
            return (
                <div>
                    <Tumblr level={this.props.level} phase={this.props.phase}/>
                </div>
            )
        } else if (this.props.page === "final"){
            return(
                <div align="center">
                    <Link to="/escovid/final">
                        <button className="button"><h3>final stage</h3></button>
                    </Link>
                </div>
            )
        }
        else{
            return (
                <div>
                    <Post title={"Title"} caption={"Caption"}>
                        <p>Additional content is added here</p>
                    </Post>
                    <Post title={"Title2"} caption={"Caption2"}>
                        <div align="center">
                            <ReactPlayer url='https://www.youtube.com/watch?v=fhYMh6KTJMQ' playing="true" loop="true" volume="null" muted="true"/>
                        </div>
                    </Post>
                </div>
            );
        }
    }
}

export default Escovid;