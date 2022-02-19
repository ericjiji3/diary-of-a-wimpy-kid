import logo from './logo.svg';
import Home from './Home.js';
import One from './One.js';
import Two from './Two.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
      <div>
      <Home/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/one" element={<One />}/>
          <Route path="/two" element={<Two />}/>
        </Routes>
        </div>
  );
}

export default App;
