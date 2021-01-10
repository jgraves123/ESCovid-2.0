import React, {Component} from 'react';
import "./index.css";
import "./leaderboard.css";
import Griddle, {plugins} from 'griddle-react';
//npm install --save griddle-react, http://griddlegriddle.github.io/Griddle/


class Leader extends Component {
    data19 = [
        { Team: 'Woba Boba Baby Yodas', Time:115, Hints:5 },
        { Team: 'Fake team', Time: 130, Hints:2}
    ];

    data20 = [
        { Team: 'GIV Winners?', Time:135, Hints:2},
    ];

    sortProperties = [
        { id: 'Time', sortAscending: true }
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