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
              2.15.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/two'>
              2.16.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/three'>
              2.17.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/four'>
              2.18.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/five'>
              2.19.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/six'>
              2.20.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/seven'>
              2.21.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/eight'>
              2.22.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/nine'>
              2.23.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/ten'>
              2.24.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/eleven'>
              2.25.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/twelve'>
              2.26.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/thirteen'>
              2.27.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/fourteen'>
              2.28.22
            </NavLink>
          </li>
          <li>
          <NavLink to='/fifteen'>
              3.1.22
            </NavLink>
          </li>
        </ul>
      
    )
}

export default Home;