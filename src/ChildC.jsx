import React, { useContext } from "react";
import {firstName, lastName} from './UseContext';

export default function ChildC(){
    let fName = useContext(firstName);
    let lName = useContext(lastName);
    return(<h1>My name is {fName} {lName}</h1>);
}