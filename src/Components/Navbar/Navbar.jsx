import React from 'react';
import { IoApps } from "react-icons/io5";
import "./Navbar.scss"
import google from "../../assets/google.png"
import { GrSearch } from "react-icons/gr";
import mic from "../../assets/mic.png"
import lens from "../../assets/google-lens.png"
import NavList from './NavList';
import { FaCaretDown } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="upper-Navbar">
            <div className="left-upper-nav">
                <img src={google} alt="" className='logo'/>
                <div className="search-input">
                    <GrSearch className='search-icon'/>
                    <input type="text" placeholder='Search google or type a URL' />
                    <img src={mic} alt="" />
                    <img src={lens} alt="" />
                </div>
            </div>
            <div className="right-upper-nav">
                <IoApps className='apps'/>
                <div className="profile">I</div>
            </div>
        </div>
        <div className="lower-Navbar">
           <div className='flex'>
           <NavList text="Sign in"/>
            <NavList text="Mail"/>
            <NavList text="Account"/>
            <NavList text="Play"/>
            <NavList text="Translater"/>
            <NavList text="Images"/>
            <NavList text="Web"/>
            <NavList text="History"/>
           </div>
           <div className='tools'>
                <p>All filters <FaCaretDown /> <TfiLayoutLineSolid className='line'/> Tools</p>
           </div>
        </div>
    </div>
  )
}
