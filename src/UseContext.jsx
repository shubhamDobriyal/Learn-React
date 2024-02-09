import React, { createContext } from "react";
import { useContext } from "react";
import ChildC from "./ChildC";


let firstName = createContext();
let lastName = createContext();

export default function UseContext(){    
    return(
        <firstName.Provider value={"Shubham"}>
            <lastName.Provider value={"Dobriyal"}>
                <ChildC />
            </lastName.Provider>
        </firstName.Provider>
    )

}

export {firstName, lastName};