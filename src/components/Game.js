import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TimerNav, Final, Congrats, Escovid, Leader} from ".";

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

class Game extends Component {
    constructor(props) {
        super(props);
        this.update_stage = this.update_stage.bind(this);
    }

    state = {
        game_name: this.props.game_name,
        team_name: null,
        hints: 0,
        stage: 2,
        total_stages: 3, //this.props.total_stages,
        finished: false,
        time: null,
    }

    use_hint = () => {
        this.setState({hints: this.state.hints + 1})
    }

    set_team_name = (name) => {
        this.setState({team_name: name})
    }

    update_stage(stage) {
        // event.preventDefault();
        this.setState({stage: stage})
        // this.state.stage = this.state.stage + 1;
        console.log(this.state.stage)
    }

    finished = () => {
        console.log("I'm finished!!!");
        this.setState({finished: true});
        console.log(this.state.finished);
    }

    time = (sec, min, hrs) => {
        this.setState({time: sec})
    }


    render() {
        return (
            <div className="App">
                <Router>
                    <Progress p={(this.state.stage * 100)/this.state.total_stages}/>
                    <TimerNav finish={this.state.finished} time={this.time} current/>
                    <Switch>
                        <Route path="/escovid" exact component={() => <Escovid page={"start"} />} />
                        <Route path="/escovid/gform" exact component={() => <Escovid page={"gform"} />} />
                        <Route path="/escovid/tumblr" exact component={() => <Escovid page={"tumblr"} phase={1} level={19}/>} />
                        <Route path="/escovid/auth" exact component={() => <Escovid page={"tumblr"} phase={2} level={19} />} />
                        <Route path="/escovid/final" exact component={() => <Final stage={this.update_stage}/>}/>
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
