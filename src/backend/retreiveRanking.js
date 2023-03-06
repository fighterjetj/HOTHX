import { db } from "./firebase";
import { onValue, ref, get } from "firebase/database";

async function retrieveRankings(uid, numRankings) {
    // Making a reference to the rankings
    const rankingRef = ref(db, "users/" + uid + "/rankings");
    let data;
    let rankObject;
    let rankings = [];
    await onValue(rankingRef, (snapshot) => {
        // Getting the raw data
        data = snapshot.val();
        // Iterating over all the data
        for (const val in data){
            rankObject = data[val];
            let tempList = [];
            let key = 0;
            // Realtime database cannot store arrays, so we need to convert from an object with keys equal to the index to an actual array
            while (key in rankObject){
                tempList.push(rankObject[key]);
                delete rankObject[key];
                key++;
            }
            rankObject.listVals = tempList;
            rankings.push(rankObject);
        }
    });
    return rankings;
}

export default retrieveRankings;