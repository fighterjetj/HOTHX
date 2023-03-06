/*
Takes as input a parsed ranking object
50/50 chance to:
    Return the 2 which have been ranked the least often
    Return 2 chosen at random
*/

function getPair(rankObject){
    // Sorting the objects by num_ranked
    let objectsToRank = rankObject.listVals;
    if (objectsToRank.length < 2){
        throw new Error("Need at least 2 values in the ranking");
    }
    // Determining the 50/50 chance
    if (Math.random() < 0.5){
        objectsToRank.sort((a,b) => {return a.num_ranked - b.num_ranked});
        return [objectsToRank[0], objectsToRank[1]]
    } else {
        let randomIndex1 = Math.floor(Math.random()*objectsToRank.length);
        let randomIndex2 = randomIndex1;
        while (randomIndex1 === randomIndex2){
            randomIndex2 = Math.floor(Math.random()*objectsToRank.length);
        }
        return [objectsToRank[randomIndex1], objectsToRank[randomIndex2]];
    }
}
export default getPair;