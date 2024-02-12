import { useState } from "react"


export default function Ludo(){
    let [count, setCount] = useState({blue:0, red:0, green:0, yellow:0});

    const increment = (e) => {
        let color = e.target.id;
        count[color] += 1;
        setCount({ ...count });
    }
    
    return(
        <div className="ludo">
            <h2>Play Ludo</h2><br/>
            <p>Blue's Turn Count is :{count.blue}</p>
            <button onClick={increment} id="blue" >Roll</button>
            <br/>
            <p>Red's Turn Count is :{count.red}</p>
            <button onClick={increment} id="red">Roll</button>
            <br/>
            <p>Green's Turn Count is :{count.green}</p>
            <button onClick={increment} id="green">Roll</button>
            <br/>
            <p>Yellow's Turn Count is :{count.yellow}</p>
            <button onClick={increment} id="yellow">Roll</button>

        </div>
    )
}