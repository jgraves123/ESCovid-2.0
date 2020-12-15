import React, {Component} from 'react';
import "./App.css";
import Confetti from 'react-confetti'

function home(){
    console.log("here too?")
    window.location.reload();
}


class Decision extends Component {


    render(){
        //send drum beats played

        return(
            <div>
                <body>
                <Confetti/>
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Setting off on a Voyage</h1>
                    </div>
                </header>
                <nav id="navbar">
                    <div className="container">
                        <ul align='center'>
                            <li><a href="home">Return</a></li>
                        </ul>
                    </div>
                </nav>

                {/*<section><div className="container"><img src={ship} className="image" usemap="#wayout" alt=""/>*/}
                {/*    <map name="wayout">*/}
                {/*        <area shape="polygon" coords="1, 1, 20vw, 1, 20vw, 20vw, 1, 20vw" title="View" href="gliese876.html"></area>*/}
                {/*    </map>*/}
                {/*    </div></section>*/}
                <div height="400">
                </div>
                <section>
                    <div className="scaling-svg-container">
                        <svg className="scaling-svg" viewBox="0 0 1600 900"> {/* Needs auto
                         updating*/}
                            <rect x="900" y="20" width="150" height="150" className="clickable"/>
                            <rect x="50" y="20" width="150" height="150" className="clickable"/>
                        </svg>
                    </div>
                </section>
                <section id="showcase"><div className="container">
                    <h3>Lift Off in &nbsp;&nbsp;3...&nbsp;&nbsp; 2...&nbsp;&nbsp; 1...</h3>
                </div></section>
                </body>
                {/*<footer id="main-footer">*/}
                {/*    <h3>Contact info?</h3>*/}
                {/*</footer>*/}
            </div>
        )
    }
}

export default Decision;