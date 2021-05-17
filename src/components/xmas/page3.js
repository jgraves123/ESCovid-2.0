import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import CompPopUp from "./compPopUp";
import CarouselPopUp from "./CarouselPopUp";
import PhonePopUp from "./PhonePopUp";
import Password from "../game/password";
import Continue from "../game/continueButton";




export default class Page3 extends Component {
    componentDidMount() {
        document.title = "ESCovid: Last Step!"
        if (this.props.curr_stage != 2) {
            this.props.stage(2)
        }
    }

    state = {
        map_open: false,
        cs_pass_open: false,
        map_math_open: false,
        comp_open: false,
        cell_open: false,
        pics_open: false,
        map: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/map.jpeg?raw=true",
        cs_pass: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/password.png?raw=true",
        map_math: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/map-math.png?raw=true",
        paths: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/path.jpeg?raw=true",
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
        slide1: 3,
        slide2: 1,
        slide3: 5,
        slide4: 6,
        slide5: 2,
        slide6: 7,
        slide7: 0,
        slide8: 4,
    };


    mapPop = () => {
        this.setState({
            map_open: !this.state.map_open
        });
    };

    csPassPop = () => {
        this.setState({
            cs_pass_open: !this.state.cs_pass_open
        });
    };

    mapMathPop = () => {
        this.setState({
            map_math_open: !this.state.map_math_open
        });
    };

    picsPop = () => {
        this.setState({
            pics_open: !this.state.pics_open
        });
    };

    compPop = () => {
        this.setState({
            comp_open: !this.state.comp_open
        });
    };

    carouselPop = () => {
        this.setState({
            pics_open: !this.state.pics_open
        });
    };

    cellPop = () => {
        this.setState({
            cell_open: !this.state.cell_open
        });
    };




    render() {
        return(
            <div style={{marginBottom: "10"}}>
                <body>
                <div>
                    {/*if state is true, do this pop-up*/}
                    {this.state.map_open ? <PopUp title="Highways" x="6500" y="4000" width="100%" image={this.state.map} bottom={<Password alert={"This address will not help you in your quest :("} command={"Visit Location"} input={"Location"} correct={<Continue url={"/anan/backhome"} text={"Visit 289 Center St."}/>} answers={["289 Center St."]}/>} padding="62%" toggle={this.mapPop} /> : null}
                    {this.state.map_math_open ? <PopUp title="Arithmetic" x="1672" y="422" width="90%" image={this.state.map_math} padding="25%" toggle={this.mapMathPop} /> : null}
                    {this.state.cs_pass_open ? <PopUp title="Computer Password" x="718" y="644" width="80%" image={this.state.cs_pass} padding="75%" toggle={this.csPassPop} /> : null}
                    {this.state.cell_open ? <PhonePopUp toggle={this.cellPop} /> : null}
                    {this.state.comp_open ? <CompPopUp toggle={this.compPop} /> : null}
                    {this.state.pics_open ? <CarouselPopUp toggle={this.carouselPop} /> : null}

                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "65%"}}>
                    <svg className="scaling-svg" viewBox="0 0 3000 1821"> {/* Needs auto
                         updating*/}
                        <image width="100%" href="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/office.png?raw=true"/>
                        <rect x="1450" y="35" width="250" height="70" className="clickable-done" onClick={this.mapMathPop}/>
                        <rect x="2630" y="0" width="370" height="270" className="clickable-done" onClick={this.mapPop}/>
                        <rect x="210" y="1320" width="490" height="320" className="clickable-done" onClick={this.picsPop}/>
                        <rect x="895" y="800" width="240" height="220" className="clickable-done" onClick={this.csPassPop}/>
                        <polygon points="2040,1705 2195,1588 2272,1642 2130,1770" className="clickable-done" onClick={this.cellPop}/>
                        <polygon points="1520,645 1640,598 1690,420 1960,430 1910,630 1830,680" className="clickable-done" onClick={this.compPop}/>

                    </svg>
                </div>
                <div align="center" >
                    <>
                        <h2>Order of Events:</h2>
                        <div className="scaling-svg-container" style={{paddingBottom: "20%"}}>
                            <svg className="scaling-svg" viewBox="-20 -20 620 100">
                                <image width="60" height="60" x="1" y="0" href={this.state.letters[this.state.slide1]}/>
                                <text x="31" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Aug 1995</text>
                                <image width="60" height="60" x="75" y="0" href={this.state.letters[this.state.slide2]}/>
                                <text x="105" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">June 1996</text>
                                <image width="60" height="60" x="149" y="0" href={this.state.letters[this.state.slide3]}/>
                                <text x="179" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Sept 1997</text>
                                <image width="60" height="60" x="223" y="0" href={this.state.letters[this.state.slide4]}/>
                                <text x="253" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Dec 1998</text>
                                <image width="60" height="60" x="297" y="0" href={this.state.letters[this.state.slide5]}/>
                                <text x="327" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Aug 1999</text>
                                <image width="60" height="60" x="371" y="0" href={this.state.letters[this.state.slide6]}/>
                                <text x="401" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Feb 2000</text>
                                <image width="60" height="60" x="445" y="0" href={this.state.letters[this.state.slide7]}/>
                                <text x="475" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">July 2001</text>
                                <image width="60" height="60" x="519" y="0" href={this.state.letters[this.state.slide8]}/>
                                <text x="549" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Jan 2002</text>
                            </svg>
                        </div>
                    </>
                </div>

                </body>
            </div>
        );
    }
}

