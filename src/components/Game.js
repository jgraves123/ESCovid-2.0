import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TimerNav, Final, Congrats, Escovid, Leader} from ".";
import {Gform} from "./escovid"

export function Progress(props){
    return(
        <div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: props.p + "%"}} aria-valuenow={props.p}
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

    if (game_name == null) {
        game_name = props.game_name;
    }
    if (hints == null) {
        hints = 0;
    }
    if (stage == null) {
        stage = 0;
    }
    if (total_stages == null) {
        total_stages = props.total_stages;
    }
    if (timing == "true") {
        timing = true;
    } else {
        timing = false;
    }
    return [game_name, team_name, parseInt(hints), parseInt(stage), parseInt(total_stages), timing, time]
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
    }

    use_hint = () => {
        const new_hints = this.state.hints + 1
        this.setState({hints: new_hints})
        localStorage.setItem('hints', new_hints)
    }

    set_team_name = (name) => {
        this.setState({team_name: name})
        localStorage.setItem('team_name', name)
    }

    update_stage(stage) {
        this.setState({stage: stage});
        localStorage.setItem('stage', stage)
    }

    change_time = (run) => {
        this.setState({timing: run});
        localStorage.setItem('timing', run)
    }

    time = (sec, min, hrs) => {
        this.setState({time: sec})
    }


    render() {
        return (
            <div className="App">
                <Router>
                    <Progress p={(this.state.stage * 100)/this.state.total_stages}/>
                    <TimerNav change_time={this.change_time} count_time={this.state.timing} finish={this.state.finished} time={this.time} current/>
                    <Switch>
                        <Route path="/escovid" exact component={() => <Escovid page={"start"} />} />
                        <Route path="/escovid/gform" exact component={() => <Gform counting={this.state.timing} start={this.change_time}/>} />
                        <Route path="/escovid/tumblr" exact component={() => <Escovid page={"tumblr"} phase={1} level={19}/>} />
                        <Route path="/escovid/auth" exact component={() => <Escovid page={"tumblr"} phase={2} level={19} />} />
                        <Route path="/escovid/final" exact component={() => <Final curr_stage={this.state.stage} stage={this.update_stage} timing={this.state.timing} stop={this.change_time}/>}/>
                        <Route path="/escovid/trappist" exact
                               component={() => <Congrats planet="TRAPPIST-1" />}/>
                        <Route path="/escovid/gliese" exact
                               component={() => <Congrats planet="Gliese 876"/>}/>
                        <Route path="/escovid/leaderboard" exact component={() => <Leader />}/>
                    </Switch>
                </Router>
            </div>)
    }
}

export default Game;
