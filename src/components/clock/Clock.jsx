import React from "react";

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
export default function Challenge1(){
    return (
    <>
        <h1>First date and time challenge in react</h1>
        <p>Current date is {currentDate}</p>
        <p>Current time is {currentTime}</p>
    </>
    );
}
