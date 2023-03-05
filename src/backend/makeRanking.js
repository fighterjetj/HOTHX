import { db } from "./firebase";
import { ref, push, set, serverTimestamp } from "firebase/database";


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

async function makeRanking(rankList, uid) {
    // Making database references
    const rankingRef = ref(db, "ranking");
    const newRankingRef = push(rankingRef);
    /*
    Make a ranking object to store under the user
    Should be formatted like:
    {
        name:
        description:
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
    console.log(rankingObj);
    const userRankingRef = ref(db, "users/" + uid + "/rankings/" + newRankingRef.key);
    // Saving the ranking object to the ranking part of the database
    set(newRankingRef, rankingObj);
    set(userRankingRef, rankingObj);
};

export default makeRanking;