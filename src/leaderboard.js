import ReactDOM from "react-dom";
import React, {Component} from 'react';
import "./index.css";

function home(){
    console.log("here too?")
    window.location.reload();
}

class Leaderboard extends Component {
    render() {
        return(
            <div id={"showcase"}>
                <table>
                    <h1>ESCovid-19</h1>
                    <tr>
                        <th>Place</th>
                        <th>Group Name</th>
                        <th>Time</th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Leaderboard;