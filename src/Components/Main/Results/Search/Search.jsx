import React from 'react';
import { IoMdSearch } from "react-icons/io";
import "./Search.scss";

export default function Search({searchItem}) {
  return (
    <div className='search'> <IoMdSearch className='search-icon'/> <a className='search-link' href='/'>{searchItem}</a></div>
  )
}
