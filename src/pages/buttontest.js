import authSignup from "../backend/auth/authSignup";
function test() {
    console.log("Testing!");
    authSignup("Jackson", "jacksonrobertsteele@gmail.com", "password", "password");
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