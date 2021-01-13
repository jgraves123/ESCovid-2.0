import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../index.css";
import "../game/posts.css";

export default class Tumblr2 extends Component{

    state = {
        value: "",
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
            value: event.target.value
        });
    }

    check = (event) => {
        event.preventDefault();
        this.temp = ("launch" === this.state.value)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        else {
            window.location.assign("/escovid/auth");
        }
        this.setState({
            value: ""
        });
    }

    render() {
            return (
                <div align={"center"}>
                    <h1>ESCovid-19 Tumblr Auth</h1>
                    <Link to="/escovid/final">
                        <button className="button"><h3>Continue</h3></button>
                    </Link>
                    {this.props.game_name == "escovid19" ? <h1>Escovid19</h1> : <h1> ESCovid20</h1>}
                </div>
            )
    }
}