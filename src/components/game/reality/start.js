import React, {Component} from 'react';
import './xmas.css';
import Remote from "./remote";
import TextPop from "../textPop";



export default class Start extends Component {

    componentDidMount() {
        document.title = "New Reality"
        if (!this.props.counting) {
            this.props.start(true)
        }
        if (this.props.curr_stage !== 0) {
            this.props.stage(0)
        }
    }

    state = {
        tv_open: false,
        text: "https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/textMe.png?raw=true"
    };


    notePop = () => {
        this.setState({
            tv_open: !this.state.tv_open
        });
    };




    render() {
        return(
            <div>
                    <body align={"center"}>
                    {this.state.tv_open ? <Remote toggle={this.notePop}/> : null}
                    <div className="scaling-svg-container" style={{paddingBottom: "45%"}}>
                        <svg className="scaling-svg" viewBox="0 0 1866 800"> {/* Needs auto
                         updating*/}
                            <image width="100%" href="https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/livingRoom.png?raw=true"/>
                            <rect x="950" y="250" width="350" height="190" className="clickable-done" onClick={this.notePop}/>
                        </svg>
                    </div>
                    <TextPop title={"You applied to hundreds of jobs, but..."} content={"...no one has gotten back to you. Even a rejection would have been better than the silence! Your theater and creative writing degrees don't seem to count for much at all in the professional world. You decide to take a break and watch reality TV for a while to dull the pain. Just a few episodes can't hurt, right?"}/>
                    </body>
            </div>
        );
    }
}

