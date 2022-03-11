import logo from './logo.svg';
import Home from './Home.js';
import E1 from './Entries/E1.js';
import E2 from './Entries/E2.js';
import E3 from './Entries/E3.js';
import E4 from './Entries/E4.js';
import E5 from './Entries/E5.js';
import E6 from './Entries/E6.js';
import E7 from './Entries/E7.js';
import E8 from './Entries/E8.js';
import E9 from './Entries/E9.js';
import E10 from './Entries/E10.js';
import E11 from './Entries/E11.js';
import E12 from './Entries/E12.js';
import E13 from './Entries/E13.js';
import E14 from './Entries/E14.js';
import E15 from './Entries/E15.js';
import E16 from './Entries/E16.js';
import E17 from './Entries/E17.js';
import E18 from './Entries/E18.js';
import E19 from './Entries/E19.js';
import E20 from './Entries/E20.js';
import E21 from './Entries/E21.js';
import E22 from './Entries/E22.js';
import E23 from './Entries/E23.js';
import E24 from './Entries/E24.js';

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
      <div className="container row mx-auto align-middle">
        <div className="col paper">
        <Home/>
        </div>
        <div className="entries col">
      <Routes>
          {/* <Route path="/" element={<Home />}/> */}

          <Route path="/one" element={<E1 />}/>
          <Route path="/two" element={<E2 />}/>
          <Route path="/three" element={<E3 />}/>
          <Route path="/four" element={<E4 />}/>
          <Route path="/five" element={<E5 />}/>
          <Route path="/six" element={<E6 />}/>
          <Route path="/seven" element={<E7 />}/>
          <Route path="/eight" element={<E8 />}/>
          <Route path="/nine" element={<E9 />}/>
          <Route path="/ten" element={<E10 />}/>
          <Route path="/eleven" element={<E11 />}/>
          <Route path="/twelve" element={<E12 />}/>
          <Route path="/thirteen" element={<E13 />}/>
          <Route path="/fourteen" element={<E14 />}/>
          <Route path="/fifteen" element={<E15 />}/>
          <Route path="/sixteen" element={<E16 />}/>
          <Route path="/seventeen" element={<E17 />}/>
          <Route path="/eighteen" element={<E18 />}/>
          <Route path="/nineteen" element={<E19 />}/>
          <Route path="/twenty" element={<E20 />}/>
          <Route path="/twentyone" element={<E21 />}/>
          <Route path="/twentytwo" element={<E22 />}/>
          <Route path="/twentythree" element={<E23 />}/>
          <Route path="/twentyfour" element={<E24 />}/>
        </Routes>
        </div>
        </div>
  );
}

export default App;
