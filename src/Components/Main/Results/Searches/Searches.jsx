import React from 'react';
import { IoMdSearch } from "react-icons/io";
import "./Searches.scss";

export default function Searches({searchItem}) {
  return (
    <div className='searches'> <IoMdSearch /> <p>{searchItem}</p></div>
  )
}
