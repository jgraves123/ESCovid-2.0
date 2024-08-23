import React, { Component } from "react";
import Text from "../escovid/text";
import "../escovid/text.css"
import "../escovid/gform.css"

export default class TextPopUp extends Component {
    state = {
    };

    handleClick = () => {
        this.props.toggle();
    };

    sent = "chat-message-right pb-4 sent";
    sentSmall = "chat-message-right pb-4 sent small-gap";
    received = "chat-message-left pb-4";
    receivedSmall = "chat-message-left pb-4 small-gap";
    chatNames = ["Jake"];
    avatars = ["https://bootdey.com/img/Content/avatar/avatar1.png", "https://bootdey.com/img/Content/avatar/avatar2.png", "https://bootdey.com/img/Content/avatar/avatar4.png", "https://www.shareicon.net/data/128x128/2015/09/18/103159_user_512x512.png"];
    state = {
        value: "",
        chat: true,
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

    giveHint = (event) => {
        event.preventDefault();
        this.setState({
            chat: !this.state.chat
        });
    };


    check = (event) => {
        event.preventDefault();
        alert("We are sorry, responding to this message is not necessary.")
    };

    check_email_pass = (event) => {
        event.preventDefault();
        this.temp = this.state.pass === "2377096720"
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
                    <h2 align="center">iPhone Messages</h2>
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
                                        <a href="#" className="list-group-item list-group-item-action border-0" onClick={this.giveHint}>
                                            <div className="badge bg-success float-right"/>
                                            <div className="d-flex align-items-start">
                                                <img src={this.avatars[0]}
                                                     className="rounded-circle mr-1" alt="Sharon Lessman" width="40"
                                                     height="40"/>
                                                <div className="flex-grow-1 ml-3">
                                                    {this.chatNames[0]}
                                                    <div className="small"><span className="fas fa-circle chat-online">Offline</span> </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action border-0" onClick={this.giveHint}>
                                            <div className="badge bg-success float-right"/>
                                            <div className="d-flex align-items-start">
                                                <img src={this.avatars[3]}
                                                     className="rounded-circle mr-1" alt="unknown" width="40"
                                                     height="40"/>
                                                <div className="flex-grow-1 ml-3">
                                                    Unknown
                                                    <div className="small"><span className="fas fa-circle chat-online">Online</span> </div>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="d-block d-lg-none mt-1 mb-0"/>
                                    </div>
                                    <div className="col-12 col-lg-7 col-xl-9">
                                        <div className="py-2 px-4 border-bottom d-none d-lg-block">
                                            <div className="d-flex align-items-center py-1">
                                            </div>
                                        </div>
                                        {this.state.chat ===true ?
                                            <div className="position-relative">
                                                <div className="chat-messages p-4">
                                                    <Text myclass={this.received} character={this.chatNames[0]} timesent="1:32" myavatar={this.avatars[0]}>
                                                        Don’t worry, babe. I’ll make sure you’re the one the judges pick. Just keep smiling for the Camera while I figure this out.
                                                    </Text>
                                                    <Text myclass={this.sentSmall} character="You" timesent="1:33" myavatar={this.avatars[3]}>
                                                        I want to believe you, but how can you be so sure?
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="1:33" myavatar={this.avatars[3]}>
                                                        Sometimes it feels like our love is impossible.
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]} timesent="1:34" myavatar={this.avatars[0]}>
                                                        I can prove our love is possible. There’s always a solution.
                                                    </Text>
                                                    <Text myclass={this.received} character={this.chatNames[0]} timesent="1:38" myavatar={this.avatars[0]}>
                                                        <img width="100%"src="https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/exampleNote.png?raw=true"/>
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="1:42" myavatar={this.avatars[3]}>
                                                        What does this mean?? Is A always zero?
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]} timesent="1:43" myavatar={this.avatars[0]}>
                                                        No, the number, letter pairings will change each time to make the math work and get a valid equation.
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="1:43" myavatar={this.avatars[3]}>
                                                        You’re such a nerd :)
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]} timesent="1:43" myavatar={this.avatars[0]}>
                                                        Better you know that about me now.
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]} timesent="1:43" myavatar={this.avatars[0]}>
                                                        BTW, you looked stunning last night. And so much screen time! Keep chatting up the Cameraman, it's totally working.
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="1:43" myavatar={this.avatars[3]}>
                                                        I'm on it!
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]} timesent="15:12" myavatar={this.avatars[0]}>
                                                        I think someone is onto us...
                                                    </Text>
                                                    <Text myclass={this.sentSmall} character="You" timesent="15:13" myavatar={this.avatars[3]}>
                                                        But we’ve been so careful!
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]} timesent="15:13 " myavatar={this.avatars[0]}>
                                                        Not careful enough. I think they might be tapping my phone. We’ll have to find a new way to communicate.
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]} timesent="15:13" myavatar={this.avatars[0]}>
                                                        Don’t reply to this. I’m deleting the conversation.                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]} timesent="15:14" myavatar={this.avatars[0]}>
                                                        But I’m not giving up on you, Vera                                                    </Text>
                                                </div>
                                                <div className="flex-grow-0 py-3 px-4 border-top">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Type your message" onChange={this.handleChange}/>
                                                        <button className="send" onClick={this.check}>Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className="position-relative">
                                                <div className="chat-messages p-4">
                                                    <Text myclass={this.receivedSmall} character="Unknown" timesent="18:05" myavatar={this.avatars[3]}>
                                                        One more thing: every word must be in valid military time. You know, 0500 is 5AM, and 2130 would be 9:30pm. You'll get what I mean very SOON.</Text>
                                                    <Text myclass={this.receivedSmall} character="Unknown" timesent="18:05" myavatar={this.avatars[3]}>
                                                        And every letter must be unique.</Text>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}