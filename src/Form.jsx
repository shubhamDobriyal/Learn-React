import { useState } from "react";
import './App.css';


export default function Form(){

    let [value, setValue] = useState({name: "", mail:"", password: ""});

    const Update = (e) => { 
        setValue({...value,[e.target.name]:e.target.value});
    }

    return(
        <div className="form">
            <form>
                <label>Name:</label><br />
                <input type="text" placeholder="Enter text" name="name" value={value.name} onChange={Update}/><br />
                <label>Email:</label><br />
                <input type="email" placeholder="Enter text" name="mail" value={value.mail} onChange={Update}/>
                <br />
                <label>Password:</label>
                <br />
                <input type="password" placeholder="Enter text" name="password" value={value.password} onChange={Update}/><br /><br />
                <button>Submit</button>

            </form>
            <div className="result">
            </div>
        </div>
    )
}