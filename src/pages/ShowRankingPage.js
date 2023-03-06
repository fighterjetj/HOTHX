import "./rankingpage.css"
import "../components/general.css"

function ShowRankingPage() {


    let origInfo = {
            name: "strange fruits",
            creator: "Sally",
            timestamp: "asd",
            which: "better",
            listVals: [
                {
                    name: "THING",
                    img: "https://maltanita.files.wordpress.com/2021/04/img_0935.jpg",
                    elo: 10
                },
                {
                    name: "FRUIT",
                    img: "https://cdnimg.webstaurantstore.com/uploads/blog/2021/5/fresh-dragon-fruit-sliced-in-half-on-wooden-board-min.jpg",
                    elo: 30
                },
                {
                    name: "HOLY COW I CAN'T BELIEVE IT",
                    img: "https://www.camdendeli.com/wp-content/uploads/2020/06/oatmeal-with-fruit.jpg",
                    elo: 20
                }
            ]
    }

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

