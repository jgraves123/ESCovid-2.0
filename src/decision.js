import React, {Component} from 'react';
import "./App.css";
import Confetti from 'react-confetti'
import ReactPlayer from 'react-player'

// Render a YouTube video player


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
                        <h1 align='center'>Congratulations!!</h1>
                    </div>
                </header>
                <div align="center">
                <ReactPlayer url='https://www.youtube.com/watch?v=fhYMh6KTJMQ' playing="true" volume="null" muted="true"/>
                </div>
                {/*<section><div className="container"><img src={ship} className="image" usemap="#wayout" alt=""/>*/}
                {/*    <map name="wayout">*/}
                {/*        <area shape="polygon" coords="1, 1, 20vw, 1, 20vw, 20vw, 1, 20vw" title="View" href="gliese876.html"></area>*/}
                {/*    </map>*/}
                {/*    </div></section>*/}
                <div height="400">
                </div>

                <section id="showcase"><div className="container" align="center">
                    <h3 align="center">Lift Off in &nbsp;&nbsp;3...&nbsp;&nbsp; 2...&nbsp;&nbsp; 1...</h3>
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