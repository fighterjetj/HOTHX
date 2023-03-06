import makeRanking from "../backend/makeRanking";
import retrieveRankings from "../backend/retreiveRankings";

const testRank = [
    {
        name: "Test 1",
        image: ""
    },
    {
        name: "Test 2",
        image: ""
    },
    {
        name: "Test 3",
        image: ""
    },
    {
        name: "Test 4",
        image: ""
    },
]


function test() {
    console.log("Testing!");
    makeRanking(testRank, "1", "better", "tester");
}
function test2(){
    console.log("Testing 2!")
    retrieveRankings("1", 1);
}

function buttonTest() {
    return (
        // <div>
        <div>
            <div onClick={test}>
                button1
            </div>
            <div onClick={test2}>
                button2
            </div>
        </div>
    )
}

export default buttonTest;