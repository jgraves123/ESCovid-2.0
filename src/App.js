import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Final, Contact, Congrats, Escovid, Leader } from "./components";
import GliesePopUp from "./components/GliesePopUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <Final />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/trappist" exact component={() => <Congrats planet="TRAPPIST-1" />} />
          <Route path="/gliese" exact component={() => <Congrats planet="Gliese 876" />} />
          <Route path="/testing" exact component={() => <Escovid level = {20} part = "tumblr1"/>} />
          <Route path="/leaderboard" exact component={() => <Leader />} />
          <Route path="/gliesepop" exact component={() => <GliesePopUp toggle="" />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
