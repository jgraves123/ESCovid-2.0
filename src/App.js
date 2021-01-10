import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Final, About, Contact, Congrats, Escovid, Leader, Game } from "./components";
import GliesePopUp from "./components/GliesePopUp";
import moment from "moment";

class App extends Component {
  time = moment().format('h:mm:ss a');

  state = {
    startTime: this.time
  };

  render() {
    return (
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/gliesepop" exact component={() => <GliesePopUp toggle="" />} />
              <Route path="/escovid" exact component={() => <Escovid page={"start"} />} />
              <Route path="/escovid/gform" exact component={() => <Escovid page={"gform"} />} />
              <Route path="/escovid/tumblr" exact component={() => <Escovid page={"tumblr"} phase={1} level={19}/>} />
              <Route path="/escovid/auth" exact component={() => <Escovid page={"tumblr"} phase={2} level={19} />} />
              <Route path="/escovid/final" exact component={() => <Final/>}/>
              <Route path="/final" exact component={() => <Game startTime={this.state.startTime}/>} />
              <Route path="/contact" exact component={() => <Contact />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/trappist" exact component={() => <Game />} />
              <Route path="/gliese" exact component={() => <Game />} />
              <Route path="/testing" exact component={() => <Game />} />
              <Route path="/leaderboard" exact component={() => <Leader />} />
            </Switch>
            <Footer />
          </Router>
        </div>
    )
  }

}

export default App;
