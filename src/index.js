import React, {Component} from 'react';
import GliesePopUp from "./GliesePopUp";
import TrappistPopUp from "./TrappistPopUp";
import ComparePopUp from "./ComparePopUp";
import HoverPopUp from "./HoverPopUp";
import ReactDOM from 'react-dom';
import './index.css';
import Decision from "./decision";
// import Confetti from 'react-confetti'





class Home extends Component {
    state = {
        gliese: false,
        trappist: false,
        compare: false
    };


    GliesePop = () => {
        console.log("I'm here")
        this.setState({
            gliese: !this.state.gliese
        });
    };

    TrappistPop = () => {
        console.log("I'm here")
        this.setState({
            trappist: !this.state.trappist
        });
    };

    ComparePop = () => {
        console.log("I'm here")
        this.setState({
            compare: !this.state.compare
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
                    {this.state.gliese ? <GliesePopUp toggle={this.GliesePop} /> : null}
                    {this.state.trappist ? <TrappistPopUp toggle={this.TrappistPop} /> : null}
                    {this.state.compare ? <ComparePopUp toggle={this.ComparePop} /> : null}
                </div>
                <section>
                    <div className="scaling-svg-container">
                        <svg className="scaling-svg" viewBox="0 0 1600 900"> {/* Needs auto
                         updating*/}
                            <image width="100%" height="100%" href="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/ship.jpg?raw=true"/>
                            <rect x="1005" y="200" width="380" height="400" className="clickable-done" onClick={this.GliesePop}/>
                            {/*{this.state.seen ? <PopUp toggle={this.togglePop} /> : null}*/}
                            <rect x="590" y="200" width="410" height="400" className="clickable-done" onClick={this.ComparePop}/>
                            <rect x="220" y="200" width="360" height="400" className="clickable-done" onClick={this.TrappistPop}/>
                        </svg>
                    </div>
                </section>
                <div align="center">
                    <h2>Time to make your decision:</h2>
                    <button className="button">TRAPPIST-1</button>
                    <button className="button">Gliese 876</button>
                </div>
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
