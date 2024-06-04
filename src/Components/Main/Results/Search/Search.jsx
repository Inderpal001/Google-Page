import { IoMdSearch } from "react-icons/io";
import "./Search.scss";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Search({searchItem}) {
  return (
    <div className="search"> <IoMdSearch className="search-icon"/> <Link className="search-link" to="/">{searchItem}</Link></div>
  )
}

Search.propTypes = {
  searchItem: PropTypes.string.isRequired,
};