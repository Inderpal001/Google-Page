import React from "react";
import "./HomeShortcut.scss"

export default function HomeShortcut({img,text}) {
  return (
    <div className="shortcut">
        <div className="circle">
            <img src={img} alt="" className="shortcut-img"/>
        </div>
        <p className="short-name">{text}</p>
    </div>
  )
}
