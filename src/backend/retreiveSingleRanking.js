import { ref, get } from "firebase/database";
import { db } from "./firebase";
import rankingParser from "./rankingParser";

async function retreiveSingleRanking(rankingID){
    // Making a reference to the ranking we want
    const rankingRef = ref(db, "rankings/" + rankingID);
    return await get(rankingRef).then((snapshot) => {
        let data = snapshot.val();
        // If we get no data, return null
        if (data){
            return rankingParser(snapshot.val());
        }
        return null;
    });
}