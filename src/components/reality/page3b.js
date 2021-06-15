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
        slide1: 0,
        slide2: 0,
        slide3: 0,
        slide4: 0,
        slide5: 0,
        slide6: 0,
        slide7: 0,
        slide8: 0,
    };

    check_slides = () => {
        this.temp = (this.state.slide1 === 0) && (this.state.slide2 === 0) && (this.state.slide3 === 0) && (this.state.slide4 === 0) && (this.state.slide5 === 0) && (this.state.slide6 === 0) && (this.state.slide7 === 0) && (this.state.slide8 === 0)
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
                    <h1>AGT</h1>
                    <div className="scaling-svg-container" style={{width: "80%", paddingBottom: "6%"}}>
                        <svg className="scaling-svg" viewBox="0 0 570 40">
                            <circle cx="40" cy="0" r="30" onClick={() => this.setState({slide1: (this.state.slide1 + 1) % 2})} fill={this.state.colors[this.state.slide1]} />
                            <circle cx="110" cy="0" r="30" onClick={() => this.setState({slide2: (this.state.slide2 + 1) % 2})} fill={this.state.colors[this.state.slide2]} />
                            <circle cx="180" cy="0" r="30" onClick={() => this.setState({slide3: (this.state.slide3 + 1) % 2})} fill={this.state.colors[this.state.slide3]} />
                            <circle cx="250" cy="0" r="30" onClick={() => this.setState({slide4: (this.state.slide4 + 1) % 2})} fill={this.state.colors[this.state.slide4]} />
                            <circle cx="320" cy="0" r="30" onClick={() => this.setState({slide5: (this.state.slide5 + 1) % 2})} fill={this.state.colors[this.state.slide5]} />
                            <circle cx="390" cy="0" r="30" onClick={() => this.setState({slide6: (this.state.slide6 + 1) % 2})} fill={this.state.colors[this.state.slide6]} />
                            <circle cx="460" cy="0" r="30" onClick={() => this.setState({slide7: (this.state.slide7 + 1) % 2})} fill={this.state.colors[this.state.slide7]} />
                            <circle cx="530" cy="0" r="30" onClick={() => this.setState({slide8: (this.state.slide8 + 1) % 2})} fill={this.state.colors[this.state.slide8]} />
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

