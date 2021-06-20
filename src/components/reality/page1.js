import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import ReactDOM from 'react-dom';
import './xmas.css';
import {Link} from "react-router-dom";
import {RemoteButton} from "./index";
import TextPop from "../game/textPop";


export default class Page1 extends Component {

    constructor(props){
        super(props);
        document.title = "Bakeoff!";
        if (this.props.curr_stage !== 1) {
            this.props.stage(1)
        }
    }

    state = {
        desserts: ["https://github.com/jgraves123/escovid2/blob/main/images/reality/Mille-Crepe.jpg?raw=true",
            "https://github.com/jgraves123/escovid2/blob/main/images/reality/OrangeCannoli.jpg?raw=true",
            "https://github.com/jgraves123/escovid2/blob/main/images/reality/biscuittower.jpg?raw=true",
            "https://github.com/jgraves123/escovid2/blob/main/images/reality/deco-roll.jpg?raw=true",
            "https://github.com/jgraves123/escovid2/blob/main/images/reality/souffles.png?raw=true"],
        slides: false,
        slide1: 0,
        slide2: 1,
        slide3: 2,
        slide4: 3,
        slide5: 4,
    };

    check_slides = () => {
        this.temp = (this.state.slide1 === 4) && (this.state.slide2 === 0) && (this.state.slide3 === 3) && (this.state.slide4 === 1) && (this.state.slide5 === 2)
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            slides: this.temp
        });
    };



    render() {
        return(
            <div>
                <body>
                <RemoteButton/>
                <section style={{zIndex: "1"}}>
                    <div className="content-section container" align="left" style={{width: "60%", marginTop: "2vw", zIndex: "1"}}>
                        <h3>Great British Bake Off</h3>
                        <p style={{paddingLeft: "25px"}}>
                            <p>The theme for this weekend’s show is “throwback” and you’ve been tasked with preparing a dessert that was made during one episode of the pilot season of Bake-Off.
                                You want to go back and study, but the tape got recorded over. After a long meditation, you remember:
                            </p>
                            <li>The names of the 5 contestants: Marcus Mille, Rufus Roll, Carol Cannoli, Susie Souffle, and Brad Biscuit.</li>
                            <li>Their desserts: Biscuit Card Tower, Cherry & Almond Deco Roll, Matcha Mille Crepe Cake, Orange & Ginger Cannoli, and Twice-Baked Stilton Souffle.</li>
                            <li>One comment from the judges or commentators: “Time to pop Mary’s cherry!”, “To say it was a disaster would be a humiliation to disaster.”, “You could wedge a door with it.”, “A soggy bottom!”, and “It looks like it was dropped on the floor.” </li>
                        </p>
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="https://github.com/jgraves123/escovid2/blob/main/images/reality/cassettetape.png?raw=true"
                            alt="old cassette tape"
                        />
                    </div>
                    <div className="content-section container" align="left" style={{width: "60%", marginTop: "2vw"}}>
                        <h3>A lucky break!</h3>
                        <p style={{paddingLeft: "25px"}}>
                            <p>After calling all your friends, you can’t find anyone with the tape - but they all remember something about the show. Use this information to match each person with their dessert, quote, and how they ranked that week.</p>
                            <li>None of the contestants baked their namesake.</li>
                            <li>Brad’s deco roll popped Mary Berry's Cherry right on schedule!</li>
                            <li>The crepe cake had a soggy bottom but still ranked higher than the disastrous card tower and the rock-hard cannolis.</li>
                            <li>Susie was the worst-ranked going into the next episode, but she did better than Carol, who was eliminated.</li>
                            <li>Due to its extraordinary flavor or the lack of competition, the souffle “took the cake” this week.</li>
                            <li>The deco roll was not ranked second.</li>
                        </p>
                    </div>

                </section>

                <div align="center" >
                    <>
                        <h2>Set the true ranking of desserts by clicking the images, (<a href={"https://docs.google.com/spreadsheets/d/1_5N4lULX9CD6nXrrJgI6PEyKOM3Pgr5jCi7Ms5IfAco/edit?usp=sharing"}  rel="noreferrer" target="_blank">this</a> form might help):</h2>
                        {!this.state.slides ?
                            <div style={{padding: "10px", paddingBottom: "20px"}}>
                                <button className="button" onClick={this.check_slides}><h3>Check Order</h3></button>
                            </div>
                            : <div style={{padding: "20px"}}>
                                <p>You track down Marcus Mille and get the recipe.
                                    It's all you need to ace the challenge and win Bake-Off! As the show ends, you find a remote in your hand.
                                    In fact, it's YOUR remote... Suddenly a new channel pops into your head: 389
                                </p>
                            </div>}
                        <div className="scaling-svg-container" style={{paddingBottom: "20%"}}>
                            <svg className="scaling-svg" viewBox="-20 -20 400 100">
                                <image width="60" height="60" x="1" y="-20" style={{opacity: "0.8"}} onClick={() => this.setState({slide1: (this.state.slide1 + 1) % 5})} href={this.state.desserts[this.state.slide1]}/>
                                <text x="30" y="10" fill="black" font-size="1.25em" textAnchor="middle" alignmentBaseline="central">1</text>
                                <image width="60" height="60" x="75" y="-20" style={{opacity: "0.8"}} onClick={() => this.setState({slide2: (this.state.slide2 + 1) % 5})} href={this.state.desserts[this.state.slide2]}/>
                                <text x="105" y="10" fill="black" font-size="1.25em" textAnchor="middle" alignmentBaseline="central">2</text>
                                <image width="60" height="60" x="149" y="-20" style={{opacity: "0.8"}} onClick={() => this.setState({slide3: (this.state.slide3 + 1) % 5})} href={this.state.desserts[this.state.slide3]}/>
                                <text x="179" y="10" fill="black" font-size="1.25em" textAnchor="middle" alignmentBaseline="central">3</text>
                                <image width="60" height="60" x="223" y="-20" style={{opacity: "0.8"}} onClick={() => this.setState({slide4: (this.state.slide4 + 1) % 5})} href={this.state.desserts[this.state.slide4]}/>
                                <text x="253" y="10" fill="black" font-size="1.25em" textAnchor="middle" alignmentBaseline="central">4</text>
                                <image width="60" height="60" x="297" y="-20" style={{opacity: "0.8"}} onClick={() => this.setState({slide5: (this.state.slide5 + 1) % 5})} href={this.state.desserts[this.state.slide5]}/>
                                <text x="327" y="10" fill="black" font-size="1.25em" textAnchor="middle" alignmentBaseline="central">5</text>
                            </svg>
                        </div>
                    </>
                </div>
                <TextPop title={"Something goes wrong..."} content={"...as you type in the channel number, you feel the show sucking you in, as it always does. But this time, it is literally pulling you in!! " +
                "After all these years of binging reality TV, you wonder if you've poured too much of yourself into it, because you realize: you're not just watching the bake-off. You're a contestant in it."}/>
                </body>
            </div>
        );
    }
}

