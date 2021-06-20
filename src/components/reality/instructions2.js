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
        this.props.gameName("reality", 4)
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
            <div align="center" style={{backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/camerabg.png")', paddingBottom: "10px"}}>
                <h1 style={{color: "white"}}>Escape From Reality</h1>
                <h2 style={{color: "white", width: "60%"}}>The race to escape the grasp of reality television
                    before it completely sucks your soul.</h2>
                <div className="content-section container" align="left" style={{width: "60%"}}>
                    <h3>Overview</h3>
                    <div className = "para">
                        <p><strong>Estimated Time:</strong> 1.5-2 hours
                        </p>
                    </div>
                    <div className = "para">
                        <p><strong>Intended Audience: </strong>GIV Math students!</p>
                    </div>
                    <div className = "para">
                        <p><strong>Group size: </strong> 4-6 players recommended.</p>
                    </div>
                    <div className = "para">
                        <p><strong>Other recommendations: </strong>computer >>> smartphone, COMMUNICATE and share screens.</p>
                        <p><em>USE HINTS!!!</em> Your counselor is there for a reason. It's no fun to be stuck and the puzzles are designed to expect that you might need a few :)</p>
                        <p>Some puzzles can be solved at the same time - divide up the clues among your group members.</p>
                        <p>Send answers in the chat so others can get caught up if they're working on something else.</p>
                    </div>
                    <div className = "para">
                        <p><strong>Feedback: </strong>We'd love to hear from you, even if you do not "escape" the game! <a href={"https://docs.google.com/forms/d/e/1FAIpQLSdRNn2uICAC4WlS4blWU4G07OpPJJU_M5NPN17GlNVfWP7Z2A/viewform"}>Feedback</a></p>
                    </div>
                    {/*<div className = "para">*/}
                    {/*    <p><strong>Urgent Questions: </strong>Email us at mlagerq@emory.edu and john_graves@brown.edu.</p>*/}
                    {/*</div>*/}
                </div>
                {/*<div className="content-section container" align="left" style={{width: "60%"}}>*/}
                {/*    <h3>The Story...</h3>*/}
                {/*    <p></p>*/}
                {/*</div>*/}
                <div className="content-section container" align="left" style={{width: "60%"}}>
                    <h3>Your Instructions...</h3>
                    <p style={{paddingLeft: "25px"}}>
                        <p>One person from your group should click join the leaderboard, but everyone should follow along on their own device.</p>
                        <p>Read EVERYTHING - clues and storyline are mixed in. Click around and explore every page. You may use outside sources (aka Google) but you should not need to.</p>
                        <p>Your time will be tracked once you start. If you think there was an error (it's very possible) feel free to tell your counselor!</p>
                        {/*<p>If you check "Join Leaderboard" your score will be added (hopefully within the week!)</p>*/}
                    </p>
                    <p><strong>Good luck!</strong></p>
                </div>
                <Alert show={!this.state.showAlert && this.state.showFailure} variant="danger" style={{width: "60%"}}>Invalid group name.</Alert>
                <Alert show={this.state.showAlert} variant="success" style={{width: "60%"}}>Welcome aboard, {this.props.name}. You may now begin your mission.<br/>
                    <Link to="/reality/start">
                        <button className="button" onClick={this.changeName}><h3>Begin Escape From Reality</h3></button>
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