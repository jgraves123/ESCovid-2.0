import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import Stopwatch from "./stopwatch";
import ReactStopwatch from "react-stopwatch";


class TimerNav extends Component {
    render() {
        return (
        <div className="navigation">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Collapse className="justify-content-end">
                    <Stopwatch sec={this.props.sec} min={this.props.min} hrs={this.props.hrs}/>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/about">Hint</Nav.Link>
                </Nav>
            </Navbar>
        </div>)
    }

}

export default TimerNav;
