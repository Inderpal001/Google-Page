import "./HomeShortcut.scss"
import PropTypes from 'prop-types';

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

HomeShortcut.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};