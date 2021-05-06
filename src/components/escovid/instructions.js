import React, {Component} from "react";
import {Jumbotron, Button, Alert} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../index.css";
import "../game/posts.css";
import Exit from "../game/exit";

export default class Instructions extends Component{

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
        intro: this.props.name == null,
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
        this.props.gameName("escovid20")
    }

    byebyeIntro = () => {
        this.setState({
            intro: false
        })
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
            <div align="center" style={{backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/space/7.png?raw=true")', paddingBottom: "10px"}}>
                {this.state.intro===true?
                    <div align="left" style={{width: "60%", padding: "50px"}}>
                        <Jumbotron style={{backgroundColor: "white", opacity: "80%"}}>
                        <p>If you have received a link to this page, it means you have been selected as a candidate for the Highly Prestigious and Supremely Important Emergency Mission known as ESCovid.
                            Your analytical and problem-solving skills have impressed us so far (yes, we’ve been watching you).
                            However, to truly prove yourself worthy, you must collaborate with your mission partner(s) to make your way to the departure location.
                        </p>
                        <button className="button" onClick={this.byebyeIntro}>Recieve Instructions</button>
                        </Jumbotron>
                    </div>
                : null}
                {this.state.intro===false ?
                <div>
                <h1 style={{color: "white"}}>Welcome to ESCovid</h1>
                <h3 style={{color: "#aea9f5"}}>A space-and-math-themed escape game!</h3>
                <div className="content-section container" align="left" style={{width: "50%", opacity: "80%"}}>
                    <h3>Overview</h3>
                    <div className = "para">
                        <p><strong>Levels and Estimated Time: </strong>Choose the level that’s right for your group!
                            (Either way, this is a difficult and lengthy escape room, so try not to get demoralized if it is taking awhile. Feel free to do it in multiple sittings!!!)
                            <br/><em>Challenging:</em> ESCovid-19 is guaranteed to challenge you in new ways, just as Covid-19 has challenged us all. 1-2 hours estimated.
                            <br/><em>Very Challenging:</em> Now, imagine a mutated version that has evolved to withstand your best problem-solving skills, and voila: ESCovid-20! 2-3 hours estimated.</p>
                    </div>
                    <div className = "para">
                        <p><strong>Intended Audience: </strong>teens and adults who enjoy math and puzzles (originally created for a high school math camp).</p>
                    </div>
                    <div className = "para">
                        <p><strong>Group size: </strong>4-6 players recommended, but can be done with less.</p>
                    </div>
                    <div className = "para">
                        <p><strong>Other recommendations: </strong>computer >>> smartphone, utilize our hints (especially if you think you might need to (re)learn math concepts), COMMUNICATE and share screens.</p>
                    </div>
                    <div className = "para">
                        <p><strong>Feedback: </strong>We'd love to hear from you, even if you do not "escape" the game! <a href={"https://docs.google.com/forms/d/e/1FAIpQLSdRNn2uICAC4WlS4blWU4G07OpPJJU_M5NPN17GlNVfWP7Z2A/viewform"}>ESCovid Feedback</a></p>
                    </div>
                    <div className = "para">
                        <p><strong>Urgent Questions: </strong>Email us at mlagerq@emory.edu and john_graves@brown.edu.</p>
                    </div>
                </div>
                {/* <div className="content-section container" align="left" style={{width: "60%"}}>
                    <h3>The Story...</h3>
                    <p>If you have received a link to this page, it means you have been selected as a candidate for the Highly Prestigious and Supremely Important Emergency Mission known as ESCovid.
                        Your analytical and problem-solving skills have impressed us so far (yes, we’ve been watching you).
                        However, to truly prove yourself worthy, you must collaborate with your mission partner(s) to make your way to the departure location.
                    </p>
                </div> */}
                <div className="content-section container" align="left" style={{width: "50%", opacity: "80%"}}>
                    <h3>More instructions...</h3>
                    <p style={{paddingLeft: "25px"}}>
                        <p>Read EVERYTHING. Click around and explore every page. Do not use outside sources (aka Google) unless we denote that you may. You will not need to look at the source code and may spoil the game if you do (you know who you are).</p>
                        <p>Something about the timer?</p>
                        <p>Hints can be found in the top right corner. You will be able to choose which puzzle you'd like a hint for, and these will be tracked, so only use the ones you need!
                        </p>
                        <p>If you are really stuck, answers can be found at the bottom of <a href={"https://docs.google.com/document/d/1PuleKLz8PV2NoXICFf5su6HzEAWOWaHcazZ_P-CRQl0/edit?usp=sharing"}>this</a> document (in normal text and may include photos, so only scroll as far as you need to).</p>
                    </p>
                    <p><strong>Good luck!</strong></p>
                </div>
                <Alert show={!this.state.showAlert && this.state.showFailure} variant="danger" style={{width: "50%"}}>Invalid group name.</Alert>
                <Alert show={this.state.showAlert} variant="success" style={{width: "50%"}}>Welcome aboard, {this.props.name}. You may now begin your mission.<br/>
                    <Link to="/escovid/gform">
                        <button className="button"><h3>Begin ESCovid-19</h3></button>
                    </Link>
                    <Link to="/escovid/gform">
                        <button className="button" onClick={this.changeName}><h3>Begin ESCovid-20</h3></button>
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
                </div>
                : null}
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