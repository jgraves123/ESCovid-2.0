import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Home,
  Final,
  About,
  Contact,
  Congrats,
  Escovid,
  Leader,
  Game,
  Footer
} from "./components";
import "./components/site/home.css";
import "./components/escovid/gform.css"
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
              <Route path="/escovid" exact component={() => <Game />} />
              <Route path="/escovid/gform" exact component={() => <Game />} />
              <Route path="/escovid/auth" exact component={() => <Game />} />
              <Route path="/escovid/tumblr" exact component={() => <Game />} />
              <Route path="/escovid/final" exact component={() => <Game />} />
              <Route path="/escovid/trappist" exact component={() => <Game />} />
              <Route path="/escovid/gliese" exact component={() => <Game />} />
              <Route path="/escovid/leaderboard" exact component={() => <Game />} />
              <Route path="/xmas" exact component={() => <Game />} />
              <Route path="/xmas/page1" exact component={() => <Game />} />
              <Route path="/xmas/page2" exact component={() => <Game />} />
              <Route path="/xmas/page3" exact component={() => <Game />} />
              <Route path="/xmas/page4" exact component={() => <Game />} />
              <Route path="/xmas/page5" exact component={() => <Game />} />
              <Route path="/contact" exact component={() => <Contact />} />
              <Route path="/about" exact component={() => <About />} />
            </Switch>
          </div>
            <Footer/>
          </Router>
        </div>
    )
  }

}

export default App;
