import authSignup from "../backend/auth/authSignup";
import authLogin from "../backend/auth/authLogin";
import makeRanking from "../backend/makeRanking";

const testRank = [
    {
        name: "Test 1",
        description: "Test 1 Description",
        image: ""
    },
    {
        name: "Test 2",
        description: "Test 2 Description",
        image: ""
    },
    {
        name: "Test 3",
        description: "Test 3 Description",
        image: ""
    },
    {
        name: "Test 4",
        description: "Test 4 Description",
        image: ""
    },
]

function test() {
    console.log("Testing!");
    authLogin("jacksonrobertsteele@gmail.com", "password");
    makeRanking(testRank, "1aeedd");
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