import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TimerNav, Final, Congrats, Escovid,} from ".";
import {useStopwatch} from "react-timer-hook";

function Game() {
    // const {
    //     seconds,
    //     minutes,
    //     hours,
    //     days,
    //     isRunning,
    //     start,
    //     pause,
    //     reset,
    // } = useStopwatch({ autoStart: true });


    return (
    <div className="App">
        <Router>
            <TimerNav sec={0} min={0} hrs={0}/>
            <Switch>
                <Route path="/final" exact component={() => <Final />} />
                <Route path="/trappist" exact component={() => <Congrats planet="TRAPPIST-1" />} />
                <Route path="/gliese" exact component={() => <Congrats planet="Gliese 876" />} />
                <Route path="/testing" exact component={() => <Escovid level = {20} part = "tumblr1"/>} />
            </Switch>
        </Router>
    </div>);
}

export default Game;
