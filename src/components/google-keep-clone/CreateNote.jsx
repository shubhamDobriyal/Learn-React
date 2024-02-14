import React, { useState } from "react";

export default function CreateNote() {

    const[inputValue, setInput] = useState({
        title : "",
        content: ""
    });

    const handleInput = (event) => {
        const[name, value] = event.target;

        setInput(
        //   (oldValues) => {return {
        //         ...oldValues, 
        //         [name] : value,
        //     }
        // }
        );
    }

    return (
    <>
      <section className="create-note-section">
        <div className="create-note-div">
          <form >
            <input type="text" value={inputValue} name="title" placeholder="Write title" onChange={handleInput} />
            <textarea type="text" value={inputValue} name="content" placeholder="Write a note..." onChange={handleInput} />
            <button type="submit"> + </button>
          </form>
        </div>
      </section>
    </>
  );
}
