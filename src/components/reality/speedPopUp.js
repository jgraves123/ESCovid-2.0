import React, { Component } from "react";
import Griddle, {plugins} from "griddle-react";
import {contacts} from "./contacts";
import {Carousel} from 'react-bootstrap';
import {evaluate} from "mathjs";

//DONE

export default class SpeedPopUp extends Component {
    state = {
        password: "",
        correct_pws: [false,false,false,false],
        part: 0,
        krypto_reqs: {1: ["2", "6", "3", "5", "13"], 2: ["18","9","3","5","7"], 3:["16","15","9","14","2"]}
    };

    handleClick = () => {
        this.props.toggle();
    };

    handleChangePass = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    check_pass = (event) => {
        event.preventDefault();
        if (this.state.part > 0){
            this.answer = evaluate(this.state.password);
            let exp = this.state.password;
            this.arr = exp.split(new RegExp("[\\D]"));
            this.arrfiltered = this.arr.filter(i => i!="");
            this.isValid = this.arr.includes(this.state.krypto_reqs[this.state.part][0]) && this.arr.includes(this.state.krypto_reqs[this.state.part][1]) && this.arr.includes(this.state.krypto_reqs[this.state.part][2]) && this.arr.includes(this.state.krypto_reqs[this.state.part][3]) && this.arr.includes(this.state.krypto_reqs[this.state.part][4])
                && (this.arrfiltered.length === 5);
        } else{
            this.isValid = true;
        }
        this.temp = [("266" === this.state.password), (13 === this.answer), (5 === this.answer), (12 === this.answer)];
        if (!this.temp[this.state.part] | !this.isValid) {
            alert("Incorrect Code: " + this.state.password)
        } else{
            this.pw = this.state.correct_pws.slice(); //creates the clone of the state
            this.pw[this.state.part] = this.temp[this.state.part];
            this.setState({correct_pws: this.pw});
            this.setState({part: this.state.part + 1})
        }
    };



    val = (1 - (parseFloat(this.props.width) / 100.0))/2;

    render() {
        return (
            <div className="modal2">
                <div className="modal_content2" style={{backgroundColor: "white", padding: "1vw"}}>
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>

                {!this.state.correct_pws[0] ?
                    <div align="center">
                        <div align="center" style={{width: "75vw"}}>
                            <div className="container" >
                                <div className="row align-items-center" style={{paddingBottom: "5px"}}>
                                    <div className="col-lg-7">
                                        <img
                                            className="img-fluid rounded mb-4 mb-lg-0"
                                            src="https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/set.png?raw=true"
                                            alt="3D Set Game"
                                        />
                                    </div>
                                    <div className="col-lg-5" >
                                        <Carousel pause={'hover'}>
                                            <Carousel.Item align='center'>
                                                <img style={{width: "100%"}} src={"https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/setRules1.png?raw=true"} alt={"Instructions part 1"}/>
                                            </Carousel.Item>
                                            <Carousel.Item align='center'>
                                                <img style={{width: "100%"}} src={"https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/setRules2.png?raw=true"} alt={"Instructions part 2"}/>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
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
                    <div>
                        {!this.state.correct_pws[1] ?
                            <div align="center">
                                <div align="center" style={{width: "50vw"}}>
                                    <div className="container">
                                        <p>Rules: Use each of the top cards exactly once to make the bottom card.</p>
                                        <img
                                            className="img-fluid rounded"
                                            src="https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/krypto1.png?raw=true"
                                            alt=""
                                        />
                                    </div>
                                    <form id="path-answer" onSubmit={this.check_pass}>
                                        <label width={"80%"}>
                                            <input type="text" ref="val"
                                                   placeholder={"(a+b)*c"}
                                                   onChange={this.handleChangePass}
                                                   style={{marginRight: 10, width: "45%"}}/>
                                        </label>
                                        <input type="submit" value="Submit"
                                               style={{marginLeft: 10, width: "40%"}}/>
                                    </form>
                                </div>
                            </div>
                            :
                            <div>
                                {!this.state.correct_pws[2] ?
                                <div align="center">
                                    <div align="center" style={{width: "50vw"}}>
                                        <div className="container">
                                            <img
                                                className="img-fluid rounded"
                                                src="https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/krypto2.png?raw=true"
                                                alt=""
                                            />
                                        </div>
                                        <form id="path-answer" onSubmit={this.check_pass}>
                                            <label width={"80%"}>
                                                <input type="text" ref="val"
                                                       placeholder={"(a+b)*c"}
                                                       onChange={this.handleChangePass}
                                                       style={{marginRight: 10, width: "45%"}}/>
                                            </label>
                                            <input type="submit" value="Submit"
                                                   style={{marginLeft: 10, width: "40%"}}/>
                                        </form>
                                    </div>
                                </div>
                                    :
                                    <div>
                                        {!this.state.correct_pws[3] ?
                                            <div align="center">
                                                <div align="center" style={{width: "50vw"}}>
                                                    <div className="container">
                                                        <img
                                                            className="img-fluid rounded"
                                                            src="https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/krypto3.png?raw=true"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <form id="path-answer" onSubmit={this.check_pass}>
                                                        <label width={"80%"}>
                                                            <input type="text" ref="val"
                                                                   placeholder={"(a+b)*c"}
                                                                   onChange={this.handleChangePass}
                                                                   style={{marginRight: 10, width: "45%"}}/>
                                                        </label>
                                                        <input type="submit" value="Submit"
                                                               style={{marginLeft: 10, width: "40%"}}/>
                                                    </form>
                                                </div>
                                            </div>
                                            :
                                            <div align="center">
                                                <div align="center" style={{width: "50vw"}}>
                                                    <h3>so speedy in those challenges...</h3>
                                                    <div className="container">
                                                        <img
                                                            className="img-fluid rounded"
                                                            src="https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/shift.png?raw=true"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <p>...but it only counts if council was impressed, too.</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    }
                                </div>
                            }
                    </div>
                }

                </div>
            </div>
        );
    }
}

