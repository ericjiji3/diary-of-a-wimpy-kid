import React, {useEffect, useRef, useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram,
  faSpotify,
  faLinkedin,
  faTwitch
} from "@fortawesome/free-brands-svg-icons";
import {faBurger} from "@fortawesome/free-solid-svg-icons";

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
      <div className="h-100 position-relative">
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
              <NavLink to='/thirtytwo'>
                3.18.22
              </NavLink>
              <NavLink to='/thirtythree'>
                3.19.22
              </NavLink>
              <NavLink to='/thirtyfour'>
                3.20.22
              </NavLink>
              <NavLink to='/thirtyfive'>
                3.21.22
              </NavLink>
              <NavLink to='/thirtysix'>
                3.22.22
              </NavLink>
              <NavLink to='/thirtyseven'>
                3.23.22
              </NavLink>
              <NavLink to='/thirtyeight'>
                3.24.22
              </NavLink>
              <NavLink to='/thirtynine'>
                3.25.22
              </NavLink>
              <NavLink to='/forty'>
                3.26.22
              </NavLink>
              <NavLink to='/fortyone'>
                3.27.22
              </NavLink>
              <NavLink to='/fortytwo'>
                3.28.22
              </NavLink>
              <NavLink to='/fortythree'>
                3.29.22
              </NavLink>
              <NavLink to='/fortyfour'>
                3.30.22
              </NavLink>
              <NavLink to='/fortyfive'>
                3.31.22
              </NavLink>
              <NavLink to='/fortysix'>
                4.1.22
              </NavLink>
              <NavLink to='/fortyseven'>
                4.2.22
              </NavLink>
              <NavLink to='/fortyeight'>
                4.3.22
              </NavLink>
              <NavLink to='/fortynine'>
                4.4.22
              </NavLink>
              <NavLink to='/fifty'>
                4.5.22
              </NavLink>
              <NavLink to='/fiftyone'>
                4.6.22
              </NavLink>
              <NavLink to='/fiftytwo'>
                4.7.22
              </NavLink>
              <NavLink to='/fiftythree'>
                4.8.22
              </NavLink>
              <NavLink to='/fiftyfour'>
                4.9.22
              </NavLink>
              <NavLink to='/fiftyfive'>
                4.10.22
              </NavLink>
              <NavLink to='/fiftysix'>
                4.11.22
              </NavLink>
              <NavLink to='/fiftyseven'>
                4.12.22
              </NavLink>
              <NavLink to='/fiftyeight'>
                4.13.22
              </NavLink>
          
        </div>
        <div className="socials">
            <a href = "https://twitter.com/dj_ji3" className = "twitter px-4 col-1" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <a href = "https://www.instagram.com/dj_ji/" className = "instagram px-4 col-1" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a href = "https://chicken-sandwich.herokuapp.com/" className = "chicken-sandwich px-4 col-1" target="_blank">
                <FontAwesomeIcon icon={faBurger} size="3x" />
            </a>
            <a href = "https://open.spotify.com/user/qbm4hmd1ob4xw6rwf7bs09vso" className = "spotify px-4 col-1" target="_blank">
                <FontAwesomeIcon icon={faSpotify} size="3x" />
            </a>
            <a href = "https://www.twitch.tv/dj_ji3" className = "twitch px-4 col-1" target="_blank">
              <FontAwesomeIcon icon={faTwitch} size="3x"/>
            </a>
        </div>
      </div>
    )
}

export default Home;