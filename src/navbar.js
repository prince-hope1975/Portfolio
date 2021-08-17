import React,{ useState } from "react";
import {Light,Dark} from "./SVGS/svgs"
import {AiFillHome} from "react-icons/ai"
import { GiFrogPrince, GiComputerFan } from "react-icons/gi";
import  {FcAbout} from "react-icons/fc"
import { FaMoneyBillWave } from "react-icons/fa";

 const Navbar =()=>{
     const [state , setState]= useState(true);
    const handleClickDark = () => {
   const div = document.body;

      setState(!state);
      div.classList.replace("dark", "light");
    }; const handleClickLight = () => {
   const div = document.body;

      setState(!state);
      div.classList.replace("light","dark")

    };
  
    const handlesSolar =(e)=>{
   const div = document.body;

     e.style.cssText=`--bg-solar:white;`
     div.classList.add("solar")
  //  }

    }
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-link">
              <span className="link-text logo-text">PrinceShip</span>
              <GiFrogPrince />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <AiFillHome />
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FcAbout />
              <span className="link-text">About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <GiComputerFan />
              <span className="link-text">Tech Stack</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FaMoneyBillWave />
              <span className="link-text">Hire Me</span>
            </a>
          </li>
          <li className="nav-item" id="themeButton">
            <a href="#" className="nav-link">
              {state ? (
                <Dark onClick={handleClickLight} />
              ) : (
                <Light onClick={handleClickDark} />
              )}
              <span className="link-text">Themify</span>
            </a>
          </li>
        </ul>
      </nav>
    );
}
export default Navbar;