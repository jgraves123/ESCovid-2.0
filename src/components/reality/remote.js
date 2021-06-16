import React, { Component } from "react";
import {Button} from "react-bootstrap";
import Griddle, {plugins} from "griddle-react";
import {contacts} from "./contacts";

export default class Remote extends Component {


    componentDidMount() {
        let curr = localStorage.getItem("remote")
        if (curr == null) {
            localStorage.setItem("remote", "0");
            curr = 0;
        } else {
            curr = parseInt(curr);
        }
        this.setState({
            directory: curr
        })
        console.log(curr)
    }


    state = {
        channel: "",
        bakeCode: 174,
        survivorCode: 389,
        agtCode: 5237,
        bachelorCode: 1765,
        escCode: 98989,
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
        let curr = parseInt(this.state.channel);
        console.log(curr)
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
            this.setDirectory(4);
            window.location.href = '/reality/bachelor';
        } else if (curr === this.state.escCode) {
            this.setDirectory(5);
            window.location.href = '/reality/sofa';
        } else {
            this.handleReset();
            alert("Channel Not Found");
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

                    <div align={"center"}>
                        <h1>TV Remote</h1>
                    </div>
                    <div className="scaling-svg-container outer" align="center" style={{
                        display: "inline-block",
                        width: "50%",
                        padding: "0px",
                        backgroundColor: "#FDE38C",
                    }}>
                        <div className="scaling-svg-container inner" style={{paddingBottom: "85%"}}>
                            <svg className="scaling-svg" viewBox="0 0 940 1106"> {/* Needs auto
                         updating*/}
                                <image width="100%" href="https://raw.githubusercontent.com/jgraves123/escovid2/reality/public/reality/remote.png?raw=true"/>
                                <rect x="160" y="170" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(1)}/>
                                <rect x="260" y="170" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(2)}/>
                                <rect x="570" y="170" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(3)}/>
                                <rect x="670" y="170" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(4)}/>
                                <rect x="370" y="370" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(5)}/>
                                <rect x="470" y="370" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(6)}/>
                                <rect x="160" y="570" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(7)}/>
                                <rect x="260" y="570" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(8)}/>
                                <rect x="570" y="570" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(9)}/>
                                <rect x="670" y="570" width="90" height="140" className="clickable-done" onClick={() => this.handleSelect(0)}/>

                            </svg>
                        </div>
                        <div align={"center"}>
                        Channel Number: {this.state.channel}
                        <br/>
                        <br/>
                        <button className={"button"} onClick={this.handleGo}>Select</button>
                        <Button onClick={this.handleReset}>Reset</Button>
                        </div>
                    </div>

                    <div align={"center"} style={{display: "inline-block", verticalAlign: "top", paddingBottom: "0%", width: "45%", height: "50vw", overflow: "auto"}}>
                        <h3>TV Guide</h3>
                        <table>
                            <tr><th>Channel</th><th>Code</th></tr>
                            <tr><td>British Bakeoff</td><td>{this.state.bakeCode}</td></tr>
                            {this.state.directory >= 2 ? <tr><td>Survivor</td><td>{this.state.survivorCode}</td></tr> : null}
                            {this.state.directory >= 3 ? <tr><td>America's Got Talent (BGT)</td><td>{this.state.agtCode}</td></tr> : null}
                            {this.state.directory >= 4 ? <tr><td>Bachelor (BGT)</td><td>{this.state.bachelorCode}</td></tr> : null}
                            {this.state.directory >= 5 ? <tr><td>ESC</td><td>{this.state.escCode}</td></tr> : null}

                        </table>
                    </div>

                </div>
            </div>

        );
    }
}

