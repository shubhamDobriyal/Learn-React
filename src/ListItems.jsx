import React  from "react";


export default function ListItems(props){
    
    return(
        <>
            <div className="list-items">
                <button className="del-button" onClick={() => {
                    props.selected(props.id)
                }}> x </button>
                <li>{props.listValue}</li>
            </div>
        </>
    )
}


