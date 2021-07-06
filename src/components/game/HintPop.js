import React, { Component } from "react";

export default class HintPop extends Component {
    state = {
    };

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal2" style={{align: "center"}}>
                <div className="modal_content2" style={{backgroundColor: "white", width: "50%", marginTop: this.props.marginTop, marginLeft: this.props.marginLeft}}>
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                    <body>{this.props.text}</body>
                </div>
            </div>
        );
    }
}