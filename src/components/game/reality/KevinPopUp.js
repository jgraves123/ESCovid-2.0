import React, { Component } from "react";
import Text from "../escovid/text";
import "../escovid/text.css"
import "../escovid/gform.css"
import Continue from "../continueButton";

export default class TextPopUp extends Component {
    state = {
    };

    handleClick = () => {
        this.props.toggle();
    };

    sentSmall = "chat-message-right pb-4 sent small-gap";
    receivedSmall = "chat-message-left pb-4 small-gap";
    chatNames = ["Unknown"];
    avatars = ["https://bootdey.com/img/Content/avatar/avatar8.png", "https://bootdey.com/img/Content/avatar/avatar6.png"];
    state = {
        value: "",
        chat: true,
        wrong:-1,
        attempt: "",
        pass: "",
        correct_pass: false,
        affirm: ""
    };

    handleChange = (event) => {
        console.log(event);
        this.setState({
            value: event.target.value
        });
    };

    openConvo = (event) => {
        event.preventDefault();
        this.setState({
            chat: !this.state.chat
        });
    };


    check = (event) => {
        event.preventDefault();
        this.setState({
            // affirm: this.temp === "YES" | this.temp === "yes" | this.temp === "Yes"
            affirm: true
        });
        console.log(this.state.affirm)
    };

    render() {
        return (
            <div className="modal2">
                    <div className="modal_content2">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                        <h2 align="center">iPhone Messages</h2>
                        <div>
                            <div className="card">
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
                                        <a href="#" className="list-group-item list-group-item-action border-0"
                                           onClick={this.openConvo}>
                                            <div className="badge bg-success float-right"/>
                                            <div className="d-flex align-items-start">
                                                <img src={this.avatars[1]}
                                                     className="rounded-circle mr-1" alt="Sharon Lessman" width="40"
                                                     height="40"/>
                                                <div className="flex-grow-1 ml-3">
                                                    {this.chatNames[0]}
                                                    <div className="small"><span
                                                        className="fas fa-circle chat-online">Online</span></div>
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
                                        {this.state.chat === true ?
                                            <div className="position-relative">
                                                <div className="chat-messages p-4">
                                                    <Text myclass={this.sentSmall} character="You"
                                                          myavatar={this.avatars[0]}>
                                                        This is going to sound strange but...I just woke up holding your phone number.
                                                    </Text>
                                                    <Text myclass={this.sentSmall} character="You"
                                                          myavatar={this.avatars[0]}>
                                                        Who are you? What's going on here??
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]}
                                                          myavatar={this.avatars[1]}>
                                                        I'm so glad you reached out! Corporate was very impressed with your interview.
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]}
                                                          myavatar={this.avatars[1]}>
                                                        In fact, we would like to offer you a job at Virtually Impossible Extreme RealiTV, inc.
                                                    </Text>
                                                    <Text myclass={this.sentSmall} character="You"
                                                          myavatar={this.avatars[0]}>
                                                        Um, that's very generous of you, but I haven't interviewed. I haven't even gotten a call back about my application.
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]}
                                                          myavatar={this.avatars[1]}>
                                                        Here at VIPER we have a bit of an unorthodox hiring process, so I'm not surprised you didn't get a call. But you certainly completed the interview.
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[0]}
                                                          myavatar={this.avatars[1]}>
                                                        Didn't you get the remote I sent you?
                                                    </Text>
                                                </div>
                                                <div className="flex-grow-0 py-3 px-4 border-top">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Type your message"
                                                               onChange={this.handleChange}/>
                                                        <button className="send" onClick={this.check}>Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                        }
                                        <Continue url={"/reality/givtime"} text={"Continue"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}