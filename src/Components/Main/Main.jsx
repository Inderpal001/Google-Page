import React from "react";
import "./Main.scss";
import Results from "./Results/Results";
import g from "../../assets/g.png";
import { IoEarthSharp } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaYahoo } from "react-icons/fa";
import insta from "../../assets/insta.png"
import { Link } from "react-router-dom";

export default function Main() {

  return (
    <div className="main">
      <div className="left-main">
        <Results />
      </div>
      <div className="right-main">
        <div className="info">
          <div className="info-title">
            <div>
              <h2 className="info-title-name">Google</h2>
              <p className="info-title-company">IT Corporation <BsThreeDotsVertical /></p> 
            </div>
            <div>
              <img src={g} alt="" width={50} />
            </div>
          </div>

          <div className="info-site">
          <IoEarthSharp fontSize={21} className="earth-svg"/>
            <Link to="/" className="google">google.com</Link>
          </div>

          <div className="info-desc">
            <div className="info-desc-sm">
              <p className="all-info">
                Google LLC is an American multinational corporation and
                technology company focusing on online advertising, search engine
                technology, cloud computing, computer software, quantum
                computing, e-commerce, consumer electronics, and artificial
                intelligence.
              </p>
              <p className="all-info">
                <b>Founders:</b> <Link to="/" className="details">Larry Page, Sergey Brin</Link>
              </p>
              <p className="all-info">
                <b>Parent organization:</b>
                <Link to="/" className="details">Larry Page, Sergey Alphabet Inc.</Link>
              </p>
              <p className="all-info">
                <b>Subsidiaries:</b>
                <Link to="/" className="details">YouTube, Mandiant, Google AI, Firebase, MORE</Link>
              </p>
              <p className="all-info">
                <b>Area served:</b> <Link to="/" className="details">International</Link>
              </p>
              <p className="all-info">
                <b>CEO:</b> <Link to="/" className="details">Sundar Pichai (2 Oct 2015–)</Link>
              </p>
              <p className="all-info">
                <b>CMO:</b> <Link to="/" className="details">Lorraine Twohill</Link>
              </p>
              <p className="all-info">
                <b>Founded:</b>
                <Link to="/" className="details">
                  4 September 1998, Menlo Park, California, United States
                </Link>
              </p>

              <i className="disclaimer"><Link to="/" className="disclaimer-name">Disclaimer</Link> </i>
            </div>

            <div className="sites">
              <div>
                <h2 className="site-profiles">Profiles</h2>
              </div>

              <div className="sites-info">
                <div  className="site-info-div">
                  <FaSquareXTwitter  className="site-svg"/>
                  <Link to="/" className="site-names">Twitter</Link>
                </div>
                <div className="site-info-div">
                  <FaLinkedin color="#0077b0" className="site-svg"/>
                  <Link to="/" className="site-names">Linkedin</Link>
                </div>
                <div className="site-info-div">
                  <FaYoutube color="#f70000" className="site-svg"/>
                  <Link to="/" className="site-names">Youtube</Link>
                </div>
                <div className="site-info-div">
                  <FaFacebookSquare color="#0863f7" className="site-svg"/>
                  <Link to="/" className="site-names">Facebook</Link>
                </div>
              </div>
            </div>

            <div className="sites" id="site">
              <div className="view-more">
                <h2 className="site-searches">People also search for</h2>  <Link to="/" className="view-more-sites">View 10+ more</Link>
              </div>

              <div className="sites-info">
                <div className="site-info-div">
                  <FaFacebookSquare  className="down-site-svg" color="#0f90ec"/>
                  <Link to="/" className="site-names">Facebook</Link>
                </div>
                <div className="site-info-div">
                  <img src={insta} alt="" width={55}/>

                  <Link to="/" className="site-names">Instagram</Link>
                </div>
                <div className="site-info-div">
                  <FaSquareXTwitter className="down-site-svg" color="#1c9cea"/>
                  <Link to="/" className="site-names">Twitter</Link>
                </div>
                <div className="site-info-div">
                  <FaYahoo className="down-site-svg" color="#5d00cb"/>
                  <Link to="/" className="site-names">Yahoo</Link>
                </div>
              </div>
              
              <span className="feedback">Feedback</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
