import React, { Component } from "react";

export default class CompPopUp extends Component {
    state = {
        password: "",
        user: "SIBLING_NAME",
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

    handleChangeUser = (event) => {
        this.setState({
            user: event.target.value
        });
    }

    check_pass = (event) => {
        console.log(this.state.pass)
        event.preventDefault();
        this.temp = (("FAMILY" === this.state.password) || ("family" === this.state.password) || ("Family" === this.state.password)) && (this.state.user === "SIBLING_NAME")
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
                <div className="modal_content2">
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
                    <div style={{paddingBottom: "18%", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/path.jpeg?raw=true")'}}>
                        <div className="scaling-svg-container" style={{display: "inline-block", width: "48%"}}>
                            {/*resizing*/}
                        </div>
                        <div className="scaling-svg-container" style={{display: "inline-block", width: "50%"}}>
                            <svg className="scaling-svg" viewBox="0 0 3024 3860"> {/* Needs auto
                         updating*/}
                                <image x="0" width="100%" href={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/path.jpeg?raw=true"}/>
                            </svg>
                        </div>

                    </div>
                }

                </div>
            </div>
        );
    }
}