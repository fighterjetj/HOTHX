import Homepage from './pages/Homepage';
import ButtonTest from './pages/buttontest';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<Homepage />}/>
                <Route exact path="/ButtonTest" element={<ButtonTest />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
