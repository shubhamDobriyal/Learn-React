import React, { useState } from "react";
import "./style.css";
export default function AccordionBody(props){
    const [display, setDisplay] = useState(false);

    return (
        <>
            <div className="accordion-div">
                <div className="ques-div">
                    <p className="button" onClick={() => {setDisplay(!display)}}> {display? "-" : "+" } </p>
                    <p className="ques"> {props.question} </p>
                </div>
                { display && <p className="ans"> {props.answer} </p> }
            </div>
        </>
    )
}