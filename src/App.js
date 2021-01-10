import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Contact, Congrats, Escovid, Final, Leader } from "./components";
import GliesePopUp from "./components/GliesePopUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/about" exact component={() => <Escovid page={"start"} />} />
          <Route path="/trappist" exact component={() => <Congrats planet="TRAPPIST-1" />} />
          <Route path="/gliese" exact component={() => <Congrats planet="Gliese 876" />} />
          <Route path="/testing" exact component={() => <Escovid/>} />
          <Route path="/leaderboard" exact component={() => <Leader />} />
          <Route path="/gliesepop" exact component={() => <GliesePopUp toggle="" />} />
          <Route path="/escovid" exact component={() => <Escovid page={"start"} />} />
          <Route path="/escovid/gform" exact component={() => <Escovid page={"gform"} />} />
          <Route path="/escovid/tumblr" exact component={() => <Escovid page={"tumblr"} phase={1} level={19}/>} />
          <Route path="/escovid/auth" exact component={() => <Escovid page={"tumblr"} phase={2} level={19} />} />
          <Route path="/escovid/final" exact component={() => <Final/>}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
