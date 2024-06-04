import { IoMdSearch } from "react-icons/io";
import "./Search.scss";
import PropTypes from 'prop-types';

export default function Search({searchItem}) {
  return (
    <div className="search"> <IoMdSearch className="search-icon"/> <a className="search-link" href="/">{searchItem}</a></div>
  )
}

Search.propTypes = {
  searchItem: PropTypes.string.isRequired,
};