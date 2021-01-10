import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Final, About, Contact, Congrats, Escovid, Leader, Game } from "./components";
import GliesePopUp from "./components/GliesePopUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/final" exact component={() => <Game sec={0} min={0} hrs={0}/>} />
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
  );
}

export default App;
