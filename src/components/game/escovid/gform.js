import React, {Component} from "react";
import Text from "./text";

export default class Gform extends Component {

    //This page contains two puzzles in the style of a messaging app. Players can switch between conversations and send texts to check answers.
    
    //Sets game components for the first stage

    constructor(props){
        super(props);
        document.title = "Step 1!";
        if (!this.props.counting) {
            this.props.start(true)
        }
        if (this.props.curr_stage !== 0) {
            this.props.stage(0)
        }
    }

    //Set basic values and state

    sent = "chat-message-right pb-4";
    received = "chat-message-left pb-4";
    chatNames = ["Mission Control", "Encrypted Message 329vu8", "Encrypted Message 9ga720"];
    avatars = ["https://bootdey.com/img/Content/avatar/avatar3.png", "https://bootdey.com/img/Content/avatar/avatar2.png", "https://bootdey.com/img/Content/avatar/avatar5.png", "https://bootdey.com/img/Content/avatar/avatar1.png"];
    state = {
        value: "",
        chat: 0,
        wrong:-1,
        attempt: "",
        hr: 2,
        minute: 40,
    };

    //Handles change when someone types

    handleChange = (event) => {
        console.log(event);
        this.setState({
            value: event.target.value
        });
    };

    //Functions called to switch between chat conversations
    //Ideally should be generalized but ... this works

    changeConvo0 = (event) => {
        event.preventDefault();
        this.setState({
            chat: 0
        });
        console.log(this.state.chat)
    };

    changeConvo1 = (event) => {
        event.preventDefault();
        this.setState({
            chat: 1
        });
        console.log(this.state.chat)
    };

    changeConvo2 = (event) => {
        event.preventDefault();
        this.setState({
            chat: 2
        });
        console.log(this.state.chat)
    };

    //Responds to password attempts

    check = (event) => {
        event.preventDefault();
        this.temp = ("spaceship" === this.state.value);
        if ("spaceship" === this.state.value) {
            window.location.assign("/escovid/tumblr");
        }
        else if ("space" === this.state.value | "ship" === this.state.value){
            this.setState({
                wrong: this.state.chat
            });
        }
        else {
            this.setState({
                wrong: 3
            });
        }
        this.setState({
            attempt: this.state.value,
            value: "",
        });
        setTimeout(this.deletemsg, 10000)
    };

    //Clears message sent by user (called above)

    deletemsg = () => {
        this.setState({wrong: -1, attempt: ""})
    }

    //Renders the conversations / texting app

    render(){
        return(
                <body style={{margin: "1vw 10vw", bgColor: "pink"}}>
                    <div>
                        <div className="card" >
                            <div className="row g-0">
                                <div className="col-12 col-lg-5 col-xl-3 border-right">

                                    <div className="px-4 d-none d-md-block">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <input type="text" className="form-control my-3"
                                                       placeholder="Search..."/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Left side shows conversations available */}
                                    <a href="#" className="list-group-item list-group-item-action border-0" onClick={this.changeConvo0}>
                                        <div className="d-flex align-items-start">
                                            <img src={this.avatars[0]}
                                                 className="rounded-circle mr-1" alt="Sharon Lessman" width="40"
                                                 height="40"/>
                                                <div className="flex-grow-1 ml-3">
                                                    {this.chatNames[0]}
                                                    <div className="small"><span className="fas fa-circle chat-online">Online</span> </div>
                                                </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action border-0" onClick={this.changeConvo1}>
                                        <div className="badge bg-success float-right">3</div>
                                        <div className="d-flex align-items-start">
                                            <img src={this.avatars[1]}
                                                 className="rounded-circle mr-1" alt="William Harris" width="40"
                                                 height="40"/>
                                                <div className="flex-grow-1 ml-3">
                                                    {this.chatNames[1]}
                                                    <div className="small"><span
                                                        className="fas fa-circle chat-online">Online</span></div>
                                                </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action border-0" onClick={this.changeConvo2}>
                                        <div className="badge bg-success float-right">3</div>
                                        <div className="d-flex align-items-start">
                                            <img src={this.avatars[2]}
                                                 className="rounded-circle mr-1" alt="Vanessa Tucker" width="40"
                                                 height="40"/>
                                                <div className="flex-grow-1 ml-3">
                                                    {this.chatNames[2]}
                                                    <div className="small"><span className="fas fa-circle chat-offline"> Offline</span></div>
                                                </div>
                                        </div>
                                    </a>
                                    <hr className="d-block d-lg-none mt-1 mb-0"/>
                                </div>

                                {/* Conversations */}
                                <div className="col-12 col-lg-7 col-xl-9">
                                    <div className="py-2 px-4 border-bottom d-none d-lg-block">
                                        <div className="d-flex align-items-center py-1">
                                            <div className="position-relative">
                                                <img src={this.avatars[this.state.chat]}
                                                     className="rounded-circle mr-1" alt="Character" width="40"
                                                     height="40"/>
                                            </div>
                                            <div className="flex-grow-1 pl-3">
                                                <strong>{this.chatNames[this.state.chat]}</strong>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.chat===0 ?
                                        <div className="position-relative">
                                            <div className="chat-messages p-4">
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <Text myclass={this.received} character="Mission Control" timesent="2:34 am" myavatar={this.avatars[this.state.chat]}>
                                                    Initiating Phase I...</Text>
                                                <Text myclass={this.received} character="Mission Control" timesent="2:35 am" myavatar={this.avatars[this.state.chat]}>
                                                    Our agents are sending you two clues about the departure location - you may wish to divide and conquer,
                                                    but you will need to solve both of them to move on.</Text>
                                                <Text myclass={this.received} character="Mission Control" timesent="2:37 am" myavatar={this.avatars[this.state.chat]}>
                                                        Reply with the password to move forward.
                                                </Text>
                                                {this.state.wrong===3 ?
                                                    <div>
                                                        <Text myclass={this.sent} character="You" timesent="3:49 pm" myavatar={this.avatars[3]}>
                                                            {this.state.attempt}
                                                        </Text>
                                                        <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent={this.state.hr + ":" + this.state.minute + "am"} myavatar={this.avatars[this.state.chat]}>
                                                            Failed attempt. Deleting records for security in 10 ... 9 ... 8...</Text>
                                                    </div>
                                                    : null
                                                }
                                                {this.state.wrong===0 ?
                                                        <div>
                                                            <Text myclass={this.sent} character="You" timesent="3:49 pm" myavatar={this.avatars[3]}>
                                                                {this.state.attempt}
                                                            </Text>
                                                            <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent={this.state.hr + ":" + this.state.minute + "am"} myavatar={this.avatars[this.state.chat]}>
                                                                Partial solution verified. Deleting records for security in 10 ... 9 ... 8...</Text>
                                                        </div>
                                                        : null
                                                    }
                                            </div>
                                            <div className="flex-grow-0 py-3 px-4 border-top">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Type your message" onChange={this.handleChange}/>
                                                    <button className="send" onClick={this.check}>Send</button>
                                                </div>
                                            </div>
                                        </div>
                                        : null
                                    }
                                    {this.state.chat===1 ?
                                        <div className="position-relative">
                                            <div className="chat-messages p-4">
                                                <Text myclass={this.received} character={this.chatNames[1]} timesent="2:37 am" myavatar={this.avatars[this.state.chat]}>
                                                    Uploading encrypted message...</Text>
                                                <Text myclass={this.received} character={this.chatNames[1]} timesent="2:39 am" myavatar={this.avatars[this.state.chat]}>
                                                <img
                                                    className="img-fluid rounded mb-4 mb-lg-0"
                                                    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/Mastermind.PNG?raw=true"/>
                                                </Text>
                                                <Text myclass={this.received} character={this.chatNames[1]} timesent="2:39 am" myavatar={this.avatars[this.state.chat]}>
                                                    You may reply to check your solution.
                                                </Text>
                                                {this.state.wrong===3 ?
                                                    <div>
                                                        <Text myclass={this.sent} character="You" timesent="3:49 pm" myavatar={this.avatars[3]}>
                                                            {this.state.attempt}
                                                        </Text>
                                                        <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent={this.state.hr + ":" + this.state.minute + "am"} myavatar={this.avatars[this.state.chat]}>
                                                            Failed attempt. Deleting records for security in 10 ... 9 ... 8...</Text>
                                                    </div>
                                                    : null
                                                }
                                                {this.state.wrong===1 ?
                                                        <div>
                                                            <Text myclass={this.sent} character="You" timesent="3:49 pm" myavatar={this.avatars[3]}>
                                                                {this.state.attempt}
                                                            </Text>
                                                            <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent={this.state.hr + ":" + this.state.minute + "am"} myavatar={this.avatars[this.state.chat]}>
                                                                Partial solution verified. Deleting records for security in 10 ... 9 ... 8...</Text>
                                                        </div>
                                                        : null
                                                    }
                                            </div>
                                            <div className="flex-grow-0 py-3 px-4 border-top">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Type your message" onChange={this.handleChange}/>
                                                    <button className="send" onClick={this.check}>Send</button>
                                                </div>
                                            </div>
                                        </div>
                                        : null
                                    }
                                    {this.state.chat===2 ?
                                        <div className="position-relative">
                                            <div className="chat-messages p-4">
                                                <Text myclass={this.received} character={this.chatNames[2]} timesent="2:37 am" myavatar={this.avatars[this.state.chat]}>
                                                    Uploading encrypted message...</Text>
                                                <Text myclass={this.received} character={this.chatNames[2]} timesent="2:39 am" myavatar={this.avatars[this.state.chat]}>
                                                    <img
                                                    className="img-fluid rounded mb-4 mb-lg-0"
                                                    src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/scales.PNG?raw=true"/>
                                                    </Text>
                                                <Text myclass={this.received} character={this.chatNames[2]} timesent="2:39 am" myavatar={this.avatars[this.state.chat]}>
                                                    You may reply to check your solution.
                                                </Text>
                                                {this.state.wrong===3 ?
                                                    <div>
                                                        <Text myclass={this.sent} character="You" timesent="3:49 pm" myavatar={this.avatars[3]}>
                                                            {this.state.attempt}
                                                        </Text>
                                                        <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent={this.state.hr + ":" + this.state.minute + "am"} myavatar={this.avatars[this.state.chat]}>
                                                            Failed attempt. Deleting records for security in 10 ... 9 ... 8...</Text>
                                                    </div>
                                                    : null
                                                }
                                                {this.state.wrong===2 ?
                                                        <div>
                                                            <Text myclass={this.sent} character="You" timesent="3:49 pm" myavatar={this.avatars[3]}>
                                                                {this.state.attempt}
                                                            </Text>
                                                            <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent={this.state.hr + ":" + this.state.minute + "am"} myavatar={this.avatars[this.state.chat]}>
                                                                Partial solution verified. Deleting records for security in 10 ... 9 ... 8...</Text>
                                                        </div>
                                                        : null
                                                    }
                                                <div className="flex-grow-0 py-3 px-4 border-top">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Type your message" onChange={this.handleChange}/>
                                                        <button className="send" onClick={this.check}>Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
        )}

}