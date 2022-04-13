import logo from './logo.svg';
import Home from './Home.js';
import D1 from './Entries/D1.js';
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
import E25 from './Entries/E25.js';
import E26 from './Entries/E26.js';
import E27 from './Entries/E27.js';
import E28 from './Entries/E28.js';
import E29 from './Entries/E29.js';
import E30 from './Entries/E30.js';
import E31 from './Entries/E31.js';
import E32 from './Entries/E32.js';
import E33 from './Entries/E33.js';
import E34 from './Entries/E34.js';
import E35 from './Entries/E35.js';
import E36 from './Entries/E36.js';
import E37 from './Entries/E37.js';
import E38 from './Entries/E38.js';
import E39 from './Entries/E39.js';
import E40 from './Entries/E40.js';
import E41 from './Entries/E41.js';
import E42 from './Entries/E42.js';
import E43 from './Entries/E43.js';
import E44 from './Entries/E44.js';
import E45 from './Entries/E45.js';
import E46 from './Entries/E46.js';
import E47 from './Entries/E47.js';
import E48 from './Entries/E48.js';
import E49 from './Entries/E49.js';
import E50 from './Entries/E50.js';
import E51 from './Entries/E51.js';
import E52 from './Entries/E52.js';
import E53 from './Entries/E53.js';
import E54 from './Entries/E54.js';
import E55 from './Entries/E55.js';
import E56 from './Entries/E56.js';
import E57 from './Entries/E57.js';

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
      <div className="container row mx-auto my-3 align-middle">
        <div className="col col-xs paper">
        <Home/>
        </div>
        <div className="entries col col-xs">
      <Routes>
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/done" element={<D1 />}/>
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
          <Route path="/twentyfive" element={<E25 />}/>
          <Route path="/twentysix" element={<E26 />}/>
          <Route path="/twentyseven" element={<E27 />}/>
          <Route path="/twentyeight" element={<E28 />}/>
          <Route path="/twentynine" element={<E29 />}/>
          <Route path="/thirty" element={<E30 />}/>
          <Route path="/thirtyone" element={<E31 />}/>
          <Route path="/thirtytwo" element={<E32 />}/>
          <Route path="/thirtythree" element={<E33 />}/>
          <Route path="/thirtyfour" element={<E34 />}/>
          <Route path="/thirtyfive" element={<E35 />}/>
          <Route path="/thirtysix" element={<E36 />}/>
          <Route path="/thirtyseven" element={<E37 />}/>
          <Route path="/thirtyeight" element={<E38 />}/>
          <Route path="/thirtynine" element={<E39 />}/>
          <Route path="/forty" element={<E40 />}/>
          <Route path="/fortyone" element={<E41 />}/>
          <Route path="/fortytwo" element={<E42 />}/>
          <Route path="/fortythree" element={<E43 />}/>
          <Route path="/fortyfour" element={<E44 />}/>
          <Route path="/fortyfive" element={<E45 />}/>
          <Route path="/fortysix" element={<E46 />}/>
          <Route path="/fortyseven" element={<E47 />}/>
          <Route path="/fortyeight" element={<E48 />}/>
          <Route path="/fortynine" element={<E49 />}/>
          <Route path="/fifty" element={<E50 />}/>
          <Route path="/fiftyone" element={<E51 />}/>
          <Route path="/fiftytwo" element={<E52 />}/>
          <Route path="/fiftythree" element={<E53 />}/>
          <Route path="/fiftyfour" element={<E54 />}/>
          <Route path="/fiftyfive" element={<E55 />}/>
          <Route path="/fiftysix" element={<E56 />}/>
          <Route path="/fiftyseven" element={<E57 />}/>
        </Routes>
        </div>
        </div>
  );
}

export default App;
