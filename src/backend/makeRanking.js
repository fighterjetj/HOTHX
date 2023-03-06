import { db } from "./firebase";
import { ref, push, set, serverTimestamp } from "firebase/database";


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

async function makeRanking(rankList, uid, which, rankingName) {
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
    let rankingObj = Object.assign({}, newRankList);
    rankingObj.timestamp = serverTimestamp();
    rankingObj.creator = uid;
    rankingObj.name = rankingName;
    rankingObj.which = which;
    console.log(rankingObj);
    const userRankingRef = ref(db, "users/" + uid + "/rankings/" + newRankingRef.key);
    // Saving the ranking object to the ranking part of the database
    set(newRankingRef, rankingObj);
    set(userRankingRef, rankingObj);
};

export default makeRanking;