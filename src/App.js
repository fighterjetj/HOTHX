import logo from './logo.svg';
import Homepage from './pages/Homepage';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<Homepage />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
