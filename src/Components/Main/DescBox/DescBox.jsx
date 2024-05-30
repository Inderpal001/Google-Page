import React from 'react';
import "./DescBox.scss";

export default function DescBox({siteDescBoxText,siteDescBoxImage,siteDescBoxTime}) {
  return (
    <div className='descBox'>
       <div className='descInfo'>
       {
            siteDescBoxImage ? <img src={siteDescBoxImage} width="100%" alt="" /> : ""
        }
        <p>{siteDescBoxText}</p>
       </div>
        <div className='posted'>
        <p>Posted on X ∙ <span className="time">{siteDescBoxTime}</span></p>
        </div>
    </div>
  )
}
