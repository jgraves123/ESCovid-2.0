import React, {Component} from 'react';
import PopUp from "./PopUp";
import ReactDOM from 'react-dom';
import './index.css';
import Decision from "./decision";
import Confetti from 'react-confetti'



class Home extends Component {
    state = {
        seen: false
    };

    togglePop = () => {
        console.log("I'm here")
        this.setState({
            seen: !this.state.seen
        });
    };

    openDecision = () => {
        console.log("why")
        ReactDOM.render(
            <React.StrictMode>
                <Decision />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }




    render() {
        return(
            <div>
                <body>
                {/*<Confetti/>*/}
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Setting off on a Voyage</h1>
                    </div>
                </header>
                {/*<nav id="navbar">*/}
                {/*    <div className="container">*/}
                {/*        <ul align='center'>*/}
                {/*            <li><a onClick = "window.location.reload();">Home</a></li>*/}
                {/*            <li><a onClick = "window.location.reload();">Gliese 876</a></li>*/}
                {/*            <li><a onClick = "window.location.reload();">TRAPPIST-1</a></li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</nav>*/}

                {/*<section><div className="container"><img src={ship} className="image" usemap="#wayout" alt=""/>*/}
                {/*    <map name="wayout">*/}
                {/*        <area shape="polygon" coords="1, 1, 20vw, 1, 20vw, 20vw, 1, 20vw" title="View" href="gliese876.html"></area>*/}
                {/*    </map>*/}
                {/*    </div></section>*/}
                <div height="400">
                    <div className="btn" onClick={this.togglePop}>
                        <button>New User?</button>
                    </div>
                    {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
                </div>
                <section>
                    <div className="scaling-svg-container">
                        <svg className="scaling-svg" viewBox="0 0 1600 900"> {/* Needs auto
                         updating*/}
                            <image width="100%" height="100%" href="https://raw.githubusercontent.com/jgraves123/escovid/master/control.jpg?raw=true"/>
                            <rect x="900" y="20" width="150" height="150" className="clickable" onClick={this.togglePop}/>
                            {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
                            <rect x="50" y="20" width="150" height="150" className="clickable" onClick={this.openDecision}/>
                        </svg>
                    </div>
                </section>
                <section id="showcase"><div className="container">
                    <h3 align="center">Lift Off in &nbsp;&nbsp;3...&nbsp;&nbsp; 2...&nbsp;&nbsp; 1...</h3>
                </div></section>
                </body>
                {/*<footer id="main-footer">*/}
                {/*    <h3>Contact info?</h3>*/}
                {/*</footer>*/}
            </div>
        );
    }
}



ReactDOM.render(<Home />, document.getElementById("root"));

export default Home;
