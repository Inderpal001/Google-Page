import "./DescBox.scss";
import PropTypes from 'prop-types';

export default function DescBox({siteDescBoxText,siteDescBoxImage,siteDescBoxTime}) {
  return (
    <div className="desc-box">
       <div className="desc-info">
       {
            siteDescBoxImage ? <img src={siteDescBoxImage} width="100%" alt="" /> : ""
        }
        <p className="desc-info-para">{siteDescBoxText}</p>
       </div>
        <div className="posted">
        <p className="posted-site">Posted on X ∙ <span className="time">{siteDescBoxTime}</span></p>
        </div>
    </div>
  )
}

DescBox.propTypes = {
  siteDescBoxText: PropTypes.string.isRequired,
  siteDescBoxImage: PropTypes.string.isRequired,
  siteDescBoxTime: PropTypes.string.isRequired,
};