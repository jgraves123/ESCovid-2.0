import React from "react";
import { Card, Button} from 'react-bootstrap';
import Headroom from "react-headroom";
import {Navigation} from "../index";
import Exit from "../game/exit";


function Room() {
    let showPop = localStorage.getItem('team_name') !== null;

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
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div style={{padding: "2vw", display: "inline-block", verticalAlign: "top", }}>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/anonymous.gif?raw=true" />
                    <Card.Body>
                        <Card.Title>Anonymous Connections</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div style={{padding: "2vw", display: "inline-block", verticalAlign: "top", }}>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/dream-gif.gif?raw=true" />
                    <Card.Body>
                        <Card.Title>Dreamscape</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            </div>
            <Exit show={showPop}/>
        </div>

    );
}

export default Room;
