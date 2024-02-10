import React from "react";
import { useState } from "react";
import ListItems from "./ListItems";

export default function TodoList() {
    const [input, setInput] = useState("");
    const [notes, setNotes] = useState([]);


    const handleInput = (event) => {
        const inputVal = event.target.value;
        setInput(inputVal)
    }

    const handleClick = () => {

        setNotes((oldNotes) => {
            return [...oldNotes, input]
        })

        setInput("")
    }

    const deleteItem = (id) => {
        setNotes((oldNotes) => {
            return oldNotes.filter((value, index) => {
                return index !== id;
            })
        })
    }
    
    return (
        <>
            <div className="todo-container">
                <div className="todo-card">
                    <div className="todo-head">
                        <h1>ToDo List</h1>
                    </div>
                    <div className="todo-body">
                        <div className="addNotes">
                            <input type="text" onChange={handleInput} value={input} />
                            <button className="add-btn" onClick={handleClick}> + </button>
                        </div>
                        <div className="list">
                            <ol>
                                {notes.map((notesVal, index) => {
                                    return <ListItems key={index} id={index} listValue={notesVal} selected={deleteItem} />
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}