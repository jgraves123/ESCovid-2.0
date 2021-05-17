import React, { Component } from "react";

export default class Password extends Component {
    state = {
        password: "",
        correct_pass: false,
    };

    handleChangePass = (event) => {
        this.setState({
            password: event.target.value
        });
    }


    check_pass = (event) => {
        event.preventDefault();
        this.temp = this.props.answers.includes(this.state.password);
        if (!this.temp) {
            alert(this.props.alert)
        }
        this.setState({
            correct_pass: this.temp,
        });
    }


    render() {
        return (
            <div>
                    {!this.state.correct_pass ?
                        <div align="center">
                            <div align="center" style={{width: "100%"}}>
                                <form id="path-answer" onSubmit={this.check_pass}>
                                    <label style={{width: "50%"}}>
                                        <input type="text" ref="val"
                                               placeholder={this.props.input}
                                               onChange={this.handleChangePass}
                                               style={{marginRight: 10, width: "100%"}}/>
                                    </label>
                                    <input type="submit" value={this.props.command}
                                           style={{marginLeft: 10, width: "30%"}}/>
                                </form>
                            </div>
                        </div>
                        :
                        this.props.correct
                    }

                </div>
        )};
}

