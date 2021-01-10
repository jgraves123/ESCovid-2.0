import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TimerNav, Final, Congrats, Escovid,} from ".";

class Game extends Component {

    state = {
        finished: false,
        time: "00:00:00"
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
                    <TimerNav finish={this.state.finished} time={this.time} current/>
                    <Switch>
                        <Route path="/final" exact component={() => <Final finishNow={this.finished} finished={this.state.finished}/>}/>
                        <Route path="/trappist" exact
                               component={() => <Congrats planet="TRAPPIST-1" finishNow={this.finished} finished={this.state.finished}/>}/>
                        <Route path="/gliese" exact
                               component={() => <Congrats planet="Gliese 876"/>}/>
                        <Route path="/testing" exact component={() => <Escovid/>}/>
                    </Switch>
                </Router>
            </div>)
    }
}

export default Game;
