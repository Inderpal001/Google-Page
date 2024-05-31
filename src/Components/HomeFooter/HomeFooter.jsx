import React from "react";
import "./HomeFooter.scss"
import { Link } from "react-router-dom";

export default function HomeFooter() {
  return (
    <div className="home-footer">
      <div className="upper-footer">
        <Link to="/search" className="footer-links">India</Link>
      </div>

      <div className="lower-footer">
        <div className="left-lower-footer">
          <Link to="/search" className="footer-links">About</Link>
          <Link to="/search" className="footer-links"> Advertising </Link>
          <Link to="/search" className="footer-links"> Business</Link>
          <Link to="/search" className="footer-links"> How Search works</Link>
        </div>
        <div className="right-lower-footer">
          <Link to="/search" className="footer-links"> Privacy</Link>
          <Link to="/search" className="footer-links"> Terms</Link>
          <Link to="/search" className="footer-links"> Settings</Link>
        </div>
      </div>
    </div>
  )
}
