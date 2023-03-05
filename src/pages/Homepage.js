import './homepage.css'
import AddProject from '../components/AddProject'

function Homepage() {
  return (
    <div>
      <div className="centerPage">
        <h1 className="homepageTitle">My Rankers</h1>
        <AddProject/>
      </div>
    </div>
  );
}

export default Homepage;
