import React, { Component } from "react";

export default class ComparePopUp extends Component {


    handleClick = () => {
        this.props.toggle();
    };



    render() {
        return (
            <div className="modal">
                <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
                    <h3>Register!</h3>
                    <table border="1" width="80%" align="center" bgcolor="#708090">
                        <tr align = "center">
                            <td>Star System</td>
                            <td>Gliese 876</td>
                            <td>TRAPPIST-1</td>
                        </tr>
                        <tr>
                            <td>Time passing for Astronauts</td>
                            <td>9.9 years</td>
                            <td>26.3 years</td>
                        </tr>
                        <tr>
                            <td>Time passing on earth</td>
                            <td>31.5 years</td>
                            <td>84.2 years</td>
                        </tr>
                        <tr>
                            <td>Likelihood of Success</td>
                            <td>2 planets with each one having about 15% chance of success</td>
                            <td>1 planet with about 30% chance of success, two more planets with success rate ~10%</td>
                        </tr>
                        <tr>
                            <td>Net Success Rate assuming Independence of results</td>
                            <td>~28%</td>
                            <td>~43%</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
