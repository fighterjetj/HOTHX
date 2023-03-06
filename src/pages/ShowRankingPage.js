import "./rankingpage.css"
import "../components/general.css"
import dummyinfo from "./dummyinfo";

function ShowRankingPage() {

    let origInfo = dummyinfo;

    function sortByElo(a, b) {
        return a.elo - b.elo;
    }

    let newInfo = origInfo.listVals.sort(sortByElo);
    console.log(newInfo);

    let rankings = newInfo.map((listVal, index) => {
        
        return(
            <>
            <div className="centerHolder">
                <div className="rankingChip">
                    <div className="idx">{index + 1}</div>
                    <div className="name">{listVal.name}</div>
                    <img className="objimg" src={listVal.img}/>
                </div>
            </div>
            </>

        )
    })
    return(
        <>
        <div className="rankedtitle">
            <h1>{origInfo.name}</h1>
            <h3>ranked by: which is {origInfo.which}</h3>
        </div>
        <div>{rankings}</div>
        </>
    )
}

export default ShowRankingPage;

