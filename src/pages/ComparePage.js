import '../components/general.css';
import './ComparePage.css';
import getPair from '../backend/getPair.js';
import updateElo from '../backend/updateElo';
import dummyinfo from "./dummyinfo";


function ComparePage() {
    let [leftImg, rightImg] = getPair(dummyinfo);

    function leftWins(){
        let outcome = updateElo(leftImg, rightImg);
    }

    function rightWins() {
        let outcome = updateElo(rightImg, leftImg);
    }

    

    return(        
        <div>
            <h1 className="homepageTitle">Which is better</h1>
            <div className="wrapper"> 
                <div className="element left">
                    <img 
                        onClick={leftWins}
                        src={leftImg.img}
                        style={{
                            height: "350px"
                        }}
                        className="img"
                    />

                </div>
                <div className="element">
                    <img
                        onClick={rightWins}
                        src={rightImg.img}
                        style={{
                            height: "350px"
                        }}
                        className="img"
                    />
                </div>
            </div>
        </div>
    )
}

export default ComparePage;
