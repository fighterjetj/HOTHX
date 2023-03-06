import { increment, ref, update } from "firebase/database";
import { db } from "./firebase";
import retreiveSingleRanking from "./retreiveSingleRanking";
/*
  Takes as input the ID of the ranking object to change
  As well as an object of changes formatted like:
  {
    name1: change_amt1,
    name2: change_amt2
  }
*/
async function updateRankings(rankingID, changes){
    // Getting the reference to the ranking object in the realtime database
    let data = await retreiveSingleRanking(rankingID);
    let creatorId = data["creator"];
    // Make a list of the names of all who will have changes
    let toChangeNames = Object.keys(changes);
    let allList = data.listVals;
    let toChangePairs = {};
    // Checking for the indexes of each name
    for (let i = 0; i < allList.length; i++){
        if (toChangeNames.includes(allList[i].name)) {
            toChangePairs[allList[i].name] = i;
        }
    }
    const dbRef = ref(db);
    const creatorPath = "users/" + creatorId + "/rankings/" + rankingID;
    const rankingPath = "rankings/" + rankingID;
    let updates = {};
    // Making a list of the objects to be updated
    console.log(toChangeNames);
    toChangeNames.forEach((name) => {
        console.log(name);
        let toAppend = "/" + toChangePairs[name];
        updates[creatorPath + toAppend + "/elo"] = increment(changes[name]);
        updates[rankingPath  + toAppend + "/elo"] = increment(changes[name]);
        updates[creatorPath + toAppend + "/num_ranked"] = increment(1);
        updates[rankingPath + toAppend + "/num_ranked"] = increment(1);
    });
    console.log(updates);
    update(dbRef, updates);
}

export default updateRankings;