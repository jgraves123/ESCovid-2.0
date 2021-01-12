import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import {Navbar, Nav, Button, OverlayTrigger, Popover, NavDropdown} from 'react-bootstrap';
import Stopwatch from "./stopwatch";
import {hints} from "./hint"
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

function DefaultDropdown(props) {
    let toReturn = [];
    for (let key of Object.keys(props.hints)){
        for (const [index, val] of props.hints[key].entries()) {
            toReturn.push(<NavDropdown.Item><DefaultPop text={index+1 + ": " + key} hint={val}/></NavDropdown.Item>);
        }
        toReturn.push(<NavDropdown.Divider />)
    }
    toReturn.push(<NavDropdown.Item href="/contact">Still Confused?</NavDropdown.Item>)
    return(
        toReturn
    )

}


function DefaultPop(props) {
        return (

            <OverlayTrigger
                trigger="click"
                key={'bottom'}
                placement={'bottom'}
                overlay={
                    <Popover id={`popover-positioned-bottom'}`}
                             style={{top: 50, zIndex: 1, position: "fixed"}}>
                        <Popover.Title as="h6">{`Popover bottom`}</Popover.Title>
                        <Popover.Content>
                            <strong>{props.text}</strong> {props.hint}
                        </Popover.Content>
                    </Popover>
                }
            >
                <NavDropdown.Item varient="secondary">{props.text}</NavDropdown.Item>
            </OverlayTrigger>
        )

}


class TimerNav extends Component {

    time = getTime();

    state = {
        seconds: this.time[0],
        minutes: this.time[1],
        hours: this.time[2],
        formatted: null,
        final_formatted: this.time[3],
        hint: hints,
        hint1: {"stage 1 Type 1": ["stage 1 Type 1 Hint 1", "Stage 1" +
            " Type 1 Hint 2"], "stage 1 Type 2": ["stage 1 Type 1 Hint 1"]}
    };


    render() {
        console.log(this.state.hint2)
        return (
        <div className="navigation">
            <Navbar bg="dark" variant="dark" expand="lg">
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
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <NavDropdown title="Hint" menuAlign="right" id="basic-nav-dropdown" drop={'left'}>
                        <DefaultDropdown hints={this.state.hint[this.props.game][this.props.stage]}/>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <div style={{color: "white"}}>
                Hints Used: 0
                </div>
                {/*<Hint />*/}
            </Navbar>
        </div>)
    }

}

export default TimerNav;
