/*
Takes as input a list of objects for the ranking
Formatted as necessary for makeRanking
Checks if there are any repeats
This is used because we later use the unique names to identify the various objects being ranked
*/

function repeatNames(rankList) {
    // Checks if name exists in set
    const seen = new Set();
    for (let key in rankList){
        if (seen.has(rankList[key]["name"])){
            console.log(rankList[key]["name"]);
            return true;
        }
        seen.add(rankList[key]["name"]);
    }
    return false;
}

export default repeatNames;