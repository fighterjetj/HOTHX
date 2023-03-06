import { ref } from "firebase/database";
import { db } from "./firebase";
// Currently unimplemented
async function updateRankings(rankingID, changes){
    // Getting the reference to the ranking object in the realtime database
    const rankingRef = ref(db, "rankings/" + rankingID);
    //let creatorId = await
}