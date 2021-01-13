import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Gform extends Component {

    constructor(props){
        super(props)
        document.title = "Step 1!"
        if (!this.props.counting) {
            this.props.start(true)
        }
    }

    render(){
        return(
            <div align="center">
                <h1>Google forms page</h1>
                <div>
                    <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/Mastermind.PNG?raw=true"
                        alt=""
                    />
                </div>
                <br/>
                <div>
                    <form id="mastermind_form">
                        <label>
                            <input type="text" placeholder="ID" />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="content-section container" align="left" style={{width: "60%"}}>
                    <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/scales.PNG?raw=true"
                        alt=""
                    />
                </div>
                <div>
                    <form id="scales_form" onSubmit={console.log("would save group name")}>
                        <label>
                            <input type="text" placeholder="ID" />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <Link to="/escovid/tumblr">
                    <button className="button"><h3>Continue</h3></button>
                </Link>
            </div>
        )
    }

}