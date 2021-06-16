import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Room,
  Game,
  Footer
} from "./components";
import "./components/site/home.css";
import moment from "moment";

class App extends Component {
  time = moment().format('h:mm:ss a');

  state = {
    startTime: this.time,
  };

  render() {
    return (
        <div className="App" style={{position: "relative", minHeight: "100vh"}}>
          <Router>
            <div style={{paddingBottom: "50px"}}>
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/escovid" exact component={() => <Game game_name={"escovid19"} total_stages={3}/>} />
              <Route path="/anon" exact component={() => <Game game_name={"anon"} total_stages={3}/>} />
              <Route path="/reality" exact component={() => <Game game_name={"reality"} total_stages={4}/>} />
              <Route path="/reality/start" exact component={() => <Game />} />
              <Route path="/reality/bakeoff" exact component={() => <Game />} />
              <Route path="/reality/survivor" exact component={() => <Game />} />
              <Route path="/reality/council" exact component={() => <Game />} />
              <Route path="/reality/agt" exact component={() => <Game />} />
              <Route path="/reality/bachelor" exact component={() => <Game />} />
              <Route path="/reality/sofa" exact component={() => <Game />} />
              <Route path="/reality/givtime" exact component={() => <Game />} />
              <Route path="/reality/leaderboard" exact component={() => <Game />} />
              <Route path="/contact" exact component={() => <Contact />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/rooms" exact component={() => <Room />} />
            </Switch>
          </div>
            <Footer/>
          </Router>
        </div>
    )
  }

}

export default App;
