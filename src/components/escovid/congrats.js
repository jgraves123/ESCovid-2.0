import React, {Component} from 'react';
import "../index.css";
import Confetti from 'react-confetti'
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import music from './end.mp3'
import {Link} from "react-router-dom";
import emailjs from "emailjs-com";
//...


// Render a YouTube video player



class Congrats extends Component {
    componentDidMount(){
        document.title = "ESCovid: Last Step!"
        console.log("hello my fine fellow")
    }

    state = {
        sec: parseInt(localStorage.getItem('seconds')),
        min: parseInt(localStorage.getItem('minutes')),
        hrs: parseInt(localStorage.getItem('hours'))
    }

    render(){
        //send drum beats played

        return(

            <div>
                <body style={{backgroundColor: "#3174e0", padding: "10px"}}>
                <Confetti/>
                <div align={"center"}>
                    <div align={"center"} className={"middle"} style={{width: "70%"}}>
                <div align="center">
                    <h1>Congratulations!!</h1>
                    <ReactPlayer url='https://www.youtube.com/watch?v=fhYMh6KTJMQ' playing="true" loop="true" volume="null" muted="true" width="95%"/>
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
                </div>
                <div align={"center"}>
                <ReactAudioPlayer src={music} autoPlay="true" controls/>
                    <div align={"center"} style={{margin: "10", maxHeight: "400px", overflow: "auto", width: "95%"}}>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdRNn2uICAC4WlS4blWU4G07OpPJJU_M5NPN17GlNVfWP7Z2A/viewform?embedded=true"
                        width="640" height="2427" frameBorder="0" marginHeight="0"
                        marginWidth="0">Loading…
                    </iframe>
                    </div>
                    <div style={{paddingBottom: 10}}>
                    <Link to="/escovid/leaderboard">
                        <button className="button"><h2>Join the Leaderboard</h2></button>
                    </Link>
                    </div>
                </div>
                    </div>
                </div>
                </body>
            </div>
        )
    }
}

export default Congrats;