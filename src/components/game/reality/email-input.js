import React, {Component} from "react";


export default class Email extends Component {

    state = {
        password_hint: false,
        email: "SIBLING@email.com",
        email_password: "",
        correct_email: false,
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


    passwordHint = () => {
        this.setState({
            password_hint: true
        });
    }

    render() {
        return (
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
        );
    }

}