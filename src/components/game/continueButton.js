import {Link} from "react-router-dom";
import React, {Component} from "react";

export default class Continue extends Component {

    render() {
        return (
            <div align="center" style={{paddingBottom: "20px"}}><Link to={this.props.url}>
                <button className="button"><h3>{this.props.text}</h3></button>
            </Link></div>
        );
    }
}
