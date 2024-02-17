import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import Footer from "./Footer";
import "./style.css"

export default function GoogleKeepClone(){
    
    const[item, setItem] = useState([]);

    const addNote = (note) => {
        setItem((existingItem) => {
            return [
                ...existingItem, note
            ]
        })
    }

    const deleteNote = (id) => {
        setItem((existingItem) => {
           return ( existingItem.filter((value, index) => {
            return index !== id;
        }))
        })
    }
    
    return (
        <>
            <Header />
            <CreateNote fnCall={addNote}   />
            {
                item.map((value, index) => {
                    return (<Notes key={index} id={index} title={value.title} content={value.content} delete={deleteNote} />)
                })
            }
            <Footer />
        </>
    )
}