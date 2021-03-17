import React from "react";

export default function Text(props){
    return(
        <div className={props.myclass}>
            <div>
                <img src={props.myavatar}
                     className="rounded-circle mr-1" alt="Text message" width="40"
                     height="40"/>
                <div className="text-muted small text-nowrap mt-2">{props.timesent}</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                <div className="font-weight-bold mb-1">{props.character}</div>
                {props.children}
            </div>
        </div>
    )
}