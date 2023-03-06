import getImageBoobaly from "../backend/getImageBoobaly";
import getPair from "../backend/getPair";
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
    let url = getImageBoobaly("Banana-Toast-Recipe-Image-1.jpg");
    console.log(url);
}
async function test2(){
    /*
    console.log("Testing 2!")
    let rankings = await retrieveRankings("1", 1);
    console.log(rankings);
    console.log(getPair(rankings[0]));
    */
    let url = await getImageBoobaly("Banana-Toast-Recipe-Image-1.jpg");
    console.log(url);
}

function ButtonTest() {
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

export default ButtonTest;