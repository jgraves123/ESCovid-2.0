import React from "react";

//showing how to use another generic component I guess (this is composition not inheritance apparently)
function FancyBorder(props) {
    return (
        <div className={'FancyBorder'} align={"center"}>
            {props.children}
        </div>
    );
}


//Post has the basic structure, generic component
export default function Post(props){
    return(
            <div className = "container content-section" style={{width: "40%"}} tabindex="0">
                <h2>{props.title}</h2>
                {props.children}
                <p className="article-content">{props.caption}</p>
            </div>
    )
}