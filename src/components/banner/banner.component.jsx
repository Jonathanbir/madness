import { Link } from "react-router-dom";
import "./banner.styles.scss";

const Banner = ({ title, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="banner-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="shop-button-container">
        <h1>{title}</h1>
        <Link className="nav-link" to="shop/shirts">
          <div className="shop-button">SHOP NOW</div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
