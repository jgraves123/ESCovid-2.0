import React, {Component} from 'react';
import "../index.css";
import Confetti from 'react-confetti'
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import music from './end.mp3'
import {Link} from "react-router-dom";
import emailjs from "emailjs-com";
import MailchimpSubscribe from "react-mailchimp-subscribe";
//...


// Render a YouTube video player



class Congrats extends Component {
    componentDidMount(){
        document.title = "Congrats"
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
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdORxBBH4uy6OKIPYm7cu4sD9XbqbibUWIMciLRUI_k7mxc1g/viewform?embedded=true"
                            width="640" height="2550" frameBorder="0" marginHeight="0"
                            marginWidth="0">Loading…
                        </iframe>
                    </div>
                    <div align='right'>
                        <div style={{width: "90%"}}>
                            <div align='left' className="sectiontitle">
                                <h1>Outreach</h1>
                            </div>
                            <div align='center' style={{padding: "2vw"}} >
                                {/*<h3>A sentence or two overview.</h3>*/}
                                <div style={{display: "inline-block", marginRight: "4vw",
                                    width: "50%", height: "24vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/snake-eyes.png?raw=true")', backgroundSize: "cover"}}>
                                    <div style={{paddingLeft: "200", width: "100%", float: "left", height: "40vw", paddingTop: "5vw", overflow: "hidden", align: "center"}}>
                                        <div style={{backgroundColor: "rgb(255,255,255, .5)", padding: "2vw", align: "center"}}>
                                            <h2 style={{fontSize: "2vw"}}>Email Sign Up</h2>
                                            <MailchimpSubscribe
                                                url={"https://brown.us1.list-manage.com/subscribe/post?u=8c01bb38ebee3297a0d1b426e&amp;id=2b76c51e11"}
                                                render={({ subscribe, status, message }) => (
                                                    <div className={"testing"}>
                                                        <MailchimpSubscribe url={"https://brown.us1.list-manage.com/subscribe/post?u=8c01bb38ebee3297a0d1b426e&amp;id=2b76c51e11"} onSubmitted={formData => subscribe(formData)} />
                                                        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                                                        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                                                        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                                                    </div>
                                                )}
                                            />
                                            <Link to="https://www.facebook.com/VIPEREscapeGames/?__cft__[0]=AZW6r2kwJlftt0gFsjclZPdmMSO5wa93cwN1hnksgD7rTE56kVeO4B_elw9so-IUS9pDpxA_kLuf_kW55pfpCmta7wA5mZ5hp9pJAF_47BF7CzDCRyl6GdS_Zc8e8MzD31JRqFQbU12c_NPt58eEbKoC&__tn__=H-R"  style={{color: "navy"}}><strong>Facebook Page</strong></Link>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "inline-block", marginLeft: "4vw", padding: "1vw",
                                    width: "30%", height: "24vw", backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/snake-eyes.png?raw=true")', backgroundSize: "cover", verticalAlign: "top"}}>
                                    <div style={{backgroundColor: "rgb(255,255,255, .5)", padding: "1vw", align: "center"}}>
                                        <h2 style={{fontSize: "2vw"}}>Support VIPER</h2>
                                        <img src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/venmo.JPG?raw=true" width={"65%"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
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