import { db } from "./firebase";
import { ref, get } from "firebase/database";
import rankingParser from "./rankingParser";

// Takes as input the uid of a user and returns all of their rankings
async function retrieveRankings(uid) {
    // Making a reference to the rankings
    const rankingRef = ref(db, "users/" + uid + "/rankings");
    let data;
    let rankObject;
    let rankings = [];
    return await get(rankingRef).then((snapshot) => {
        // Getting the raw data)
        data = snapshot.val();
        if (data) {
            // Iterating over all the data
            for (const val in data){
                rankObject = data[val];
                rankings.push(rankingParser(rankObject));
            }
        }
        return rankings;
    });
}

export default retrieveRankings;