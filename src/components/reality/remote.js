

import React, { Component } from "react";
import Griddle, {plugins} from "griddle-react";
import {contacts} from "./contacts";

export default class Remote extends Component {


    componentDidMount() {
        let curr = parseInt(localStorage.getItem("remote"))
        if (curr == null) {
            localStorage.setItem("remote", "0");
            curr = 0;
        }
        this.setState({
            directory: curr
        })
    }


    state = {
        channel: "",
        bakeCode: 0,
        survivorCode: 1,
        agtCode: 2,
        bachelorCode: 3,
        escCode: 4,
        directory: 0,
    };

    handleClick = () => {
        this.props.toggle();
    };

    handleSelect = (num) => {
        this.setState({
            channel: this.state.channel + num.toString(),
        });
    }

    handleReset = () => {
        this.setState({
            channel: "",
        });
    }

    handleGo = () => {
        let curr = this.state.channel;
        if (curr === this.state.bakeCode) {
            this.setDirectory(1);
            window.location.href = '/reality/bakeoff';
        } else if (curr === this.state.survivorCode) {
            this.setDirectory(2);
            window.location.href = '/reality/survivor';
        } else if (curr === this.state.agtCode) {
            this.setDirectory(3);
            window.location.href = '/reality/agt';
        } else if (curr === this.state.bachelorCode) {
            this.setDirectory(3);
            window.location.href = '/reality/bachelor';
        } else if (curr === this.state.escCode) {
            this.setDirectory(4);
            window.location.href = '/reality/bakeoff';
        } else {

        }
    }

    setDirectory = (num) => {
        if (num > this.state.directory) {
            localStorage.setItem("remote", num.toString())
        }
    }

    render() {
        return (
            <div className="modal2">
                <div className="modal_content2" style={{backgroundColor: "white", padding: "1vw"}}>
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>


                    <div className="scaling-svg-container outer" align="center" style={{
                        display: "inline-block",
                        width: "50%",
                        padding: "0px",
                        backgroundColor: "#FDE38C"
                    }}>
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

                    </div>

                    <div style={{display: "inline-block", verticalAlign: "top", paddingBottom: "0%", width: "45%", height: "50vw", overflow: "auto"}}>
                        {/*   <svg className="scaling-svg" viewBox="0 0 1000 3860"> /!* Needs auto*/}
                        {/*updating*!/*/}
                        {/*       <image x="0" width="100%" href={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/contacts.png?raw=true"}/>*/}
                        {/*   </svg>*/}
                        <img width="100%" src={"https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/notes.png?raw=true"}/>
                    </div>

                </div>
            </div>

        );
    }
}

