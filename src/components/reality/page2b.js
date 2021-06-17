import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import TextPop from "../game/textPop";
import RemoteButton from "./remoteButton";
import {Link} from "react-router-dom";

//TO DO:
// instructions
// keyboard task
// next channel

export default class Page2b extends Component {
    componentDidMount() {
        document.title = "Council!"
    }

    state = {
        pass: false,
        remap: {'w':'d', 'e': 'r', 'r': 'w', 't': 'b', 'y': 'j', 'u': 'f', 'i': 'u', 'o': 'p', 'p': ';', 'd': 'h', 'f': 't', 'h': 'y', 'j': 'n', 'k': 'e', 'l': 'o', ';': 'i', 'c': 'm', 'v': 'c', 'b': 'v', 'n': 'k', 'm': 'l'},
        password: "",
        speech: "I have outlasted, outwitted, and outplayed.",
        fullSpeech: "It goes without saying that I have outlasted all of you, despite the worthy competition. I have also outplayed the competition, solving the 4D SET and Krypto puzzles in record time. " +
            "Most importantly, I was a trusted leader of the *team name* tribe and it was an honor to successfully outwit them all to find the idol under great suspicion. " +
            "If you crown me champion, I make this unprecedented promise as a mark of respect and gratitude: each and every one of you will receive a portion of my million dollar prize." +
            "Now...I believe you have a decision to make."
    };

    checkPass = (event) => {
        event.preventDefault();
        this.temp = (this.state.speech === this.state.password)
        if (!this.temp) {
            alert("Unfortunately, the delivery of your speech was a bit off. However, Council has decided to let you try again.")
        }
        this.setState({
            pass: this.temp,
        });
    }

    handleChangePass = (event) => {
        let input = event.target.value;
        if (input.length > this.state.password.length){
            let letter = input.charAt(input.length - 1);
            let newLetter = letter;
            let toShow = this.state.password;
            if (letter in this.state.remap){
                newLetter = this.state.remap[letter];
            }
            toShow = toShow + newLetter;
            document.getElementById("typing").value = toShow;
            this.setState({
                    password: toShow
                });
        } else{
            this.setState({
                password: event.target.value
            });
        }

        console.log(this.state.password)
    }

    render() {
        return(
            <div>
                <body>
                <RemoteButton/>
                <section style={{zIndex: "1"}}>
                    <div className="content-section container" align="left" style={{width: "60%", marginTop: "2vw", zIndex: "1"}}>
                        <h3>The Final Defense</h3>
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="https://github.com/jgraves123/escovid2/blob/main/images/reality/survivor/council.jpg?raw=true"
                            alt="survivor council"
                        />
                    </div>
                    <div className="content-section container" align="left" style={{width: "60%", marginTop: "2vw"}}>
                        <h3>1st Flashcard:</h3>
                            <p>{this.state.speech}
                            </p>
                    </div>

                </section>

                <div align="center" >
                    <>
                    <h3>All you have to do now is deliver your prepared remarks to Tribal Council.</h3>
                    <h3>Easy, right?</h3>
                        {!this.state.pass ?
                            <div style={{padding: "10px", paddingBottom: "20px"}}>
                                <form id="path-answer" onSubmit={this.checkPass}>
                                    <label width={"80%"}>
                                        <input type="text" ref="val" id="typing"
                                               placeholder={"Type your speech here!"}
                                               onChange={this.handleChangePass}
                                               style={{marginRight: 10, width: "100%"}}/>
                                    </label>
                                    <input type="submit" value="Submit"
                                           style={{marginLeft: 10, width: "20%"}}/>
                                </form>
                            </div>
                            : <div><div style={{padding: "20px"}}>
                                <p>You've got the hang of it now, so you finish your speech without a hitch:</p>
                                <p>{this.state.fullSpeech}</p>
                            </div>
                                <div style={{padding: "20px"}}>
                                    <p>Congrats, you won Survivor! Now, you'd better get out of here before the other contestants start demanding their money.</p>
                                    <p>Next Channel: 5237</p>
                            </div></div>}
                    </>
                </div>

                <TextPop title={"Go before tribal council..."} content={"You've made it to the final three. Now, it is up to the council (your previous competitors) to decide who deserves to win. Can you convince them with an eloquent speech? The pressure's on, and so is the timer."}/>

                </body>
            </div>
        );
    }
}

