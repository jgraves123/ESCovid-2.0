import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import SpeedPopUp from "./speedPopUp";
import CarouselPopUp from "./CarouselPopUp";
import PhonePopUp from "./PhonePopUp";
import Password from "../game/password";
import Continue from "../game/continueButton";
import {RemoteButton} from "./index";




export default class Page3a extends Component {
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
        letters: ["https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/2.png?raw=true",
            "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/3.png?raw=true",
            "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/4.png?raw=true",
            "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/5.png?raw=true",
            "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/6.png?raw=true",
            "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/7.png?raw=true",
            "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/8.png?raw=true",
            "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/life/9.png?raw=true"],
        pass: "",
        computer: false,
        slides: false,
        slide1: 0,
        slide2: 1,
        slide3: 2,
        slide4: 3,
        slide5: 4,
        slide6: 5,
        slide7: 6,
        slide8: 7,
    };


    csPassPop = () => {
        this.setState({
            cs_pass_open: !this.state.cs_pass_open
        });
    };


    picsPop = () => {
        this.setState({
            pics_open: !this.state.pics_open
        });
    };

    mapPop = () => {
        this.setState({
            comp_open: !this.state.comp_open
        });
    };

    carouselPop = () => {
        this.setState({
            pics_open: !this.state.pics_open
        });
    };


    render() {
        return(
            <div style={{marginBottom: "10"}}>
                <body>
                <RemoteButton/>

                <div height="400">
                    {/*if state is true, do this pop-up*/}
                    {this.state.map_open ? <PopUp title="Highways" x="6500" y="4000" width="100%" image={this.state.map} padding="62%" toggle={this.mapPop} /> : null}
                    {this.state.map_math_open ? <PopUp title="Arithmetic" x="1672" y="422" width="90%" image={this.state.map_math} padding="25%" toggle={this.mapMathPop} /> : null}
                    {this.state.cs_pass_open ? <PopUp title="Computer Password" x="718" y="644" width="80%" image={this.state.cs_pass} padding="75%" toggle={this.csPassPop} /> : null}
                    {this.state.cell_open ? <PhonePopUp toggle={this.cellPop} /> : null}
                    {this.state.comp_open ? <CompPopUp toggle={this.mapPop} /> : null}
                    {this.state.pics_open ? <CarouselPopUp toggle={this.carouselPop} /> : null}

                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "65%"}}>
                    <svg className="scaling-svg" viewBox="0 0 3000 2000"> {/* Needs auto
                         updating*/}
                        <image width="100%" href="https://github.com/jgraves123/escovid2/blob/reality/images/reality/basecamp.jpg?raw=true"/>
                        <rect x="210" y="1320" width="490" height="320" className="clickable-done" onClick={this.picsPop}/>
                        <rect x="895" y="800" width="240" height="220" className="clickable-done" onClick={this.csPassPop}/>
                        <circle cx="2050" cy="1090" r="45" className="clickable-done" onClick={this.mapPop}/>
                        <polygon points="1040,1505 1350,1420 1672,1542 1280,1620" className="clickable-done" onClick={this.csPassPop}/>
                    </svg>
                </div>

                <TextPop title={"You find yourself on a remote island..."} content={"You seem to be in some sort of temporary shelter in the wooded area near a body of water. You're not alone - in fact, you're surrounded by people who smell like they haven't showered for days. Then you see the camera crew, and know - you haven't escaped the TV after all; you've just traded an oven for a campfire. This is Survivor."}/>

                </body>
            </div>
        );
    }
}


