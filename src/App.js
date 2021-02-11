import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Final, About, Contact, Congrats, Escovid, Leader, Game } from "./components";
import "./components/site/home.css";
import GliesePopUp from "./components/escovid/GliesePopUp";
import moment from "moment";

class App extends Component {
  time = moment().format('h:mm:ss a');

  state = {
    startTime: this.time,
  };

  render() {
    return (
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/escovid" exact component={() => <Game />} />
              <Route path="/escovid/gform" exact component={() => <Game />} />
              <Route path="/escovid/auth" exact component={() => <Game />} />
              <Route path="/escovid/tumblr" exact component={() => <Game />} />
              <Route path="/escovid/final" exact component={() => <Game />} />
              <Route path="/escovid/trappist" exact component={() => <Game />} />
              <Route path="/escovid/gliese" exact component={() => <Game />} />
              <Route path="/escovid/leaderboard" exact component={() => <Game />} />
              <Route path="/contact" exact component={() => <Contact />} />
              <Route path="/about" exact component={() => <About />} />
            </Switch>
          </Router>
        </div>
    )
  }

}

export default App;
