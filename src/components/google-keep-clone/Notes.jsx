import React from "react";

export default function Notes(props) {
  
  const deleteButtonClick = () => {
    props.delete(props.id);
  } 
  
  return (
    <>
      <div className="notes-div">
        <h3> {props.title} </h3>
        <p> {props.content} </p>
        <button onClick={deleteButtonClick}>
          <i className="fa-solid fa-trash-can"></i>{" "}
        </button>
      </div>
    </>
  );
}
