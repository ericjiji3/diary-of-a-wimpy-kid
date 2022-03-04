import logo from './logo.svg';
import Home from './Home.js';
import One from './Entries/One.js';
import Two from './Entries/Two.js';
import Three from './Entries/Three.js';
import Four from './Entries/Four.js';
import Five from './Entries/Five.js';
import Six from './Entries/Six.js';
import Seven from './Entries/Seven.js';
import Eight from './Entries/Eight.js';
import Nine from './Entries/Nine.js';
import Ten from './Entries/Ten.js';
import Eleven from './Entries/Eleven.js';
import Twelve from './Entries/Twelve.js';
import Thirteen from './Entries/Thirteen.js';
import Fourteen from './Entries/Fourteen.js';
import Fifteen from './Entries/Fifteen.js';

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
          <Route path="/ten" element={<Ten />}/>
          <Route path="/eleven" element={<Eleven />}/>
          <Route path="/twelve" element={<Twelve />}/>
          <Route path="/thirteen" element={<Thirteen />}/>
          <Route path="/fourteen" element={<Fourteen />}/>
          <Route path="/fifteen" element={<Fifteen />}/>
        </Routes>
        </div>
  );
}

export default App;
