import PropTypes from 'prop-types';

export default function NavList({text}) {
  return (
    <a href="/" className="navList">{text}</a>
  )
}

NavList.propTypes = {
  text: PropTypes.string.isRequired,
};