import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../index.css";
import "../game/posts.css";
import emailjs from 'emailjs-com';

export default class Tumblr2 extends Component{

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

    handleSubmit (event) {
        const templateId = 'template_2ggiung';
        const templateParams = {team_name: "team 1", game_name: "escovid19", hours: 1, minutes: 26, seconds: 45, hints: 4}
        emailjs.init("user_oJTXXccIGB7j0VtXCQBjm");
        emailjs.send(
            'default_service', templateId, templateParams).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error' +
                ' that occured:', err))
    }

    // sendFeedback (templateId, templateParams) {
    //     emailjs.send(
    //         'user_oJTXXccIGB7j0VtXCQBjm', templateId, templateParams).then(res => {
    //         console.log('Email successfully sent!')
    //     })
    //         // Handle errors here however you like, or use a React error boundary
    //         .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    // }

    render() {
            return (
                <div align={"center"}>
                    <h1>ESCovid-19 Tumblr Auth</h1>
                    <Link to="/escovid/final">
                        <button className="button"><h3>Continue</h3></button>
                    </Link>
                    <button className="button" onClick = {this.handleSubmit}><h2>Send Email</h2></button>
                    {this.props.game_name == "escovid19" ? <h1>Escovid19</h1> : <h1> ESCovid20</h1>}
                </div>
            )
    }
}