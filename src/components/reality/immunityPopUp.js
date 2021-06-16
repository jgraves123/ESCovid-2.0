import React, { Component } from "react";
import Griddle, {plugins} from "griddle-react";
import {contacts} from "./contacts";
import {Carousel} from 'react-bootstrap';

export default class SpeedPopUp extends Component {
    state = {
        password: "",
        correct_pass: false,
    };

    handleClick = () => {
        this.props.toggle();
    };

    handleChangePass = (event) => {
        this.setState({
            password: event.target.value
        });
    }


    check_pass = (event) => {
        event.preventDefault();
        this.temp = ("142" === this.state.password)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            correct_pass: this.temp,
        });
    }


    val = (1 - (parseFloat(this.props.width) / 100.0))/2

    render() {
        return (
            <div className="modal2">
                <div className="modal_content2" style={{backgroundColor: "white", padding: "1vw"}}>
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>

                {!this.state.correct_pass ?
                    <div align="center">
                        <div align="center" style={{width: "50vw"}}>
                            <div className="container">
                                <img
                                    className="img-fluid rounded mb-4 mb-lg-0"
                                    src="https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/map.png?raw=true"
                                    alt=""
                                />
                            </div>
                            <form id="path-answer" onSubmit={this.check_pass}>
                                <label width={"80%"}>
                                    <input type="text" ref="val"
                                           placeholder={"XXX"}
                                           onChange={this.handleChangePass}
                                           style={{marginRight: 10, width: "45%"}}/>
                                </label>
                                <input type="submit" value="Submit"
                                       style={{marginLeft: 10, width: "40%"}}/>
                            </form>
                        </div>
                    </div>
                    :
                    <div align="center" style={{width: "100%"}}>
                        <div align="center" style={{width: "40vw"}}>
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src="https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/idol.png?raw=true"
                                alt=""
                            />
                        </div>
                    </div>
                }
                </div>
            </div>
        );
    }
}

