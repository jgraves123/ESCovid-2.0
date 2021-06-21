import React, { Component } from "react";

export default class PopUp extends Component {
    state = {
        modal_w: this.props.modal_w === undefined ? "80%" : this.props.modal_w
    };

    handleClick = () => {
        this.props.toggle();
    };

    val = (1 - (parseFloat(this.props.width) / 100.0))/2

    render() {
        return (
            <div className="modal2" align={"center"}>
                <div className="modal_content2" style={{width: this.state.modal_w}}>
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                    <h2 align="center">{this.props.title}</h2>
                    <div className="scaling-svg-container" style={{paddingBottom: this.props.padding}}>
                        <svg className="scaling-svg" viewBox={"0 0 " + this.props.x + " " + this.props.y}> {/* Needs
                         auto
                         updating*/}
                            <image x={this.val*this.props.x} width={this.props.width} href={this.props.image}/>
                        </svg>
                    </div>
                    {this.props.bottom}
                </div>
            </div>
        );
    }
}