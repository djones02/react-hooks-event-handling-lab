// Code EyesOnMe Component Here

function EyesOnMe() {
    function blur() {
        console.log("Hey! Eyes on me!")
    }
    function focus() {
        console.log("Good!")
    }
    return (
        <div>
            <button onFocus={focus} onBlur={blur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe