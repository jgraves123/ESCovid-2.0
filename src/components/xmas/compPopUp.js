import React, { Component } from "react";
import Griddle, {plugins} from "griddle-react";
import {contacts} from "./contacts";

export default class CompPopUp extends Component {
    state = {
        password: "",
        user: "SIBLING_NAME",
        correct_pass: false,
        password_hint: false,
        email: "SIBLING@email.com",
        email_password: "",
        correct_email: false,
    };

    handleClick = () => {
        this.props.toggle();
    };

    handleChangePass = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleChangeUser = (event) => {
        this.setState({
            user: event.target.value
        });
    }

    passwordHint = () => {
        this.setState({
            password_hint: true
        });
    }

    handleChangeEmailPass = (event) => {
        this.setState({
            email_password: event.target.value
        });
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    check_pass = (event) => {
        event.preventDefault();
        this.temp = (("FAMILY" === this.state.password) || ("family" === this.state.password) || ("Family" === this.state.password)) && (this.state.user === "SIBLING_NAME")
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            correct_pass: this.temp,
        });
    }

    check_email_pass = (event) => {
        event.preventDefault();
        this.temp = this.state.email_password === "524" && (this.state.email === "SIBLING@email.com")
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            correct_email: this.temp,
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
                        <div align="center" style={{width: "100%"}}>
                            <img width={"100%"} src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/login.png?raw=true"} />
                         {/*   <div className="scaling-svg-container" style={{paddingBottom: this.props.padding}}>*/}
                         {/*       <svg className="scaling-svg" viewBox={"0 0 " + this.props.x + " " + this.props.y}> /!* Needs*/}
                         {/*auto*/}
                         {/*updating*!/*/}
                         {/*           <image x={this.val*this.props.x} width={this.props.width} href="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/login.png?raw=true"/>*/}
                         {/*       </svg>*/}
                         {/*   </div>*/}
                            <form id="path-answer" onSubmit={this.check_pass}>
                                <label width={"80%"}>
                                    <input type="text" ref="val" value={this.state.user}
                                           onChange={this.handleChangeUser}
                                           style={{marginRight: 10, width: "45%"}}/>
                                    <input type="text" ref="val"
                                           placeholder={"Enter Password"}
                                           onChange={this.handleChangePass}
                                           style={{marginRight: 10, width: "45%"}}/>
                                </label>
                                <input type="submit" value="Submit"
                                       style={{marginLeft: 10, width: "40%"}}/>
                            </form>
                        </div>
                    </div>
                    :
                    <div className={"bg"} align="center" style={{paddingBottom: "4%", paddingTop: "2.5vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/computer.png?raw=true")'}}>
                        {/*<div className="scaling-svg-container" style={{display: "inline-block", width: "1.9%"}}>*/}
                        {/*    /!*resizing*!/*/}
                        {/*</div>*/}
                        <div className="scaling-svg-container outer" align="center" style={{
                            display: "inline-block",
                            width: "50%",
                            padding: "0px",
                            backgroundColor: "pink"
                        }}>
                        {this.state.correct_email ?
                            // <img width="100%" src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/contacts.png?raw=true"}/>
                            <div className="inner">
                                <h2>Contact List</h2>
                                <Griddle components={{Layout: ({ Table, Pagination, Filter, SettingsWrapper }) => (
                                        <div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
                                            <Filter/>
                                            <Table />
                                            <Pagination/>
                                        </div>
                                    )}} data={contacts} plugins={[plugins.LocalPlugin]} useGriddleStyles={"false"} enableInfiniteScroll={true}/>
                            </div>
                            :
                                    <div className={"inner"}>

                                        <form id="path-answer" onSubmit={this.check_email_pass}>
                                            <h3>Log in</h3>
                                            <div className={"form-group"}>
                                                <label>Email</label>
                                                <input type="text" ref="val"
                                                       value={this.state.email}
                                                       onChange={this.handleChangeEmail}
                                                       style={{width: "100%"}}/>
                                            </div>
                                            <div className={"form-group"}>
                                                <label width={"100%"}>Password</label>
                                                <input type="text" ref="val"
                                                       placeholder={"Enter Password"}
                                                       onChange={this.handleChangeEmailPass}
                                                       style={{width: "100%"}}/>
                                            </div>
                                            <input type="submit" value="Submit"
                                                   style={{width: "100%"}}/>
                                            {this.state.password_hint ?
                                                <p>How many paths are there?</p> :
                                                <p className="forgot-password text-right"
                                                   onClick={this.passwordHint}>
                                                    Forgot password?
                                                </p>
                                            }
                                        </form>

                                    </div>

                        }

                        </div>

                        <div style={{display: "inline-block", verticalAlign: "top", paddingBottom: "0%", width: "45%", height: "50vw", overflow: "auto"}}>
                         {/*   <svg className="scaling-svg" viewBox="0 0 1000 3860"> /!* Needs auto*/}
                         {/*updating*!/*/}
                         {/*       <image x="0" width="100%" href={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/contacts.png?raw=true"}/>*/}
                         {/*   </svg>*/}
                            <img width="100%" src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/notes.png?raw=true"}/>
                        </div>

                    </div>
                }

                </div>
            </div>
        );
    }
}

