import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import Stopwatch from "./stopwatch";
import ReactStopwatch from "react-stopwatch";

function getTime() {
    let sec = localStorage.getItem('seconds');
    let min = localStorage.getItem('minutes');
    let hr = localStorage.getItem('hours');
    let final_formatted = localStorage.getItem('final_formatted');

    console.log("wowwoow")
    console.log(final_formatted)

    if (sec == null) {
        sec = 0;
    }
    if (min == null) {
        min = 0;
    }
    if (hr == null) {
        hr = 0;
    }
    if (final_formatted == null) {
        final_formatted = "00:00:00";
    }


    return [parseInt(sec), parseInt(min), parseInt(hr), final_formatted]
};


class TimerNav extends Component {

    time = getTime();

    state = {
        seconds: this.time[0],
        minutes: this.time[1],
        hours: this.time[2],
        formatted: null,
        final_formatted: this.time[3],
    };


    render() {
        return (
        <div className="navigation">
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Navbar.Collapse>
                    <ReactStopwatch
                    seconds={this.state.seconds}
                    minutes={this.state.minutes}
                    hours={this.state.hours}
                    limit={"10:00:00"}
                    autoStart={true}
                    onChange={({hours, minutes, seconds}) => {
                        if (this.props.count_time) {
                            localStorage.setItem( 'seconds', seconds );
                            localStorage.setItem( 'minutes', minutes );
                            localStorage.setItem( 'hours', hours );
                            this.state.final_formatted = this.state.formatted
                            localStorage.setItem('final_formatted', this.state.final_formatted)
                        }


                        console.log("final" + localStorage.getItem('final_formatted'))

                        console.log("final2" + this.state.final_formatted)


                        // console.log("final" + this.state.final_formatted)

                        // if (!this.props.finish) {
                        //     this.props.time(this.state.seconds, this.state.minutes, this.state.hours)
                        //     this.state.final_format = this.state.formatted
                        //
                        //     console.log(this.props.count_time)
                        //     console.log(this.state.formatted)
                        // }
                    }}
                    onCallback={() => console.log("done")}
                    render={({formatted, hours, minutes, seconds}) => {
                        this.state.formatted = formatted;
                        return (
                            <div style={{color: "white"}}>
                                Time: {this.props.count_time ? formatted : this.state.final_formatted}
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
