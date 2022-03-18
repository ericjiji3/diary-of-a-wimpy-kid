import React, {useEffect, useRef, useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import "./Home.css";

function Home(props){
  let isMobile = useRef(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const resize = () => {
      if(window.innerWidth > 450){
        if(isMobile.current){
          isMobile.current = false;
          setMobile(false);
        }
      }
      else{
        if(!isMobile.current){
          isMobile.current = true;
          setMobile(true);
        }
      }
    }
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);

  }, [])
    return(
        <div className="dates d-flex flex-wrap">
          <NavLink to='/done'>
                2.20.21
              </NavLink>
              <NavLink to='/one'>
                2.15.22
              </NavLink>
            <NavLink to='/two'>
                2.16.22
              </NavLink>
            <NavLink to='/three'>
                2.17.22
              </NavLink>
            <NavLink to='/four'>
                2.18.22
              </NavLink>
            <NavLink to='/five'>
                2.19.22
              </NavLink>
            <NavLink to='/six'>
                2.20.22
              </NavLink>
            <NavLink to='/seven'>
                2.21.22
              </NavLink>
            <NavLink to='/eight'>
                2.22.22
              </NavLink>
            <NavLink to='/nine'>
                2.23.22
              </NavLink>
            <NavLink to='/ten'>
                2.24.22
              </NavLink>
            <NavLink to='/eleven'>
                2.25.22
              </NavLink>
            <NavLink to='/twelve'>
                2.26.22
              </NavLink>
            <NavLink to='/thirteen'>
                2.27.22
              </NavLink>
            <NavLink to='/fourteen'>
                2.28.22
              </NavLink>
            <NavLink to='/fifteen'>
                3.1.22
              </NavLink>
            <NavLink to='/sixteen'>
                3.2.22
              </NavLink>
            <NavLink to='/seventeen'>
                3.3.22
              </NavLink>
            <NavLink to='/eighteen'>
                3.4.22
              </NavLink>
            <NavLink to='/nineteen'>
                3.5.22
              </NavLink>
            <NavLink to='/twenty'>
                3.6.22
              </NavLink>
            <NavLink to='/twentyone'>
                3.7.22
              </NavLink>
            <NavLink to='/twentytwo'>
                3.8.22
              </NavLink>
            <NavLink to='/twentythree'>
                3.9.22
              </NavLink>
            <NavLink to='/twentyfour'>
                3.10.22
              </NavLink>
              <NavLink to='/twentyfive'>
                3.11.22
              </NavLink>
              <NavLink to='/twentysix'>
                3.12.22
              </NavLink>
              <NavLink to='/twentyseven'>
                3.13.22
              </NavLink>            
              <NavLink to='/twentyeight'>
                3.14.22
              </NavLink>          
              <NavLink to='/twentynine'>
                3.15.22
              </NavLink>
              <NavLink to='/thirty'>
                3.16.22
              </NavLink>
              <NavLink to='/thirtyone'>
                3.17.22
              </NavLink>
          
          
        </div>
      
    )
}

export default Home;