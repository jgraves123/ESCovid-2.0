import React, { useState} from "react";
import {Button, Modal} from 'react-bootstrap';


export default function TextPop(props) {
    const [show, setShow] = useState(true);

    const handleContinue = () => {
        setShow(false)
    };

    return (
        <>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{width: "100%", paddingBottom: 5}} align={"center"}>{props.content}</div>
                    <div align={"center"}>
                        <Button variant="primary" onClick={handleContinue}>
                            Continue
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}