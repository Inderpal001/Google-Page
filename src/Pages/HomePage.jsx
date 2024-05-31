import React,{useRef} from "react";
import { IoIosSearch } from "react-icons/io";
import HomeNavbar from "../Components/HomeNavbar/HomeNavbar";
import HomeShortcut from "../Components/HomeShortcut/HomeShortcut";
import HomeFooter from "../Components/HomeFooter/HomeFooter";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

export default function App() {

   const inputRef = useRef();
   const navigate = useNavigate()

   const handleNavigate = (e) => {
      e.preventDefault;
      if(inputRef.current.value.trim() === "") return;
      navigate("/search")
   }

  return (
    <div className="home-page">
        <HomeNavbar/>

        <div className="content-div">
            <img src="https://t3.ftcdn.net/jpg/03/99/98/60/240_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg" alt="" className="home-logo"/>

            <form onSubmit={handleNavigate} className="home-search-input">
               <IoIosSearch fontSize={19}/>
               <input type="text" className="home-input" ref={inputRef} placeholder="Search Google or type a URL" />
               <img src="https://t3.ftcdn.net/jpg/05/74/88/56/240_F_574885641_mmYDC6Ffw1dxvXg9zEldgPqdZjWn2Sky.jpg" alt="" className="home-input-img"/>
               <img src="https://t3.ftcdn.net/jpg/05/74/88/56/240_F_574885689_LSqUK9G7fJaHidKs0uVyEvgYg0Oxvzg5.jpg" alt="" className="home-input-img"/>
            </form>

           <div className="grid">
              <HomeShortcut img="https://img.icons8.com/?size=48&id=P7UIlhbpWzZm&format=png" text="Inbox (3)"/>
              <HomeShortcut img="https://img.icons8.com/?size=48&id=114441&format=png" text="Messages (5)"/>
              <HomeShortcut img="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png" text="Insta"/>
              <HomeShortcut img="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/chrome.png" text="New Page"/>
              <HomeShortcut img="https://cdn-icons-png.flaticon.com/128/9312/9312231.png" text="Add Shortcut"/>
              <HomeShortcut img="https://cdn-icons-png.flaticon.com/128/9312/9312231.png" text="Add Shortcut"/>
           </div>
        </div>

        <HomeFooter/>
    </div>
  )
}
