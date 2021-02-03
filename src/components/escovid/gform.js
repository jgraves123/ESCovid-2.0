import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Accordion, Card} from "react-bootstrap";

export default class Gform extends Component {

    constructor(props){
        super(props)
        document.title = "Step 1!"
        if (!this.props.counting) {
            this.props.start(true)
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
        this.temp = ("spaceship" === this.state.value)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        else {
            window.location.assign("/escovid/tumblr");
        }
        this.setState({
            value: ""
        });
    }

    render(){
        return(
            <div align="center">
                <br/>
                <div className="content-section">
                    <h1>Phase I</h1>
                    <h3>Mission control has left you two clues about the departure location - you may wish to divide and conquer, but you will need to solve both of them to move on.</h3>
                </div>
                <br/>
                <Accordion style={{width: "60%"}}>
                    <Card>
                        <Card.Header>
                            Missive I
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" style={{backgroundColor: "#007FFF"}}/>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div>
                                    <img
                                        className="img-fluid rounded mb-4 mb-lg-0"
                                        src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/Mastermind.PNG?raw=true"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <form id="mastermind_form">
                                        <label>
                                            <input type="text" placeholder="ID" />
                                        </label>
                                        <input type="submit" value="Submit"/>
                                    </form>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <br/>
                    <Card>
                        <Card.Header>
                            Missive II
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" style={{backgroundColor: "#007FFF"}}/>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <img
                                    className="img-fluid rounded mb-4 mb-lg-0"
                                    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/scales.PNG?raw=true"
                                    alt=""
                                />
                                <div>
                                    <form id="scales_form" onSubmit={console.log("would save group name")}>
                                        <label>
                                            <input type="text" placeholder="ID" />
                                        </label>
                                        <input type="submit" value="Submit"/>
                                    </form>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br/>
                <form id="path-answer" onSubmit={this.check}>
                    <label>
                        <input type="text" placeholder="Password" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}