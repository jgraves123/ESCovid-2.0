import React, {Component, Fragment} from 'react';
import "./index.css";
import "./posts.css";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
import Post from "./post";
import { Carousel} from 'react-bootstrap';


function Instructions(){
    return(
        <div align="center">
            <h1>Welcome to ESCovid</h1>
            <h2>A space-and-math-themed escape game!</h2>
            {/*<Carousel style={{height: "500px"}}>*/}
            {/*    <Carousel.Item>*/}
            {/*        <h3>Overview</h3>*/}
            {/*        <div className = "para">*/}
            {/*            <p><strong>Levels and Estimated Time: </strong>Choose the level that’s right for your group!*/}
            {/*                (Either way, this is a difficult and lengthy escape room, so try not to get demoralized if it is taking awhile. Feel free to do it in multiple sittings!!!)*/}
            {/*                <br/><em>Challenging:</em> ESCovid-19 is guaranteed to challenge you in new ways, just as Covid-19 has challenged us all. 1-2 hours estimated.*/}
            {/*                <br/><em>Very Challenging:</em> Now, imagine a mutated version that has evolved to withstand your best problem-solving skills, and voila: ESCovid-20! 2-3 hours estimated.</p>*/}
            {/*        </div>*/}
            {/*        <div className = "para">*/}
            {/*            <p><strong>Intended Audience: </strong>teens and adults who enjoy math and puzzles (originally created for a high school math camp).</p>*/}
            {/*        </div>*/}
            {/*        <div className = "para">*/}
            {/*            <p><strong>Group size: </strong>4-6 players recommended, but can be done with less.</p>*/}
            {/*        </div>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>First slide label</h3>*/}
            {/*            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Second slide label</h3>*/}
            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Third slide label</h3>*/}
            {/*            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*</Carousel>*/}
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
            <div>
                <form id="group-name" onSubmit={console.log("would save group name")}>
                    <label>
                        <input type="text" placeholder="Group Name" />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <Link to="/escovid/gform">
                <button className="button"><h3>Begin ESCovid-19</h3></button>
            </Link>
            <Link to="/escovid/gform">
                <button className="button"><h3>Begin ESCovid-20</h3></button>
            </Link>
        </div>
    )
}
export class Gform extends Component {

    constructor(props){
        super(props)
        document.title = "Step 1!"
        if (!this.props.counting) {
            this.props.start(true)
        }
    }

    render(){
        return(
            <div align="center">
                <h1>Google forms page</h1>
                <div>
                    <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/Mastermind.PNG?raw=true"
                        alt=""
                    />
                </div>
                <br/>
                <div>
                    <form id="mastermind_form">
                        <label>
                            <input type="text" placeholder="ID" />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="content-section container" align="left" style={{width: "60%"}}>
                    <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/scales.PNG?raw=true"
                        alt=""
                    />
                </div>
                <div>
                    <form id="scales_form" onSubmit={console.log("would save group name")}>
                        <label>
                            <input type="text" placeholder="ID" />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <Link to="/escovid/tumblr">
                    <button className="button"><h3>Continue</h3></button>
                </Link>
            </div>
        )
    }

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