import React, { Component } from "react";
import Delayed from "../game/delayed";
import Text from "../escovid/text";

export default class PhonePopUp extends Component {
    state = {
    };

    handleClick = () => {
        this.props.toggle();
    };

    sent = "chat-message-right pb-4";
    received = "chat-message-left pb-4";
    chatNames = ["Random Person", "ur dad", "Other rando"];
    avatars = ["https://bootdey.com/img/Content/avatar/avatar4.png", "https://bootdey.com/img/Content/avatar/avatar2.png", "https://bootdey.com/img/Content/avatar/avatar1.png", "https://bootdey.com/img/Content/avatar/avatar3.png"];
    state = {
        value: "",
        chat: 0,
        wrong:-1,
        attempt: "",
        hr: 2,
        minute: 40,
        pass: "",
        correct_pass: false,
    };

    handleChange = (event) => {
        console.log(event);
        this.setState({
            value: event.target.value
        });
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

    changeConvo0 = (event) => {
        event.preventDefault();
        this.setState({
            chat: 0
        });
        console.log(this.state.chat)
    };


    check = (event) => {
        event.preventDefault();
        this.temp = ("spaceship" === this.state.value);
        if (!this.temp) {
            this.setState({
                wrong: this.state.chat
            });
        }
        else {
            window.location.assign("/escovid/tumblr");
        }
        this.setState({
            attempt: this.state.value,
            value: "",
        });
        setTimeout(this.deletemsg, 15000)
    };

    deletemsg = () => {
        this.setState({wrong: false, attempt: ""})
    }

    check_email_pass = (event) => {
        event.preventDefault();
        this.temp = this.state.pass === "phone"
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            correct_pass: this.temp,
        });
    }

    handleChangeEmailPass = (event) => {
        this.setState({
            pass: event.target.value
        });
    }

    render() {
        return (
            <div className="modal2">
                <div className="modal_content2">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                    <h2 align="center">iPhone</h2>
                    {this.state.correct_pass ?
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

                                        <a href="#" className="list-group-item list-group-item-action border-0" onClick={this.changeConvo0}>
                                            <div className="badge bg-success float-right"/>
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
                                                        className="fas fa-circle chat-offline">Offline</span></div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action border-0" onClick={this.changeConvo2}>
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
                                                    <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent="4:50 pm" myavatar={this.avatars[this.state.chat]}>
                                                        Hey Sarah! Can you take the boys to practice tomorrow?</Text>
                                                    <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent="4:50 pm" myavatar={this.avatars[this.state.chat]}>
                                                        So sorry for the late notice.</Text>
                                                    <Text myclass={this.sent} character="You" timesent="5:02 pm" myavatar={this.avatars[3]}>
                                                        No problem!
                                                    </Text>
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
                                                    {this.state.wrong===1 ?
                                                        <div>
                                                            <div className="chat-message-right pb-4">
                                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                     className="rounded-circle mr-1" alt="You" width="40"
                                                                     height="40"/>
                                                            </div>
                                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                                <div className="font-weight-bold mb-1">You</div>
                                                                {this.state.attempt}
                                                            </div>
                                                            <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent={this.state.hr + ":" + this.state.minute + "am"} myavatar={this.avatars[this.state.chat]}>
                                                                Failed attempt. Deleting records for security in 10 ... 9 ... 8...</Text>
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
                                                    <Text myclass={this.sent} character="You" timesent="3:30 pm" myavatar={this.avatars[3]}>
                                                        SIBLING is asking me about his dad again...idk what to tell him.
                                                    </Text>
                                                    <Text myclass={this.received} character={this.chatNames[2]} timesent="3:45 pm" myavatar={this.avatars[this.state.chat]}>
                                                        Have you tried changing the subject to his grades?</Text>
                                                    <Text myclass={this.received} character={this.chatNames[2]} timesent="3:46 pm" myavatar={this.avatars[this.state.chat]}>
                                                        Kidding. Not sure what to tell you. Be honest with him? He's almost an adult now...</Text>
                                                    <Text myclass={this.sent} character="You" timesent="3:48 pm" myavatar={this.avatars[3]}>
                                                        Ha. I think he'd see through that.
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="3:49 pm" myavatar={this.avatars[3]}>
                                                        If I told him I found his dad's number he'd want to meet him, I'm sure of it. He's a tough kid, but you know how obsessed he gets about things. I just don't want him to be crushed if it turns out his dad isn't thrilled to find out he has a full grown child.
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="3:49 pm" myavatar={this.avatars[3]}>
                                                        Not to mention they'll both blame me.
                                                    </Text>
                                                    <Text myclass={this.received} character={this.chatNames[2]} timesent="10:37 am" myavatar={this.avatars[this.state.chat]}>
                                                        Don't beat yourself up Sal. () will understand you did your best at the time. And you don't have to tell him anything just yet.</Text>
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
                        </div> :
                        <div className={"inner"}>

                            <form id="path-answer" onSubmit={this.check_email_pass}>
                                <h3>Phone Number</h3>
                                <div className={"form-group"}>
                                    <input type="text" ref="val"
                                           placeholder={"Enter Password"}
                                           onChange={this.handleChangeEmailPass}
                                           style={{width: "100%"}}/>
                                </div>
                                <input type="submit" value="Submit"
                                       style={{width: "100%"}}/>
                            </form>

                        </div>
                    }
                </div>
            </div>
        );
    }
}