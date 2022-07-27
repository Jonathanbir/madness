import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <h2>Collaborations</h2>
        <div className="side-bar-links-container">
          <Link className="side-bar-link" to="/shop/shirts">
            SHRITS
          </Link>
          <Link className="side-bar-link" to="/shop/jackets">
            JACKETS
          </Link>
          <Link className="side-bar-link" to="/shop/pants">
            PANTS
          </Link>
          <Link className="side-bar-link" to="/shop/sneakers">
            SNEAKERS
          </Link>
          <Link className="side-bar-link" to="/shop/caps">
            CAPS
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Sidebar;
