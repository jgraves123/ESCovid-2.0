import React, {Component} from 'react';
import './xmas.css';
import Button from "react-bootstrap/Button";
import Remote from "./remote";




export default class RemoteButton extends Component {

    state = {
        remote_open: false,
    };


    openRemote = () => {
        this.setState({
            remote_open: !this.state.remote_open
        });
    };




    render() {
        return(
            <div style={{margin: "10px", marginTop: "10px", position: "absolute", width: "80%", zIndex: "10"}}>
                <div>
                    {/*if state is true, do this pop-up*/}
                    {this.state.remote_open ? <Remote toggle={this.openRemote}/> : null}

                </div>
                <Button onClick={this.openRemote}>Remote</Button>
            </div>
        );
    }
}

