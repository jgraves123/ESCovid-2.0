import React, {Component} from 'react';
import "../index.css";
import "./leaderboard.css";
import Griddle, {plugins} from 'griddle-react';
import emailjs from "emailjs-com";
import {dataesc19, dataesc20, dataanon} from "../site/leaderdata";

//npm install --save griddle-react, http://griddlegriddle.github.io/Griddle/


class Leader extends Component {

    constructor(props){
        super(props)
        document.title = "Tumblr 2!"

        this.sortProperties = [
            { id: 'Time', sortAscending: true },
            { id: 'Hints', sortAscending: true }
        ];

        this.data = [];

        const sec =  parseInt(localStorage.getItem('seconds'));
        const min =  parseInt(localStorage.getItem('minutes'));
        const hrs = parseInt(localStorage.getItem('hours'));

        if (this.props.track) {

            const templateId = 'template_2ggiung';
            const templateParams = {
                team_name: this.props.team,
                game_name: this.props.game,
                hours: hrs,
                minutes: min,
                seconds: sec,
                hints: this.props.hints
            }
            emailjs.init("user_oJTXXccIGB7j0VtXCQBjm");
            emailjs.send(
                'default_service', templateId, templateParams).then(res => {
                console.log('Email successfully sent!')
            })
                // Handle errors here however you like, or use a React error boundary
                .catch(err => console.error('Oh well, you failed. Here some thoughts on the error' +
                    ' that occured:', err))
        }
        if (this.props.game === "escovid19") {
            this.data = dataesc19;
            this.data.push({ Team: this.props.team, Time: (hrs*60) + min + (sec/60.0), Hints: this.props.hints})
        }

        if (this.props.game === "escovid20") {
            this.data = dataesc20;
            this.data.push({ Team: this.props.team, Time: (hrs*60) + min + (sec/60.0), Hints: this.props.hints})
        }

        if (this.props.game === "anonymous") {
            this.data = dataanon;
            this.data.push({ Team: this.props.team, Time: (hrs*60) + min + (sec/60.0), Hints: this.props.hints})
        }


    }

    componentDidMount(){
        document.title = "ESCovid: Last Step!"
    }



    render() {
        return(
            <section>
                <div className="container" align={"center"} style={{margin: "20px"}}>
                    <h1>Leaderboard</h1>
                    <div>
                    <Griddle components={{Layout: ({ Table, Pagination, Filter, SettingsWrapper }) => (
                            <div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
                                <Filter/>
                                <Table />
                                <Pagination/>
                            </div>
                        )}} data={this.data.slice(0,5)} plugins={[plugins.LocalPlugin]} sortProperties={this.sortProperties}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Leader;