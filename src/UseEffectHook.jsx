import { useState } from "react";

export default function UseEffectHook() {
    let [stateA, setCountA] = useState(0);
    let [stateB, setCountB] = useState(100);


    function setChangeA(){
        setCountA(stateA + 1);
    }

    function setChangeB(){
        setCountB(stateB - 1);
    }
    return (
        <>

            <h1>Component 1 {stateA}</h1>
            <button onClick={setChangeA}>Comp 1</button>

            
            <h1>Component 2 {stateB}</h1>
            <button onClick={setChangeB}>Comp 2</button>
        </>
    );
}