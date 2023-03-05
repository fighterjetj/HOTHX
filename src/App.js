import logo from './logo.svg';
import HomePage from './pages/Homepage';
import SigninPage from './pages/SigninPage';
import UploadPage from './pages/UploadPage';
import ComparePage from './pages/ComparePage'

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="/SigninPage" element={<SigninPage />}/>
                <Route path="/UploadPage" element={<UploadPage />}/>
                <Route path="/ComparePage" element={<ComparePage />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
