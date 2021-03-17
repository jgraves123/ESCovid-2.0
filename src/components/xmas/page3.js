import React, {Component} from 'react';
import "../index.css";
import "../game/leaderboard.css";
import Griddle, {plugins} from 'griddle-react';
import {contacts} from "./contacts";



class Leader extends Component {



    render() {
        return(
            <section>
                <div className="container" align={"center"} style={{width: "70%"}}>
                        <h2>Contact List</h2>
                        <Griddle data={contacts} plugins={[plugins.LocalPlugin]}/>
                </div>
            </section>
        )
    }
}

export default Leader;