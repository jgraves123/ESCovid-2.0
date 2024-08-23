import React, { Component } from "react";
import Griddle, {plugins} from "griddle-react";
import {contacts} from "./contacts";
import ReactPlayer from "react-player";
import {evaluate} from "mathjs";

export default class BuzzerPopUp extends Component {

    render() {
        return (
            <div className="modal2">
                <div className="modal_content2" style={{backgroundColor: "white", padding: "1vw"}}>
                    <ReactPlayer url={"https://www.youtube.com/watch?v=YTgNrxgsjMI"} onStart={setTimeout(() => window.location = "/reality/sofa", 29000)} config={{
                        youtube: {
                            playerVars: {
                                start: 58,
                                end: 84,
                            }
                        }
                    }}/>
                </div>
            </div>
        );
    }
}

