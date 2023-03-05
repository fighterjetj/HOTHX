import './homepage.css'
import '../components/general.css'
import SparseButton from '../components/SparseButton'
import { Link } from 'react-router-dom';


function Homepage() {
  return (
    <div>
      <div className="centerPage">
        <h1 className="homepageTitle">My Rankers</h1>
        <Link to={"/UploadPage"} style={{textDecoration: 'none'}}>
          <SparseButton width="200px" height="200px" type="add"/>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
