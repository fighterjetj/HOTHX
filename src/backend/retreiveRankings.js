import { db } from "./firebase";
import { ref, get } from "firebase/database";
import rankingParser from "./rankingParser";

async function retrieveRankings(uid, numRankings) {
    // Making a reference to the rankings
    const rankingRef = ref(db, "users/" + uid + "/rankings");
    let data;
    let rankObject;
    let rankings = [];
    return await get(rankingRef).then((snapshot) => {
        // Getting the raw data)
        data = snapshot.val();
        if (data) {
            console.log(data);
            // Iterating over all the data
            for (const val in data){
                rankObject = data[val];
                rankings.push(rankingParser(rankObject));
            }
            console.log(rankings);
        }
        return rankings;
    });
}

export default retrieveRankings;