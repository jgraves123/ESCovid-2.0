import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TimerNav from "./timerNav";
import Leader from "./leaderboard";
import { Gform, Tumblr1, Tumblr2, Final, Congrats, Instructions, Escovid} from "../escovid";
import {Page1, Page2, Page3, Instructions2} from "../xmas";
import Headroom from 'react-headroom';
import {Navigation} from "../index";

export function Progress(props){
    return(
        <div>
            <div className="progress" style={{backgroundColor: "white", borderWidth: 1, borderColor: "black", borderStyle: "solid"}}>
                <div className="progress-bar" role="progressbar" style={{width: props.p + "%", backgroundColor: "#fcc81a"}} aria-valuenow={props.p}
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
    )
}

function getState(props) {
    let game_name = localStorage.getItem('game_name');
    let team_name = localStorage.getItem('team_name');
    let hints = localStorage.getItem('hints');
    let stage = localStorage.getItem('stage');
    let total_stages = localStorage.getItem('total_stages');
    let timing = localStorage.getItem('timing');
    let time = localStorage.getItem('time');
    let used_hints = localStorage.getItem('used_hints');
    let track = localStorage.getItem('track');

    if (game_name == null) {
        game_name = "escovid19"//props.game_name;
    }
    if (hints == null) {
        hints = 0;
    }
    if (stage == null) {
        stage = 0;
    }
    if (total_stages == null) {
        total_stages = 3;//props.total_stages;
    }
    if (timing == "true") {
        timing = true;
    } else {
        timing = false;
    }
    if (used_hints == null) {
        used_hints = [];
    } else {
        console.log(used_hints)
        used_hints = JSON.parse(used_hints)
    }
    if (track == "true") {
        track = true;
    } else {
        track = false;
    }
    return [game_name, team_name, parseInt(hints), parseInt(stage), parseInt(total_stages), timing, time, used_hints, track]
};

class Game extends Component {
    constructor(props) {
        super(props);
        this.update_stage = this.update_stage.bind(this);
        this.change_time = this.change_time.bind(this);
    }

    saved = getState(this.props);

    state = {
        game_name: this.saved[0],
        team_name: this.saved[1],
        hints: this.saved[2],
        stage: this.saved[3],
        total_stages: this.saved[4],
        timing: this.saved[5],
        time: this.saved[6],
        used_hints: this.saved[7],
        track: this.saved[8],
    }

    use_hint = (event) => {
        const name = event.target.textContent;
        if (!this.state.used_hints.includes(name)) {
            const new_hints = this.state.hints + 1;
            this.state.used_hints.push(name)
            this.state.hints = new_hints;
            localStorage.setItem('hints', new_hints)
            localStorage.setItem('used_hints', JSON.stringify(this.state.used_hints))
        }
    }

    set_game_name = (name) => {
        if (this.state.game_name !== name) {
            this.setState({game_name: name});
            localStorage.setItem('game_name', name);
        }
        console.log(this.state.team_name);
    }

    set_team_name = (name, track) => {
        if (this.state.team_name !== name || this.state.track !== track) {
            this.setState({team_name: name,
            track: track});
            localStorage.setItem('team_name', name);
            localStorage.setItem('track', track);
        }
        console.log(this.state.team_name);
    }

    update_stage(stage) {
        this.state.stage = stage;
        // this.setState({stage: stage});
        localStorage.setItem('stage', stage)
        window.location.reload()
    }

    change_time = (run) => {
        this.setState({timing: run});
        localStorage.setItem('timing', run)
    }


    render() {
        return (
            <div className="App">
                <Router>
                    <Headroom>
                    <Navigation/>
                    <Progress p={(this.state.stage * 100)/this.state.total_stages}/>
                    <TimerNav count_time={this.state.timing}  game={this.state.game_name} stage={this.state.stage} name={this.state.team_name} num_hint={this.state.hints} use_hint={this.use_hint}/>
                    </Headroom>
                    <Switch>
                        <Route path="/escovid" exact component={() => <Instructions setName = {this.set_team_name} name={this.state.team_name} gameName={this.set_game_name}/>} />
                        {/*<Route path="/escovid" exact component={() => <Escovid  page={"start"} setName = {this.set_team_name} name={this.team_name}/>} />*/}
                        <Route path="/escovid/gform" exact component={() => <Gform counting={this.state.timing} start={this.change_time} name={this.state.team_name} curr_stage={this.state.stage} stage={this.update_stage}/>} />
                        <Route path="/escovid/tumblr" exact component={() => <Tumblr1 game_name={this.state.game_name} curr_stage={this.state.stage} stage={this.update_stage}/>} />
                        <Route path="/escovid/auth" exact component={() => <Tumblr2 game_name={this.state.game_name} curr_stage={this.state.stage} stage={this.update_stage}/>} />
                        <Route path="/escovid/final" exact component={() => <Final curr_stage={this.state.stage} stage={this.update_stage} timing={this.state.timing} stop={this.change_time}/>}/>
                        <Route path="/escovid/trappist" exact
                               component={() => <Congrats planet="TRAPPIST-1" />}/>
                        <Route path="/escovid/gliese" exact
                               component={() => <Congrats planet="Gliese 876"/>}/>
                        <Route path="/escovid/leaderboard" exact component={() => <Leader track={this.state.track} game={this.state.game_name} team={this.state.team_name} hints={this.state.hints}/>}/>

                        <Route path="/anon" exact component={() => <Instructions2 setName = {this.set_team_name} name={this.state.team_name} gameName={this.set_game_name}/>} />
                        {/*<Route path="/escovid" exact component={() => <Escovid  page={"start"} setName = {this.set_team_name} name={this.team_name}/>} />*/}
                        <Route path="/anon/page1" exact component={() => <Page1 counting={this.state.timing} start={this.change_time} name={this.state.team_name} curr_stage={this.state.stage} stage={this.update_stage}/>} />
                        <Route path="/anon/office" exact component={() => <Page2 game_name={this.state.game_name} curr_stage={this.state.stage} stage={this.update_stage}/>} />
                        <Route path="/anon/home" exact
                               component={() => <Page3 curr_stage={this.state.stage} stage={this.update_stage} timing={this.state.timing} stop={this.change_time}/>}/>
                        <Route path="/anon/leaderboard" exact component={() => <Leader track={this.state.track} game={this.state.game_name} team={this.state.team_name} hints={this.state.hints}/>}/>

                    </Switch>
                </Router>
            </div>)
    }
}

export default Game;
