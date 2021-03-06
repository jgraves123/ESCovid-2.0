import React, {Component} from 'react';
import PopUp from "./PopUp";
import ReactDOM from 'react-dom';
import './xmas.css';
import {Link} from "react-router-dom";
import CompPopUp from "./compPopUp";




export default class Page2 extends Component {
    state = {
        map_open: false,
        cs_pass_open: false,
        map_math_open: false,
        comp_open: false,
        cell_open: false,
        pics_open: false,
        paths_open: false,
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
        slide1: 0,
        slide2: 1,
        slide3: 2,
        slide4: 3,
        slide5: 4,
        slide6: 5,
        slide7: 6,
        slide8: 7,
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

    cellPop = () => {
        this.setState({
            cell_open: !this.state.cell_open
        });
    };

    pathsPop = () => {
        this.setState({
            paths_open: !this.state.paths_open
        });
    };



    handleChangePhone = (event) => {
        this.setState({
            phone_number: event.target.value
        });
    }

    handleChangePass = (event) => {
        this.setState({
            pass: event.target.value
        });
    }

    check_phone = (event) => {
        console.log(this.state.phone_number)
        event.preventDefault();
        this.temp = ("6179165316" === this.state.phone_number)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            phone: this.temp,
        });
    }

    check_pass = (event) => {
        console.log(this.state.pass)
        event.preventDefault();
        this.temp = ("FAMILY" === this.state.pass) || ("family" === this.state.pass) || ("Family" === this.state.pass)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            computer: this.temp,
        });
    }

    check_slides = () => {
        this.temp = (this.state.slide1 === 4) && (this.state.slide2 === 2) && (this.state.slide3 === 6) && (this.state.slide4 === 7) && (this.state.slide5 === 3) && (this.state.slide6 === 8) && (this.state.slide7 === 1) && (this.state.slide8 === 5)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            slides: this.temp
        });
    };




    render() {
        return(
            <div style={{marginBottom: "10"}}>
                <body>
                {/*/!*<Confetti/>*!/*/}
                {/*<header id="main-header">*/}
                {/*    <div className="container">*/}
                {/*        <h1 align='center'>Thesis Defense</h1>*/}
                {/*    </div>*/}
                {/*</header>*/}
                {/*<nav id="navbar">*/}
                {/*    <div className="container">*/}
                {/*        <ul>*/}
                {/*            <li><a onClick={this.calPop}>Calendar</a></li>*/}
                {/*            <li><a onClick={this.contactsPop}>Contacts</a></li>*/}
                {/*            <li><a onClick={this.notesPop}>Notes</a></li>*/}
                {/*            <li><a onClick={this.helpPop}>Help</a></li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</nav>*/}
                {/*<div height="400">*/}
                {/*    /!*if state is true, do this pop-up*!/*/}
                {/*    {this.state.cal_open ? <PopUp title="Decemeber 2020" x="1840" y="1130" width="100%" image={this.state.cal} padding="62%" toggle={this.calPop} /> : null}*/}
                {/*    {this.state.contacts_open ? <PopUp title="Contact List" x="744" y="1164" width="60%" image={this.state.contacts} padding="96%" toggle={this.contactsPop} /> : null}*/}
                {/*    {this.state.notes_open ? <PopUp title="My Notes" x="1188" y="1422" width="80%" image={this.state.notes} padding="96%" toggle={this.notesPop} /> : null}*/}
                {/*    {this.state.help_open ? <PopUp title="Help" x="1572" y="512" width="100%" image={this.state.help} padding="34%" toggle={this.helpPop} /> : null}*/}


                {/*{!this.state.computer ?*/}
                {/*    <div align="center">*/}
                {/*        <div algin="center" style={{margin: "10", paddingBottom: "3%", width: "40%"}}>*/}
                {/*            <h3> Please enter Computer Password</h3>*/}
                {/*            <form id="path-answer" onSubmit={this.check_pass}>*/}
                {/*                <label>*/}
                {/*                    <input type="text" value={this.state.pt2_value} placeholder="Password" onChange={this.handleChangePass} style={{width: "60%"}}/>*/}
                {/*                </label>*/}
                {/*                <input type="submit" value="Submit" style={{width: "60%"}}/>*/}
                {/*            </form>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    :*/}
                {/*    <div align={"center"} style={{paddingTop: "2%"}}>*/}
                {/*        <button className="dull-button"><h3>Success</h3></button>*/}
                {/*    </div>}*/}
                <div height="400">
                    {/*if state is true, do this pop-up*/}
                    {this.state.map_open ? <PopUp title="Highways" x="6500" y="4000" width="100%" image={this.state.map} padding="62%" toggle={this.mapPop} /> : null}
                    {this.state.map_math_open ? <PopUp title="Arithmetic" x="1672" y="422" width="90%" image={this.state.map_math} padding="25%" toggle={this.mapMathPop} /> : null}
                    {this.state.cs_pass_open ? <PopUp title="Computer Password" x="718" y="644" width="80%" image={this.state.cs_pass} padding="75%" toggle={this.csPassPop} /> : null}
                    {this.state.cell_open ? null : null}
                    {this.state.comp_open ? <CompPopUp title="Computer Password" x="718" y="644" width="80%" image={this.state.cs_pass} padding="75%" toggle={this.compPop} /> : null}
                    {this.state.pics_open ? null : null}
                    {this.state.paths_open ? <PopUp title="Help" x="3024" y="3860" width="70%" image={this.state.paths} padding="90%" toggle={this.pathsPop} /> : null}

                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "65%"}}>
                <svg className="scaling-svg" viewBox="0 0 3000 1821"> {/* Needs auto
                         updating*/}
                    <image width="100%" href="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/office.png?raw=true"/>
                    <rect x="1450" y="35" width="250" height="70" className="clickable-done" onClick={this.mapMathPop}/>
                    <rect x="2630" y="0" width="370" height="270" className="clickable-done" onClick={this.mapPop}/>
                    <rect x="210" y="1320" width="490" height="320" className="clickable-done" onClick={this.picsPop}/>
                    <rect x="895" y="800" width="240" height="220" className="clickable-done" onClick={this.csPassPop}/>
                    <polygon points="1740,1425 1940,1348 2010,1430 1825,1520" className="clickable-done" onClick={this.pathsPop}/>
                    <polygon points="2040,1705 2195,1588 2272,1642 2130,1770" className="clickable-done" onClick={this.cellPop}/>
                    <polygon points="1520,645 1640,598 1690,420 1960,430 1910,630 1830,680" className="clickable-done" onClick={this.compPop}/>

                </svg>
                </div>
                <div align="center" >
                    {/*{!this.state.computer ?*/}
                    {/*    <div align="center">*/}
                    {/*        <table width="80%">*/}
                    {/*            <tr>*/}
                    {/*                <td style={{textAlign: "center", padding: "10%"}}>Please enter computer password above :(</td>*/}
                    {/*            </tr>*/}
                    {/*        </table>*/}
                    {/*    </div>*/}
                    {/*    :*/}
                        <>
                            <h2>Arrange your slides into the correct order:</h2>
                            <div className="scaling-svg-container" style={{paddingBottom: "15%"}}>
                                <svg className="scaling-svg" viewBox="-20 -20 620 100">
                                    <image width="60" height="60" x="1" y="0" onClick={() => this.setState({slide1: (this.state.slide1 + 1) % 8})} href={this.state.letters[this.state.slide1]}/>
                                    <text x="31" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Aug 1995</text>
                                    <image width="60" height="60" x="75" y="0" onClick={() => this.setState({slide2: (this.state.slide2 + 1) % 8})} href={this.state.letters[this.state.slide2]}/>
                                    <text x="105" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">June 1996</text>
                                    <image width="60" height="60" x="149" y="0" onClick={() => this.setState({slide3: (this.state.slide3 + 1) % 8})} href={this.state.letters[this.state.slide3]}/>
                                    <text x="179" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Sept 1997</text>
                                    <image width="60" height="60" x="223" y="0" onClick={() => this.setState({slide4: (this.state.slide4 + 1) % 8})} href={this.state.letters[this.state.slide4]}/>
                                    <text x="253" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Dec 1998</text>
                                    <image width="60" height="60" x="297" y="0" onClick={() => this.setState({slide5: (this.state.slide5 + 1) % 8})} href={this.state.letters[this.state.slide5]}/>
                                    <text x="327" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Aug 1999</text>
                                    <image width="60" height="60" x="371" y="0" onClick={() => this.setState({slide6: (this.state.slide6 + 1) % 8})} href={this.state.letters[this.state.slide6]}/>
                                    <text x="401" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Feb 2000</text>
                                    <image width="60" height="60" x="445" y="0" onClick={() => this.setState({slide7: (this.state.slide7 + 1) % 8})} href={this.state.letters[this.state.slide7]}/>
                                    <text x="475" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">July 2001</text>
                                    <image width="60" height="60" x="519" y="0" onClick={() => this.setState({slide8: (this.state.slide8 + 1) % 8})} href={this.state.letters[this.state.slide8]}/>
                                    <text x="549" y="68" fill="black" font-size=".6em" textAnchor="middle" alignmentBaseline="central">Jan 2002</text>
                                </svg>
                            </div>
                            {!this.state.slides ?
                                <button className="button" onClick={this.check_slides}><h3>Check Order</h3></button>
                                : <Link to="/xmas/page3">
                                    <button className="button"><h3>Continue</h3></button>
                                </Link>}
                        </>
                    {/*}*/}
                </div>

                </body>
            </div>
        );
    }
}

