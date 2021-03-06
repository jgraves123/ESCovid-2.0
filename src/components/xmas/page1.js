import React, {Component} from 'react';
import PopUp from "./PopUp";
import ReactDOM from 'react-dom';
import './xmas.css';
import {Link} from "react-router-dom";



export default class Page1 extends Component {

    constructor(props){
        super(props);
        document.title = "Christmas Escape Room!";
        if (!this.props.counting) {
            this.props.start(true)
        }
        if (this.props.curr_stage !== 0) {
            this.props.stage(0)
        }
    }

    state = {
        cal: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/calendar.png?raw=true",
        contacts: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/contacts.png?raw=true",
        notes: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/notes.png?raw=true",
        intro: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/intro-letter.png?raw=true",
        path: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/path.jpeg?raw=true",
        help: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/help.png?raw=true",
        colors: ["red", "blue", "green", "yellow", "orange", "purple", "white", "black"],
        cir1: 0,
        cir2: 0,
        cir3: 0,
        cir4: 0,
        part1: false,
        pt2_value: "",
        part2: false,
    };

    check_part1 = () => {
        this.temp = (this.state.cir1 === 6) && (this.state.cir2 === 4) && (this.state.cir3 === 2) && (this.state.cir4 === 1)
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
                {/*<Confetti/>*/}
                <h2 align="center" className="subheading">Hello Chris, First we need to confirm your identity. </h2>
                <h3 align="center" className="subheading">Please read the documents provided and enter our two factor authorization to continue.</h3>
                <section>
                    <div align={"center"}>
                        {/*resizing*/}
                        <img src={this.state.intro} width={"20%"}/>
                    </div>

                </section>
                <h2 align="center">Two Factor Identification</h2>
                <div align={"center"}>
                    <div className="scaling-svg-container" align="center" style={{paddingBottom: "0%", display: "inline-block", width: "42%"}}>
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
                                <button className="button" onClick={this.check_part1}><h3>Check</h3></button>
                            </>
                            : <Link to="/xmas/page2">
                                <button className="button"><h3>Continue</h3></button>
                            </Link> }
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

