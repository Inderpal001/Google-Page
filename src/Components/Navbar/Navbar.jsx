import { IoApps } from "react-icons/io5";
import "./Navbar.scss"
import google from "../../assets/google.png"
import { HiSearch } from "react-icons/hi";
import mic from "../../assets/mic.png"
import lens from "../../assets/google-lens.png"
import NavList from "./NavList";
import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function Navbar() {

  return (
    <div className="navbar">
        <div className="upper-Navbar">
            <div className="left-upper-nav">
                <a href="/"><img src={google} alt="" className="logo"/></a>
                <div className="search-input-div">
                    <input type="text" placeholder="Search google or type a URL" className="search-input"/>
                    <HiSearch className="search-icon left-icon"/>
                    <img src={mic} alt="" className="search-input-img"/>
                    <img src={lens} alt="" className="search-input-img"/>
                    <HiSearch className="search-icon right-icon" />
                </div>
            </div>
            <div className="right-upper-nav">
                <IoApps className="apps"/>
                <div className="profile">I</div>
            </div>
        </div>
        <div className="lower-Navbar">
           <div className="flex">
           <NavList text="Sign in"/>
            <NavList text="Mail"/>
            <NavList text="Account"/>
            <NavList text="Play"/>
            <NavList text="Translater"/>
            <NavList text="Images"/>
            <NavList text="Web"/>
            <NavList text="History"/>
           </div>
           <div className="tools">
                <p className="filter">
                    <select className="selection">
                    <option value="">All filters</option>
                    <option value="">Images</option>
                    <option value="">Maps</option>
                    <option value="">Shopping</option>
                    <option value="">Videos</option>
                    <option value="">News</option>
                    <option value="">Books</option>
                    <option value="">Flights</option>
                    <option value="">Finance</option>
                    </select> 
                    <TfiLayoutLineSolid className="line"/> Tools
                </p>
           </div>
        </div>
    </div>
  )
}
