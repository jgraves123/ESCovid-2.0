import React, {Component} from "react";
import {Navbar, Nav, Button, OverlayTrigger, Popover, NavDropdown} from 'react-bootstrap';
import {hints} from "./hint"
import ReactStopwatch from "./stopwatch";

function getTime() {
    let sec = localStorage.getItem('seconds');
    let min = localStorage.getItem('minutes');
    let hr = localStorage.getItem('hours');
    let final_formatted = localStorage.getItem('final_formatted');

    console.log("wowwoow")
    console.log(final_formatted)
    console.log(sec)

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
            toReturn.push(<DefaultPop take_hint={props.take_hint} text={index+1 + ": " + key} hint={val}/>);
        }
        toReturn.push(<NavDropdown.Divider />)
    }
    toReturn.push(<NavDropdown.Item href="/contact">Still Confused?</NavDropdown.Item>)
    toReturn.push(<NavDropdown.Item onClick={props.closeMenu}>Close Menu</NavDropdown.Item>)
    return(
        toReturn
    )

}


function DefaultPop(props) {
        return (

            <OverlayTrigger
                trigger="click"
                rootClose
                key={'left'}
                placement={'left'}
                overlay={
                    <Popover id={`popover-positioned-left'}`}
                             style={{position: "fixed"}} >
                        <Popover.Title><strong>{props.text}</strong></Popover.Title>
                        <Popover.Content>
                            {props.hint}
                        </Popover.Content>
                    </Popover>
                }
            >
                <NavDropdown.Item onClick={props.take_hint} varient="secondary">{props.text}</NavDropdown.Item>
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
        showDrop: false
    };

    showDropdown = () => {
        if (!this.state.showDrop){
            this.setState({
                showDrop: true
            })
        }
    };

    closeMenu = () => {
        this.setState({
            showDrop: false
        });
        window.location.reload()
    };


    render() {
        return (
        <div className="navigation">
            {/*bg="dark" variant="light" */}
            <Navbar expand="lg" style={{backgroundColor: "#1e152a", height: 60}}>
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
                <div style={{color: "white"}}>
                    Welcome {this.props.name}!
                </div>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                <div style={{color: "white"}}>
                    Hints Used: {this.props.num_hint}
                </div>
                <Nav>
                    <NavDropdown title="Hint" menuAlign="right" drop={'left'} onClick={this.showDropdown} show={this.state.showDrop}>
                        <DefaultDropdown closeMenu={this.closeMenu} hints={this.state.hint[this.props.game][this.props.stage]} take_hint={this.props.use_hint}/>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>)
    }

}

export default TimerNav;
