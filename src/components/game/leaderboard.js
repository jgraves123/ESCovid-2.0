import React, {Component} from 'react';
import "../index.css";
import "./leaderboard.css";
import Griddle, {plugins} from 'griddle-react';
import emailjs from "emailjs-com";
//npm install --save griddle-react, http://griddlegriddle.github.io/Griddle/


class Leader extends Component {

    constructor(props){
        super(props)
        document.title = "Tumblr 2!"

        this.data19 = [
            { Team: 'Woba Boba Baby Yodas', Time:115, Hints:5 },
            { Team: 'READ', Time: 60, Hints:0},
            { Team: 'Galileo', Time: 90, Hints:0},
        ];

        this.data20 = [
            { Team: 'The Numbnuts', Time: 90, Hints:0},
            { Team: 'GROGU', Time: 90, Hints:1},
        ];

        this.sortProperties = [
            { id: 'Time', sortAscending: true },
            { id: 'Hints', sortAscending: true }
        ];

        if (this.props.track) {
            const sec =  parseInt(localStorage.getItem('seconds'));
            const min =  parseInt(localStorage.getItem('minutes'));
            const hrs = parseInt(localStorage.getItem('hours'));

            const templateId = 'template_2ggiung';
            const templateParams = {team_name: this.props.team, game_name: this.props.game, hours: hrs, minutes: min, seconds: sec, hints: this.props.hints}
            emailjs.init("user_oJTXXccIGB7j0VtXCQBjm");
            emailjs.send(
                'default_service', templateId, templateParams).then(res => {
                console.log('Email successfully sent!')
            })
                // Handle errors here however you like, or use a React error boundary
                .catch(err => console.error('Oh well, you failed. Here some thoughts on the error' +
                    ' that occured:', err))

            if (this.props.game == "escovid19") {
                this.data19.push({ Team: this.props.team, Time: (hrs*60) + min + (sec/60.0), Hints: this.props.hints})
            }
            if (this.props.game == "escovid20") {
                this.data20.push({ Team: this.props.team, Time: (hrs*60) + min + (sec/60.0), Hints: this.props.hints})
            }
        }


    }

    componentDidMount(){
        document.title = "ESCovid: Last Step!"
    }




    render() {
        return(
            <section>
                <div className="container" align={"center"} width={"50%"}>
                    <h2>ESCovid-19 Leaderboard</h2>
                    <Griddle data={this.data19.slice(0,5)} plugins={[plugins.LocalPlugin]} sortProperties={this.sortProperties}/>
                    <h2>ESCovid-20 Leaderboard</h2>
                    <Griddle data={this.data20.slice(0,5)} plugins={[plugins.LocalPlugin]} sortProperties={this.sortProperties}/>
                </div>
            </section>
        )
    }
}

export default Leader;