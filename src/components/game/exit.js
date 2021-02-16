import React, { useState} from "react";
import {Button, Modal} from 'react-bootstrap';


export default function Exit() {
    const [show, setShow] = useState(true);

    const handleContinue = () => {
        localStorage.clear();
        setShow(false)
    };

    const handleBack = () => {
        window.history.back();
    }

    return (
        <>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{width: "100%", paddingBottom: 5}} align={"center"}> Preceding will clear any games you currently have in progress. Do you want to continue?</div>
                    <div align={"center"} style={{width: "50%", height: 40, float: "left"}}>
                        <Button variant="primary" onClick={handleBack}>
                            Go Back
                        </Button>
                    </div>
                    <div align={"center"} style={{width: "50%", height: 40, float: "right"}}>
                    <Button variant="primary" onClick={handleContinue}>
                        Continue
                    </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}