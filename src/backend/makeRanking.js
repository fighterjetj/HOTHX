import { db } from "./firebase";
import { ref, push, set, serverTimestamp } from "firebase/database";
import repeatNames from "./repeatNames";

/*
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
*/
/*
Takes as input a rankList, which is an array of objects formatted like:
{
    name:
    image:
}
The UID of the user currently logged in
The which (adjective used to judge the ranking)
The name of the entire ranking
*/
async function makeRanking(rankList, uid, which, rankingName) {
    // Must have at least 2 things to rank
    if (rankList.length < 2){
        throw new Error("Cannot make a ranking with less than 2 objects");
    }
    // Must not have any repeat names
    if (repeatNames(rankList)){
        throw new Error("Cannot have repeated names");
    }
    // Making database references
    const rankingRef = ref(db, "rankings");
    const newRankingRef = push(rankingRef);
    /*
    Make a ranking object to store under the user
    Should be formatted like:
    {
        name:
        image:
        elo:
        num_ranked:
    }
    */
    const newRankList = rankList.map((rank) => {
        return {
            ...rank,
            elo: 32,
            num_ranked: 0
        }
    })
    // Turning the list into an object
    let rankingObj = Object.assign({}, newRankList);
    // Adding timestamp, creator, name, and which fields
    rankingObj.timestamp = serverTimestamp();
    rankingObj.creator = uid;
    rankingObj.name = rankingName;
    rankingObj.which = which;
//    console.log(rankingObj);
    // Make a ref to where the new ranking should be
    const userRankingRef = ref(db, "users/" + uid + "/rankings/" + newRankingRef.key);
    // Saving the ranking object to the ranking part of the database
    set(newRankingRef, rankingObj);
    set(userRankingRef, rankingObj);
};

export default makeRanking;