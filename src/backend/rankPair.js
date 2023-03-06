import updateElo from "./updateElo"
import updateRankings from "./updateRankings";

/*
Takes as input:
The key ID for the ranking object in the database
The individual winning and losing objects
*/
async function rankPair(rankingID, winningObject, losingObject){
    const changes = updateElo(winningObject, losingObject);
    await updateRankings(rankingID, changes);
}
export default rankPair