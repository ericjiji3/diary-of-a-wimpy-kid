import logo from './logo.svg';
import Home from './Home.js';
import One from './One.js';
import Two from './Two.js';
import Three from './Three.js';
import Four from './Four.js';
import Five from './Five.js';
import Six from './Six.js';
import Seven from './Seven.js';
import Eight from './Eight.js';
import Nine from './Nine.js';

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
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/one" element={<One />}/>
          <Route path="/two" element={<Two />}/>
          <Route path="/three" element={<Three />}/>
          <Route path="/four" element={<Four />}/>
          <Route path="/five" element={<Five />}/>
          <Route path="/six" element={<Six />}/>
          <Route path="/seven" element={<Seven />}/>
          <Route path="/eight" element={<Eight />}/>
          <Route path="/nine" element={<Nine />}/>
        </Routes>
        </div>
  );
}

export default App;
