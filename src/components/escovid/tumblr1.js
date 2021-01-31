import React, {Component} from "react";
import "../index.css";
import "../game/posts.css";

export default class Tumblr1 extends Component{

    componentDidMount() {
        document.title = "ESCovid: Last Step!"
        if (this.props.curr_stage != 1) {
            this.props.stage(1)
        }
    }

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
                        <h1>ESCovid-19 Tumblr1</h1>
                        <form id="path-answer" onSubmit={this.check}>
                            <label>
                                <input type="text" placeholder="Password" onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                        {this.props.game_name == "escovid19" ? <h1>Escovid19</h1> : <h1> ESCovid20</h1>}
                    </div>
                )
        }
}