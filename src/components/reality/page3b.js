import React, {Component} from 'react';
import './xmas.css';
import {RemoteButton} from "./index";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import sound from "./knocks.m4a";
import {evaluate} from "mathjs";
import PopUp from "../game/PopUp";
import BuzzerPopUp from "./BuzzerPopUp";




export default class Page3b extends Component {
    componentDidMount() {
        document.title = "ESCovid: Last Step!"
        if (this.props.curr_stage != 2) {
            this.props.stage(2)
        }
    }


    state = {
        cs_pass_open: false,
        comp_open: false,
        pics_open: false,
        map: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/map.jpeg?raw=true",
        cs_pass: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/password.png?raw=true",
        map_math: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/map-math.png?raw=true",
        colors: ["white", "yellow"],
        pass: "",
        computer: false,
        slides: false,
        slideA: 0,
        slideB: 0,
        slideC: 0,
        slideD: 0,
        slideE: 0,
        slideF: 0,
        slideG: 0,
        slideH: 0,
    };

    check_slides = () => {
        this.temp = (this.state.slideB === 0) && (this.state.slideC === 0) && ((this.state.slideD === 1) || (this.state.slideE === 1)) && (this.state.slideF === 0) && (this.state.slideG === 0) && (this.state.slideH === 1)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            slides: this.temp
        });
    };





    render() {
        return(
            <div>
                <RemoteButton/>
                <div align={"center"}>
                    {this.state.slides ? <BuzzerPopUp/> : null}
                    {/*<ReactPlayer url='https://www.youtube.com/watch?v=kcAWdel032U' loop={"true"} volume={0} width="95%" config={{*/}
                {/*    youtube: {*/}
                {/*        playerVars: {*/}
                {/*            start: 33,*/}
                {/*            end: 35,*/}
                {/*        }*/}
                {/*    }*/}
                {/*}}/>*/}
                {/*<ReactAudioPlayer src={sound} autoPlay="true" controls/>*/}
                <div style={{width: "80%"}} align={"center"}>
                    <h1>America's Got Talent</h1>
                    <h6>This next part will eventually be an audio recording</h6>
                    <p>
                        <br/>Person 1: Hello, and welcome back to a new season of America’s Got Talent and we’ve got a surprise for you.
                        <br/>Person 2: Yes, this year we have a new and improved crossover show that will keep you all on the edge of your seats.
                        <br/>Person 1: Our good friends over at the bachelor have a problem on their hands. Their contestants keep getting divorced! Can you believe that?!
                        <br/>Person 2: We got to thinking, you know, they just aren’t picking the right final couples. They are letting emotions get in the way, and it’s cloudying their thought proces.
                        <br/>Person 1: Over here at America’s Got Talent we know how to find the best contestants: A good old talent show
                        <br/>Person 2: Instead of following their heart, this year’s bachelor will be matched with a prospective spouse through a comprehensive series of contests to determine their soul mate.
                        <br/>Person 1: So be sure to tune in Monday’s on your very local America’s Got Talent station to follow along slowly thin the herd
                        <br/>Person 2: And don’t miss Thursday’s on channel 1765 where the Bachelor will catch you up on all of the drama going on behind the scenes.
                        <br/> Person 1: You won’t want to miss it!<br/><br/>
                    </p>
                </div>
                    <div className="scaling-svg-container" style={{width: "80%", paddingBottom: "6%"}}>
                        <svg className="scaling-svg" viewBox="0 0 570 40">
                            <circle cx="40" cy="0" r="30" onClick={() => this.setState({slideA: (this.state.slideA + 1) % 2})} fill={this.state.colors[this.state.slideA]} />
                            <circle cx="110" cy="0" r="30" onClick={() => this.setState({slideB: (this.state.slideB + 1) % 2})} fill={this.state.colors[this.state.slideB]} />
                            <circle cx="180" cy="0" r="30" onClick={() => this.setState({slideC: (this.state.slideC + 1) % 2})} fill={this.state.colors[this.state.slideC]} />
                            <circle cx="250" cy="0" r="30" onClick={() => this.setState({slideD: (this.state.slideD + 1) % 2})} fill={this.state.colors[this.state.slideD]} />
                            <circle cx="320" cy="0" r="30" onClick={() => this.setState({slideE: (this.state.slideE + 1) % 2})} fill={this.state.colors[this.state.slideE]} />
                            <circle cx="390" cy="0" r="30" onClick={() => this.setState({slideF: (this.state.slideF + 1) % 2})} fill={this.state.colors[this.state.slideF]} />
                            <circle cx="460" cy="0" r="30" onClick={() => this.setState({slideG: (this.state.slideG + 1) % 2})} fill={this.state.colors[this.state.slideG]} />
                            <circle cx="530" cy="0" r="30" onClick={() => this.setState({slideH: (this.state.slideH + 1) % 2})} fill={this.state.colors[this.state.slideH]} />
                            <text x="40" y="15" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">A</text>
                            <text x="110" y="15" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">B</text>
                            <text x="180" y="15" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">C</text>
                            <text x="250" y="15" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">D</text>
                            <text x="320" y="15" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">E</text>
                            <text x="390" y="15" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">F</text>
                            <text x="460" y="15" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">G</text>
                            <text x="530" y="15" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">H</text>
                        </svg>
                    </div>
                    <img src={"https://raw.githubusercontent.com/jgraves123/escovid2/reality/images/reality/buzzers.png?raw=true"} width={"70%"}/>
                    <div align={"center"} style={{padding: "20px"}}>
                        <button className="button" onClick={this.check_slides}><h3>Check Order</h3></button>
                    </div>
                </div>
            </div>
        );
    }
}

