import { ImLab } from "react-icons/im";
import { IoApps } from "react-icons/io5";
import "./HomeNavbar.scss";
import { Link } from "react-router-dom";

export default function HomeNavbar() {
  return (
    <div className="home-navbar">
        <ul className="h-nav-link-continer">
            <Link to="/search" className="home-nav-link h-nav-links">Gmail</Link>
            <Link to="/search" className="home-nav-link h-nav-links">Images</Link>
            <Link to="/search" className="home-nav-Circle h-nav-links"><ImLab className="home-nav-icon" /></Link>
            <Link to="/search" className="home-nav-Circle h-nav-links"><IoApps className="home-nav-icon" /></Link>
            <Link to="/search" className="home-nav-Profile h-nav-links">I</Link>
        </ul>
    </div>
  )
}
