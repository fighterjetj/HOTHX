/*
Takes as input a list of objects for the ranking
Formatted as necessary for makeRanking
Checks if there are any repeats
This is used because we later use the unique names to identify the various objects being ranked
*/

function repeatNames(rankList) {
    // Checks if name exists in set
    const seen = new Set();
    rankList.forEach((object)=>{
        if (seen.has(object["name"])){
            return true;
        }
        seen.add(object["name"]);
    });
    return false;
}

export default repeatNames;