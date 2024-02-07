import '../App.css';

function Hello() {

    // function showName(){
    //     console.log("Mike");
    // }

    function showAge(age) {
        console.log();
    }

    function showText(txt) {
        console.log(txt);
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showAge}>Show name</button>
            <button onClick={() => {
                console.log(50);
            }}>Show age</button>
            <input type='text'
                onChange={e => {
                    const txt = e.target.value;
                    showText(txt);
                }}
            />
        </div>
    );
}

export default Hello;