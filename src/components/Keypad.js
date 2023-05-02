// Code Keypad Component Here

function Keypad (){
    function keyPadInput() {
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={keyPadInput} type="password"></input>
        </div>
    )
}

export default Keypad;