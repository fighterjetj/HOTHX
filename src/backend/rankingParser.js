/*
By default, ranking objects are stored like:
{
    0: {individual rank info},
    1: {individual rank info},
    ...
    n: {individual rank info},
    creator:
    name:
    timestamp:
    which:
}
This is because the realtime db cannot store an array, it must be tree structured
We want to convert elements with keys 0->n into a contiguous array
This function parses out the object and it becomes transformed into an object formatted like:
{
    listVals: [{},{}...{}],
    creator:
    name:
    timestamp:
    which:
}
*/
/*
const testVals = {
    0: {
        elo: 0,
        name: "test 0",
        image: "",
        num_ranked: 0
    },
    1: {
        elo: 0,
        name: "test 1",
        image: "",
        num_ranked: 0
    },
    2: {
        elo: 2,
        name: "test 2",
        image: "",
        num_ranked: 0
    },
    creator: "Test creator",
    name: "Test ranking",
    timestamp: 1678062415270,
    which: "better"
}
*/
function rankingParser(rankObject){
    let tempList = [];
    let key = 0;
    // Realtime database cannot store arrays, so we need to convert from an object with keys equal to the index to an actual array
    while (key in rankObject){
        tempList.push(rankObject[key]);
        delete rankObject[key];
        key++;
    }
    rankObject.listVals = tempList;
    return rankObject;
}

export default rankingParser;