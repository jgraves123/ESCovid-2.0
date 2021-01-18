import React, {Component} from 'react';
import "../index.css";
import "./leaderboard.css";
import Griddle, {plugins} from 'griddle-react';
//npm install --save griddle-react, http://griddlegriddle.github.io/Griddle/


class Leader extends Component {
    data19 = [
        { Team: 'Woba Boba Baby Yodas', Time:115, Hints:5 },
        { Team: 'READ', Time: 60, Hints:0},
        { Team: 'Galileo', Time: 90, Hints:0},
    ];

    data20 = [
        { Team: 'The Numbnuts', Time: 90, Hints:0},
        { Team: 'GROGU', Time: 90, Hints:1},
    ];

    sortProperties = [
        { id: 'Time', sortAscending: true },
        { id: 'Hints', sortAscending: true }
    ];

    render() {
        return(
            <section>
                <div className="container" align={"center"} width={"50%"}>
                    <h2>ESCovid-19 Leaderboard</h2>
                    <Griddle data={this.data19.slice(0,5)} plugins={[plugins.LocalPlugin]} sortProperties={this.sortProperties}/>
                    <h2>ESCovid-20 Leaderboard</h2>
                    <Griddle data={this.data20.slice(0,5)} plugins={[plugins.LocalPlugin]} sortProperties={this.sortProperties}/>
                </div>
            </section>
        )
    }
}

export default Leader;