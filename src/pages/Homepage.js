import './homepage.css'
import AddProject from '../components/AddProject'
import { Link } from 'react-router-dom';


function Homepage() {
  return (
    <div>
      <div className="centerPage">
        <h1 className="homepageTitle">My Rankers</h1>
        <Link to={"/UploadPage"} style={{textDecoration: 'none'}}>
          <AddProject/>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
