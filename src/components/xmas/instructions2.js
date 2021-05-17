import React, {Component} from "react";
import {Carousel, Alert} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../index.css";
import "../game/posts.css";
import Exit from "../game/exit";

export default class Instructions2 extends Component{

    componentDidMount() {
        if (localStorage.getItem("seconds") !== null) {
            window.location.assign("/rooms");
        }
    }

    state = {
        value: "",
        check: false,
        showAlert: this.props.name != null,
        showFailure: false,
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
            value: event.target.value
        });
    }

    handleCheck = (event) => {
        console.log(event)
        this.setState({
            check: event.target.checked
        })
    }

    changeName = () => {
        console.log("i didn't press it");
        this.props.gameName("anon", 3)
    }

    check = (event) => {
        event.preventDefault();
        if (this.state.value === "") {
            this.setState({
                showFailure: true
            });
        }
        else {
            this.props.setName(this.state.value, this.state.check)
        }
    }

    render(){
        return(
            <div align="center" style={{backgroundColor: "#FDE38C", paddingBottom: "10px"}}>
                <h1>Welcome to Anonymous Connections</h1>
                <h2>The Mystery of a Strange Email and a Hidden Identity</h2>
                <div className="content-section container" align="left" style={{width: "60%"}}>
                    <h3>Overview</h3>
                    <div className = "para">
                        <p><strong>Levels and Estimated Time: </strong>
                            <br/><em>Moderate:</em> Anonymous Connections is no piece of cake. It is meant to challenge people with any amount of experience, but it recommended as an intro puzzle for those less experienced with escape rooms. Estimated Time: 30-90 minutes.
                        </p>
                    </div>
                    <div className = "para">
                        <p><strong>Intended Audience: </strong>teens and adults who are excited about trying a virtual escape room. The only prerequisite is a desire give it a shot!</p>
                    </div>
                    <div className = "para">
                        <p><strong>Group size: </strong>2-6 players recommended.</p>
                    </div>
                    <div className = "para">
                        <p><strong>Other recommendations: </strong>computer >>> smartphone, COMMUNICATE and share screens.</p>
                        <p><em>USE HINTS!!!</em> They are there for a reason. It's no fun to be stuck and the puzzles are designed to expect that you might need one here or there :)</p>
                    </div>
                    <div className = "para">
                        <p><strong>Feedback: </strong>We'd love to hear from you, even if you do not "escape" the game! <a href={"https://docs.google.com/forms/d/e/1FAIpQLSdRNn2uICAC4WlS4blWU4G07OpPJJU_M5NPN17GlNVfWP7Z2A/viewform"}>Feedback</a></p>
                    </div>
                    <div className = "para">
                        <p><strong>Urgent Questions: </strong>Email us at mlagerq@emory.edu and john_graves@brown.edu.</p>
                    </div>
                </div>
                <div className="content-section container" align="left" style={{width: "60%"}}>
                    <h3>The Story...</h3>
                    <p>Caleb Alston is minding his business one day when he receives a strange email from someone he's never met before. They have encrypted their address and ask him to come visit. Your job is help Caleb figure out the identity of this anonymous sender. Your first question, should you go to the address?</p>
                </div>
                <div className="content-section container" align="left" style={{width: "60%"}}>
                    <h3>Your Instructions...</h3>
                    <p style={{paddingLeft: "25px"}}>
                        <p>Read EVERYTHING. Click around and explore every page. Do not use outside sources (aka Google) unless we denote that you may. You will not need to look at the source code and may spoil the game if you do (you know who you are).</p>
                        <p>Your time will be tacked from the time you start. If you think there was an error (it's very possible) feel free to put it in your feedback form!</p>
                        <p>Hints can be found in the top right corner. You will be able to choose which puzzle you'd like a hint for, and these will be tracked, so only use the ones you need!</p>
                        <p>If you check "Join Leaderboard" your score will be added (hopefully within the week!)</p>
                    </p>
                    <p><strong>Good luck!</strong></p>
                </div>
                <Alert show={!this.state.showAlert && this.state.showFailure} variant="danger" style={{width: "60%"}}>Invalid group name.</Alert>
                <Alert show={this.state.showAlert} variant="success" style={{width: "60%"}}>Welcome aboard, {this.props.name}. You may now begin your mission.<br/>
                    <Link to="/anon/page1">
                        <button className="button" onClick={this.changeName}><h3>Begin Anonymous Connections</h3></button>
                    </Link></Alert>
                <div style={{margin: "20px"}}>
                    <form id="group-name" onSubmit={this.check}>
                        <label style={{margin: "5px"}}>
                            <input type="text" placeholder="Group Name" onChange={this.handleChange}/>
                        </label>
                        <input type="checkbox" id="scales" name="scales" onChange={this.handleCheck}/>
                        <label htmlFor="scales" style={{margin: "5px"}}> Join Leaderboard? </label>
                        <input type="submit" value="Submit" style={{margin: "5px"}}/>
                    </form>
                    <h6>* Please only one person per group join the leaderboard!</h6>
                </div>
                {/*<Alert show={!this.state.showAlert && this.state.showFailure} variant="danger" style={{width: "60%"}}>Invalid group name.</Alert>*/}
                {/*<Alert show={this.state.showAlert} variant="success" style={{width: "60%"}}>Welcome aboard, {this.props.name}. You may now begin your mission.<Link to="/escovid/gform">*/}
                {/*    <button className="button"><h3>Begin ESCovid-19</h3></button>*/}
                {/*</Link>*/}
                {/*    <Link to="/escovid/gform">*/}
                {/*        <button className="button" ><h3>Begin ESCovid-20</h3></button>*/}
                {/*    </Link></Alert>*/}
            </div>
        )}
}