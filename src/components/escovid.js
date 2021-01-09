import React, {Component, Fragment} from 'react';
import "./index.css";
import ReactPlayer from "react-player";


//showing how to use another generic component I guess (this is composition not inheritance apparently)
function FancyBorder(props) {
    return (
        <div className={'FancyBorder'} align={"center"}>
            {props.children}
        </div>
    );
}

//Post has the basic structure, generic component
export function Post(props){
    return(
        <FancyBorder>
            <div className = "container content-section" tabindex="0">
                <h1 className="article-title">{props.title}</h1>
                {props.children}
                <p className="article-content">{props.caption}</p>
            </div>
        </FancyBorder>
    )
}

class Escovid extends Component {

    render() { //specific posts render more generic post structure
        return (
            <div>
                <Post title={"Title"} caption={"Caption"}>
                    <p>Additional content is added here</p>
                </Post>
                <Post title={"Title2"} caption={"Caption2"}>
                    <div align="center">
                        <ReactPlayer url='https://www.youtube.com/watch?v=fhYMh6KTJMQ' playing="true" loop="true" volume="null" muted="true"/>
                    </div>
                </Post>
            </div>
        );
    }
}

export default Escovid;