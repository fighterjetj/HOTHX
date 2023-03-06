import getPair from "../backend/getPair";
import makeRanking from "../backend/makeRanking";
import rankPair from "../backend/rankPair";
import retrieveRankings from "../backend/retreiveRankings";
import updateElo from "../backend/updateElo";

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
async function test2(){
    console.log("Testing 2!")
    let rankings = await retrieveRankings("1");
    //console.log(rankings);
    let pair = getPair(rankings[Object.keys(rankings)[0]]);
    //console.log(pair);
    //console.log(updateElo(pair[0], pair[1]));
    rankPair(Object.keys(rankings)[0], pair[0], pair[1]);
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