import React from "react";

export default function ImageCard(props){
    return (
        <>
            <a href="" target="_">
                <img src= {props.imgSrc} alt= {props.alt} />
            </a>
        </>
    );
}