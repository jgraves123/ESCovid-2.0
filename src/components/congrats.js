import React, {Component} from 'react';
import "./index.css";
import Confetti from 'react-confetti'
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import music from './end.mp3'
import {Link} from "react-router-dom";
//...


// Render a YouTube video player



class Congrats extends Component {

    leaderboard = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdRNn2uICAC4WlS4blWU4G07OpPJJU_M5NPN17GlNVfWP7Z2A/viewform")
    }

    render(){
        //send drum beats played

        return(

            <div>
                <body>
                <ReactAudioPlayer src={music} autoPlay="true"/>
                <Confetti/>
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Congratulations!!</h1>
                    </div>
                </header>
                <div align="center">
                    <ReactPlayer url='https://www.youtube.com/watch?v=fhYMh6KTJMQ' playing="true" loop="true" volume="null" muted="true"/>
                </div>
                {/*<section><div className="container"><img src={ship} className="image" usemap="#wayout" alt=""/>*/}
                {/*    <map name="wayout">*/}
                {/*        <area shape="polygon" coords="1, 1, 20vw, 1, 20vw, 20vw, 1, 20vw" title="View" href="gliese876.html"></area>*/}
                {/*    </map>*/}
                {/*    </div></section>*/}
                <div height="400">
                </div>

                <div align="center">
                    <h2>You have successfully set course for {this.props.planet}! <br/> The fate of the world is in your hands.</h2>
                    <Link to="/leaderboard">
                    <button className="button" onClick = {this.leaderboard}><h2>Join the Leaderboard</h2></button>
                    </Link>
                </div>
                </body>
                {/*<footer id="main-footer">*/}
                {/*    <h3>Contact info?</h3>*/}
                {/*</footer>*/}
            </div>
        )
    }
}

export default Congrats;