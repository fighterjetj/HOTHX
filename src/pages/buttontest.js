function test() {
    console.log("Testing!");
}

function buttonTest() {
    return (
        // <div>
        <div onClick={test}>
            button
        </div>
    )
}

export default buttonTest;