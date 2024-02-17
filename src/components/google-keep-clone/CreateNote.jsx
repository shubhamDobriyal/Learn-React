import React, { useState } from "react";

export default function CreateNote(props) {
  const [inputValue, setInput] = useState({
    title: "",
    content: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setInput((oldValues) => {
      return {
        ...oldValues,
        [name]: value,
      };
    });

  };

  const addEvent = (event) => {
    event.preventDefault();
    props.fnCall(inputValue);
    
    setInput({
      title: "",
      content: "",
    });

  };

  return (
    <>
      <section className="create-note-section">
        <div className="create-note-div">
          <form>
            <input
              type="text"
              value={inputValue.title}
              name="title"
              placeholder="Write title"
              onChange={handleInput}
            />
            <textarea
              type="text"
              value={inputValue.content}
              name="content"
              placeholder="Write a note..."
              onChange={handleInput}
            />
            <button onClick={addEvent}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
