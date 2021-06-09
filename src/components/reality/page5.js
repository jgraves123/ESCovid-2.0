import React, {Component} from 'react';
import "../index.css";
import Confetti from 'react-confetti'
import ReactPlayer from 'react-player';
import {Link} from "react-router-dom";
//...


// Render a YouTube video player



export default class Page5 extends Component {
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
                            <ReactPlayer url='https://www.youtube.com/watch?v=oMVe_HcyP9Y' playing="true" loop="true" volume={0.3} width="95%"/>
                        </div>
                        <div height="400">
                        </div>

                        <div align="center">
                            <h2>You have successfully helped Caleb identify the sender of his anonymous email, and helped introduce him to his step sister!</h2>
                        </div>
                        <div align={"center"}>
                            <div align={"center"} style={{margin: "10", maxHeight: "400px", overflow: "auto", width: "95%"}}>
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSdORxBBH4uy6OKIPYm7cu4sD9XbqbibUWIMciLRUI_k7mxc1g/viewform?embedded=true"
                                    width="640" height="2550" frameBorder="0" marginHeight="0"
                                    marginWidth="0">Loading…
                                </iframe>
                            </div>
                            <div style={{paddingBottom: 10}}>
                                <Link to="/anon/leaderboard">
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