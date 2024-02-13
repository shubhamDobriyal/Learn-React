import React, { useState } from "react";
import {reactQuestions} from "./script";
import AccordionBody from "./AccordioBody";

export default function Accordion() {
    const [data] = useState(reactQuestions)
  return (
    <>
      <div className="accordion-container">
        <div className="accordion-body">
            <h1> React Interview Questions </h1>
                {data.map((value) => {
                    return <AccordionBody key={value.id} question={value.question} answer={value.answer} />;
                })}
        </div>
      </div>
    </>
  );
}
