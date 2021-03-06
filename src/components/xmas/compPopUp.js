import React, { Component } from "react";

export default class CompPopUp extends Component {
    state = {
        phone_number: "",
        phone: false,
    };

    handleClick = () => {
        this.props.toggle();
    };

    handleChangePhone = (event) => {
        this.setState({
            phone_number: event.target.value
        });
    }

    check_phone = (event) => {
        console.log(this.state.phone_number)
        event.preventDefault();
        this.temp = ("6179165316" === this.state.phone_number)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            phone: this.temp,
        });
    }

    val = (1 - (parseFloat(this.props.width) / 100.0))/2

    render() {
        return (
            <div className="modal2">
                <div className="modal_content2">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>

                {!this.state.phone ?
                    <div align="center">
                        <div align="center" style={{width: "80%"}}>
                            <h2 align="center" className="subheading">Finishing Presentation</h2>
                            <h3 align="center" className="subheading">You need to finish up your
                                presentation, but realize it isn't saved under your account. Why
                                would that be?????</h3>
                            <h3 align="center" className="subheading">You realize it's because
                                you've been loaning a computer, but you don't have the password.
                                You'll need to find the cell phone number of the computer's owner to
                                find the computer's password.</h3>
                            <form id="path-answer" onSubmit={this.check_phone}>
                                <label>
                                    <input type="text" ref="val"
                                           placeholder={"Enter Phone Number"}
                                           onChange={this.handleChangePhone}
                                           style={{marginRight: 10, width: "40%"}}/>
                                </label>
                                <input type="submit" value="Submit"
                                       style={{marginLeft: 10, width: "40%"}}/>
                            </form>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 align="center" className="subheading">Decode Password</h2>
                        <h3 align="center" className="subheading">Ali didn't want to send you her password directly, so she encrypted it below. See if you can crack it!</h3>
                        <div className="scaling-svg-container" style={{paddingBottom: "38%"}}>
                            {/*<svg className="scaling-svg" viewBox={"0 0 718 270"}> /!* Needs*/}
                            {/*     auto*/}
                            {/*     updating*!/*/}
                            {/*    <image x={.3*718} width={"40%"} href={this.state.password}/>*/}
                            {/*</svg>*/}
                        </div>
                    </div>
                }

                </div>
            </div>
        );
    }
}