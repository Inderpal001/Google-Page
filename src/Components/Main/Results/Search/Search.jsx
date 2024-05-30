import React from 'react';
import { IoMdSearch } from "react-icons/io";
import "./Search.scss";

export default function Search({searchItem}) {
  return (
    <div className='searches'> <IoMdSearch /> <p>{searchItem}</p></div>
  )
}
