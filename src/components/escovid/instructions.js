import React, {Component} from "react";
import {Carousel, Alert} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../index.css";
import "../game/posts.css";

export default class Instructions extends Component{

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
            <div align="center" style={{backgroundColor: "#f2d3d0"}}>
                <h1>Welcome to ESCovid</h1>
                <h2>A space-and-math-themed escape game!</h2>
                <div className="content-section container" align="left" style={{width: "60%"}}>
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
                <div className="content-section container" align="left" style={{width: "60%"}}>
                    <h3>The Story...</h3>
                    <p>If you have received a link to this page, it means you have been selected as a candidate for the Highly Prestigious and Supremely Important Emergency Mission known as ESCovid.
                        Your analytical and problem-solving skills have impressed us so far (yes, we’ve been watching you).
                        However, to truly prove yourself worthy, you must collaborate with your mission partner(s) to make your way to the departure location.
                    </p>
                </div>
                <div className="content-section container" align="left" style={{width: "60%"}}>
                    <h3>Your Instructions...</h3>
                    <ul>
                        <li>Read EVERYTHING. Click around and explore every page. Do not use outside sources (aka Google) unless we denote that you may. You will not need to look at the source code and may spoil the game if you do (you know who you are).</li>
                        <li>Something about the timer?</li>
                        <li>Hints can be found in the top right corner. You will be able to choose which puzzle you'd like a hint for, and these will be tracked, so only use the ones you need!
                        </li>
                        <li>If you are really stuck, answers can be found at the bottom of <a href={"https://docs.google.com/document/d/1PuleKLz8PV2NoXICFf5su6HzEAWOWaHcazZ_P-CRQl0/edit?usp=sharing"}>this</a> document (in normal text and may include photos, so only scroll as far as you need to).</li>
                    </ul>
                    <strong>Good luck!</strong>
                </div>
                <Alert show={!this.state.showAlert && this.state.showFailure} variant="danger" style={{width: "60%"}}>Invalid group name.</Alert>
                <Alert show={this.state.showAlert} variant="success" style={{width: "60%"}}>Welcome aboard, {this.props.name}. You may now begin your mission.<br/>
                    <Link to="/escovid/gform">
                        <button className="button"><h3>Begin ESCovid-19</h3></button>
                    </Link>
                    <Link to="/escovid/gform">
                        <button className="button"><h3>Begin ESCovid-20</h3></button>
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