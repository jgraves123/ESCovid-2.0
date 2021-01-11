import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import Stopwatch from "./stopwatch";
import ReactStopwatch from "react-stopwatch";

function getTime() {
    let sec = localStorage.getItem('seconds');
    let min = localStorage.getItem('minutes');
    let hr = localStorage.getItem('hours');

    if (sec == null) {
        sec = 0;
    }
    if (min == null) {
        min = 0;
    }
    if (hr == null) {
        hr = 0;
    }
    return [parseInt(sec), parseInt(min), parseInt(hr)]
};

function getComplete() {}

class TimerNav extends Component {

    time = getTime();

    state = {
        seconds: this.time[0],
        minutes: this.time[1],
        hours: this.time[2],
        finish: false,
        formatted: "00:00:01",
        final_formatted: "00:00:01",
    };


    render() {
        return (
        <div className="navigation">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Collapse>
                    <ReactStopwatch
                    seconds={this.state.seconds}
                    minutes={this.state.minutes}
                    hours={this.state.hours}
                    limit={"10:00:00"}
                    onChange={({hours, minutes, seconds}) => {
                        localStorage.setItem( 'seconds', seconds );
                        localStorage.setItem( 'minutes', minutes );
                        localStorage.setItem( 'hours', hours );
                        // if (!this.props.finish) {
                        //     this.props.time(this.state.seconds, this.state.minutes, this.state.hours)
                        //     this.state.final_format = this.state.formatted
                        //
                        //     console.log(this.props.finish)
                        //     console.log(this.state.formatted)
                        // }
                    }}
                    onCallback={() => console.log("done")}
                    render={({formatted, hours, minutes, seconds}) => {
                        this.state.formatted = formatted;
                        return (
                            <div style={{color: "white"}}>
                                Time: {formatted}
                            </div>
                        );
                    }}
                />
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/about">Hint</Nav.Link>
                </Nav>
            </Navbar>
        </div>)
    }

}

export default TimerNav;
