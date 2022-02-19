import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Link
  } from "react-router-dom";

function Home(){
    return(
        
        <ul>
          <li>
            <NavLink to='/one'>
              2/15/22
            </NavLink>
          </li>
          <li>
          <NavLink to='/two'>
              2/16/22
            </NavLink>
          </li>
          <li>
          <NavLink to='/two'>
              2/17/22
            </NavLink>
          </li>
        </ul>
      
    )
}

export default Home;