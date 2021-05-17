import React from "react";
import { Card, Button} from 'react-bootstrap';
import Headroom from "react-headroom";
import {Navigation} from "../index";
import Exit from "../game/exit";


function Room() {
    let showPop = localStorage.getItem('seconds') !== null;

    return (
        <div>
            <Headroom>
                <Navigation/>
            </Headroom>
            <div align={"center"}>
            <div style={{padding: "2vw", display: "inline-block", verticalAlign: "top", }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/escovid-gif3.gif?raw=true"/>
                    <Card.Body>
                        <Card.Title>ESCovid</Card.Title>
                        <Card.Text>
                            Covid-19 has sent the world into a tailspin. Can you help save it?
                        </Card.Text>
                        <Button variant="primary" href={"/escovid"}>Begin</Button>
                    </Card.Body>
                </Card>
            </div>
            <div style={{padding: "2vw", display: "inline-block", verticalAlign: "top", }}>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/anonymous.gif?raw=true" />
                    <Card.Body>
                        <Card.Title>Anonymous Connections</Card.Title>
                        <Card.Text>
                            One strange email and encrypted attachment later, and you are on the hunt for answers!
                        </Card.Text>
                        <Button variant="primary" href={"/anon"}>Begin</Button>
                    </Card.Body>
                </Card>
            </div>
            <div style={{padding: "2vw", display: "inline-block", verticalAlign: "top", }}>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/dream-gif.gif?raw=true" />
                    <Card.Body>
                        <Card.Title>Dreamscape</Card.Title>
                        <Card.Text>
                            Coming Soon!
                        </Card.Text>
                        <Button variant="primary">Be on the lookout!</Button>
                    </Card.Body>
                </Card>
            </div>
            </div>
            <Exit show={showPop}/>
        </div>

    );
}

export default Room;
