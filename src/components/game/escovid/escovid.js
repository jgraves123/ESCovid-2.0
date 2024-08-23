import React, {Component, Fragment} from 'react';
import "../../index.css";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
import Instructions from "./instructions";














class Escovid extends Component {

    render() { //specific posts render more generic post structure
        if (this.props.page === "start"){
            return (
                <div><Instructions setName={this.props.setName} name={this.props.name}/></div>
            )
        }
        // else if (this.props.page === "gform"){
        //     return (
        //         <div align="center">
        //             <Gform/>
        //         </div>
        //     )
        // }
        // else if (this.props.page === "tumblr"){
        //     return (
        //         <div align="center">
        //             <Tumblr level={this.props.level} phase={this.props.phase}/>
        //         </div>
        //     )
        // } else if (this.props.page === "final"){
        //     return(
        //         <div align="center">
        //             <Link to="/escovid/final">
        //                 <button className="button"><h3>final stage</h3></button>
        //             </Link>
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             <Post title={"Title"} caption={"Caption"}>
        //                 <p>Additional content is added here</p>
        //             </Post>
        //             <Post title={"Title2"} caption={"Caption2"}>
        //                 <div align="center">
        //                     <ReactPlayer url='https://www.youtube.com/watch?v=fhYMh6KTJMQ' playing="true" loop="true" volume="null" muted="true"/>
        //                 </div>
        //             </Post>
        //         </div>
        //     );
        // }
    }
}

export default Escovid;