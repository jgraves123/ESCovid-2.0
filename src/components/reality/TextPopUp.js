import React, { Component } from "react";
import Text from "../escovid/text";

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
    avatars = ["https://bootdey.com/img/Content/avatar/avatar4.png", "https://bootdey.com/img/Content/avatar/avatar2.png", "https://bootdey.com/img/Content/avatar/avatar1.png", "https://bootdey.com/img/Content/avatar/avatar3.png"];
    state = {
        value: "",
        chat: 2,
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

    changeConvo0 = (event) => {
        event.preventDefault();
        this.setState({
            chat: 0
        });
        console.log(this.state.chat)
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

                                        <a href="#" className="list-group-item list-group-item-action border-0" onClick={this.changeConvo0}>
                                            <div className="badge bg-success float-right"/>
                                            <div className="d-flex align-items-start">
                                                <img src={this.avatars[2]}
                                                     className="rounded-circle mr-1" alt="Sharon Lessman" width="40"
                                                     height="40"/>
                                                <div className="flex-grow-1 ml-3">
                                                    {this.chatNames[0]}
                                                    <div className="small"><span className="fas fa-circle chat-online">Online</span> </div>
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
                                                    <strong>{this.chatNames[0]}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.chat===2 ?
                                            <div className="position-relative">
                                                <div className="chat-messages p-4">
                                                    <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent="1:32 am" myavatar={this.avatars[this.state.chat]}>
                                                        Don’t worry, babe. I’ll make sure you’re the one the judges pick.
                                                    </Text>
                                                    <Text myclass={this.sentSmall} character="You" timesent="1:33 am" myavatar={this.avatars[3]}>
                                                        I want to believe you, but how can you be so sure?
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="1:33 am" myavatar={this.avatars[3]}>
                                                        Sometimes it feels like our love is impossible.
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[this.state.chat]} timesent="1:34 am" myavatar={this.avatars[this.state.chat]}>
                                                        I can prove our love is possible. There’s always a solution.
                                                    </Text>
                                                    <Text myclass={this.received} character={this.chatNames[this.state.chat]} timesent="1:38 am" myavatar={this.avatars[this.state.chat]}>
                                                        <img width="100%"src="https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/exampleNote.png?raw=true"/>
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="1:38 am" myavatar={this.avatars[3]}>
                                                        You’re such a nerd :)
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[this.state.chat]} timesent="3:12 pm" myavatar={this.avatars[this.state.chat]}>
                                                        I think someone is onto us...
                                                    </Text>
                                                    <Text myclass={this.sentSmall} character="You" timesent="3:12 pm" myavatar={this.avatars[3]}>
                                                        But we’ve been so careful!
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[this.state.chat]} timesent="3:13 pm" myavatar={this.avatars[this.state.chat]}>
                                                        Not careful enough. I think they might be tapping my phone. We’ll have to find a new way to communicate.
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[this.state.chat]} timesent="3:13 pm" myavatar={this.avatars[this.state.chat]}>
                                                        Don’t reply to this. I’m deleting the conversation.                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[this.state.chat]} timesent="3:14 pm" myavatar={this.avatars[this.state.chat]}>
                                                        But I’m not giving up on you, Vera                                                    </Text>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}