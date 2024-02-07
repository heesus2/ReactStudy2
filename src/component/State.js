import { useState } from "react";

function State() {

    // let name = "Mike"
    const [name, setName] = useState('Mike');

    function changeName() {
        // name = name === "Mike" ? "Jane" : "Mike";
        // document.getElementById("name").innerText = name;

    }

    return (
        <div>
            {/* <h1>state</h1> */}
            <h2 id="name">{name}</h2>
            <button
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                }}>
                Change
            </button>
        </div>
    );
}




export default State;