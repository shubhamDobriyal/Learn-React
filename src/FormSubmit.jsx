import React, { useState } from "react";

export default function FormSubmit() {
    
    const [fullName, setFullname] = useState({
        fname : "",
        lname : "",
        email : "",
        mobile : ""
    });
        
    const handleInput = (event) => {
        const {value, name} = event.target;
        
        setFullname((prevValue) => 
            return {
                ...prevValue,
                [name] : value
            }
            // if(name === "fname"){
            //   return {
            //     fname : value,
            //     lname : prevValue.lname,
            //     email : prevValue.email,
            //     mobile : prevValue.mobile
            //   }
            // }else if(name === "lname"){
            //   return{
            //     fname : prevValue.fname,
            //     lname : value,
            //     email : prevValue.email,
            //     mobile : prevValue.mobile
            //   }
            // }
            // else if(name === "email"){
            //     return{
            //       fname : prevValue.fname,
            //       lname : prevValue.lname,
            //       email : value,
            //       mobile : prevValue.mobile
            //     }
            // }else if(name === "mobile"){
            //     return{
            //       fname : prevValue.fname,
            //       lname : prevValue.lname,
            //       email : prevValue.email,
            //       mobile : value
            //     }
            // }
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        alert("submitted");
    }

    return (
        <>
            <div className="form-submit-container">
                <div className="form-submit-div">
                    <h1> Hello {fullName.fname} {fullName.lname} </h1>
                    <p> {fullName.email} </p>
                    <p> {fullName.mobile} </p>
                    <form onSubmit={onFormSubmit}>
                        <div className="input-field">
                            <label>First Name : </label>
                            <input type="text"  name="fname" onChange={handleInput} value={fullName.fname} />
                        </div>
                        <div className="input-field">
                            <label>Last Name : </label>
                            <input type="text"  name="lname" onChange={handleInput} value={fullName.lname} />
                        </div>
                        <div className="input-field">
                            <label>Email : </label>
                            <input type="text"  name="email" onChange={handleInput} value={fullName.email} />
                        </div>
                        <div className="input-field">
                            <label>Mobile : </label>
                            <input type="text"  name="mobile" onChange={handleInput} value={fullName.mobile} />
                        </div>
                        <div className="button">
                        <button> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}