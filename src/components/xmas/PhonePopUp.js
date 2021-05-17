import React, { Component } from "react";
import Text from "../escovid/text";

export default class PhonePopUp extends Component {
    state = {
    };

    handleClick = () => {
        this.props.toggle();
    };

    sent = "chat-message-right pb-4 sent";
    sentSmall = "chat-message-right pb-4 sent small-gap";
    received = "chat-message-left pb-4";
    receivedSmall = "chat-message-left pb-4 small-gap";
    chatNames = ["Benjamin Alston"];
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
                    <h2 align="center">iPhone Messages</h2>
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
                                                    <Text myclass={this.sentSmall} character="You" timesent="1:32 pm" myavatar={this.avatars[3]}>
                                                        Ben, I’ve had enough of this! We need to clear the air on everything
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="1:33 pm" myavatar={this.avatars[3]}>
                                                        Julia’s been acting really strange lately. I’m pretty sure she’s putting some of the pieces together!
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[this.state.chat]} timesent="2:50 pm" myavatar={this.avatars[this.state.chat]}>
                                                        Please Sarah, just give me a little more time to wrap my head around everything
                                                    </Text>
                                                    <Text myclass={this.receivedSmall} character={this.chatNames[this.state.chat]} timesent="2:50 pm" myavatar={this.avatars[this.state.chat]}>
                                                        I don’t think Caleb’s ready to hear this
                                                    </Text>
                                                    <Text myclass={this.sentSmall} character="You" timesent="3:11 pm" myavatar={this.avatars[3]}>
                                                        She emailed him!!!
                                                    </Text>
                                                    <Text myclass={this.sentSmall} character="You" timesent="3:12 pm" myavatar={this.avatars[3]}>
                                                        That’s it I’m heading there right now!
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="3:12 pm" myavatar={this.avatars[3]}>
                                                        289 Center St. right?
                                                    </Text>
                                                    <Text myclass={this.sent} character="You" timesent="4:02 pm" myavatar={this.avatars[3]}>
                                                        Hello Dad, don’t think we’ve met before but it looks like my mom forgot her phone. Can you let her know that I will be over there in a few xoxo Julia
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
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className={"inner"}>

                            <form id="path-answer" onSubmit={this.check_email_pass}>
                                <h3>Phone Number</h3>
                                <div className={"form-group"}>
                                    <input type="text" ref="val"
                                           placeholder={"Enter Number"}
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