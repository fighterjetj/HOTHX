/*
Takes as input a formatted rank subobject for the winner and the loser
So, should have elo field
Returns an object formatted like:
{
    winChange: (amt)
    loseChange: (amt)
}
*/
function updateElo(winningObject, losingObject) {    
    function calc_exp(prating, orating) {
        const exponent = (orating - prating) / 400;
        const denominator = 1 + Math.pow(10, exponent);
        const result = 1 / denominator;
        return result;
    }
    let winRate = winningObject["elo"];
    let loseRate = losingObject["elo"];
    
    const winExp = calc_exp(winRate, loseRate);
    let toReturn = {}
    toReturn.winChange = 32*(1-winExp);
    toReturn.loseChange = 32*(-winExp);
    return toReturn;
}

export default updateElo;