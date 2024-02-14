import React from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import Footer from "./Footer";
import "./style.css"

export default function GoogleKeepClone(){
    return (
        <>
            <Header />
            <CreateNote />
            <Notes />
            <Footer />
        </>
    )
}