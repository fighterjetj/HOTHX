import '../components/general.css';
import './ComparePage.css';

function ComparePage() {
    return(        
        <div>
            <h1 className="homepageTitle">Which is better</h1>
            <div className="wrapper"> 
                <div className="element left">
                    <img 
                        src="https://i.pinimg.com/236x/4e/d9/86/4ed986ae808fe276f95055e1452eb5e7--watermelon-head-watermelon-carving.jpg"
                        style={{
                            height: "350px"
                        }}
                        className="img"

                    />
                </div>
                <div className="element">
                    <img
                        src="https://i.pinimg.com/474x/16/66/3b/16663b7b4e3a846c925b93e0c9d83e34.jpg"
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
