import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import ReactDOM from 'react-dom';
import './xmas.css';
import {Link} from "react-router-dom";



export default class Page1 extends Component {

    constructor(props){
        super(props);
        document.title = "Bakeoff!";
        if (this.props.curr_stage !== 1) {
            this.props.stage(1)
        }
    }

    state = {
        intro: "https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/email.png?raw=true",
        colors: ["red", "blue", "green", "yellow", "orange", "purple", "white", "black"],
        cir1: 0,
        cir2: 0,
        cir3: 0,
        cir4: 0,
        part1: false,
        pt2_value: "",
        part2: false,
        attachment: false,
    };

    check_part1 = () => {
        this.temp = (this.state.cir1 === 2) && (this.state.cir2 === 7) && (this.state.cir3 === 6) && (this.state.cir4 === 0)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            part1: this.temp
        });
    };




    render() {
        return(
            <div>
                <body>
                <section>
                    <div align={"center"} style={{margin: "10px"}}>
                        {/*resizing*/}
                        <img src={this.state.intro} width={"80%"}/>
                    </div>

                </section>
                <div align={"center"}>
                    <div className="scaling-svg-container" align="center" style={{paddingBottom: "0%", display: "inline-block", width: "42%"}}>
                        {!this.state.attachment ?
                            <div align="center">
                                <br/>
                                <table width="100%">
                                    <tr>
                                        <td style={{textAlign: "center", padding: "10%"}} onClick={() => this.setState({attachment: true})}>Attachment</td>
                                    </tr>
                                </table>
                                <br/>
                            </div>
                            :
                            <div>
                            {!this.state.part1 ?
                            <>
                                <div className="scaling-svg-container" style={{paddingBottom: "20%"}}>
                                    <svg className="scaling-svg" viewBox="-20 -20 600 150">
                                        <circle cx="121" cy="40" r="39" className="click" stroke="white"
                                                fill={this.state.colors[this.state.cir1]}
                                                onClick={() => this.setState({cir1: (this.state.cir1 + 1) % 8})}/>
                                        <circle cx="231" cy="40" r="39" className="click" stroke="white"
                                                fill={this.state.colors[this.state.cir2]}
                                                onClick={() => this.setState({cir2: (this.state.cir2 + 1) % 8})}/>
                                        <circle cx="341" cy="40" r="39" className="click" stroke="white"
                                                fill={this.state.colors[this.state.cir3]}
                                                onClick={() => this.setState({cir3: (this.state.cir3 + 1) % 8})}/>
                                        <circle cx="451" cy="40" r="39" className="click" stroke="white"
                                                fill={this.state.colors[this.state.cir4]}
                                                onClick={() => this.setState({cir4: (this.state.cir4 + 1) % 8})}/>
                                    </svg>
                                </div>
                                <div style={{paddingBottom: "15px"}}>
                                <button className="button" onClick={this.check_part1}><h3>Check</h3></button>
                                </div>
                            </>
                            : <div style={{paddingBottom: "20px"}}><Link to="/anon/cubicle">
                                <button className="button"><h3>Visit 16 East Pine St.</h3></button>
                                </Link></div> }
                            </div>}
                    </div>

                </div>
                </body>
                {/*<footer id="main-footer">*/}
                {/*    <h3>Contact info?</h3>*/}
                {/*</footer>*/}
            </div>
        );
    }
}

