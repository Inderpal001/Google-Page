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
              <h2>Google</h2>
              <p>IT Corporation <BsThreeDotsVertical /></p> 
            </div>
            <div>
              <img src={g} alt="" width={50} />
            </div>
          </div>

          <div className="info-site">
          <IoEarthSharp fontSize={21} />
            <p className="google">google.com</p>
          </div>

          <div className="info-desc">
            <div className="info-desc-sm">
              <p>
                Google LLC is an American multinational corporation and
                technology company focusing on online advertising, search engine
                technology, cloud computing, computer software, quantum
                computing, e-commerce, consumer electronics, and artificial
                intelligence.
              </p>
              <p>
                <b>Founders:</b> <span>Larry Page, Sergey Brin</span>
              </p>
              <p>
                <b>Parent organization:</b>{" "}
                <span>Larry Page, Sergey Alphabet Inc.</span>
              </p>
              <p>
                <b>Subsidiaries:</b>{" "}
                <span>YouTube, Mandiant, Google AI, Firebase, MORE</span>
              </p>
              <p>
                <b>Area served:</b> <span>International</span>
              </p>
              <p>
                <b>CEO:</b> <span>Sundar Pichai (2 Oct 2015–)</span>
              </p>
              <p>
                <b>CMO:</b> <span>Lorraine Twohill</span>
              </p>
              <p>
                <b>Founded:</b>{" "}
                <span>
                  4 September 1998, Menlo Park, California, United States
                </span>
              </p>

              <i>Disclaimer</i>
            </div>

            <div className="sites">
              <div>
                <h2 className="site-Profile">Profiles</h2>
              </div>

              <div className="sites-info">
                <div>
                  <FaSquareXTwitter />
                  <p>Twitter</p>
                </div>
                <div>
                  <FaLinkedin color="#0077b0"/>
                  <p>Linkedin</p>
                </div>
                <div>
                  <FaYoutube color="#f70000"/>
                  <p>Youtube</p>
                </div>
                <div>
                  <FaFacebookSquare color="#0863f7"/>
                  <p>Facebook</p>
                </div>
              </div>
            </div>

            <div className="sites" id="site">
              <div className="viewMore">
                <h2 className="site-Profile">People also search for</h2>  <p>View 10+ more</p>
              </div>

              <div className="sites-info">
                <div>
                  <FaFacebookSquare  className="downSite" color="#0f90ec"/>
                  <p>Facebook</p>
                </div>
                <div>
                  <img src={insta} alt="" width={55}/>

                  <p>Instagram</p>
                </div>
                <div>
                  <FaSquareXTwitter className="downSite" color="#1c9cea"/>
                  <p>Twitter</p>
                </div>
                <div>
                  <FaYahoo className="downSite" color="#5d00cb"/>
                  <p>Yahoo</p>
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
