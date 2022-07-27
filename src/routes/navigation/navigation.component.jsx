import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = ({ setOpen }) => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-top">
          <Link className="nav-sing" to="/login" onClick={() => setOpen(false)}>
            LOGIN
          </Link>
          <span>|</span>
          <Link
            className="nav-sing"
            to="/signup"
            onClick={() => setOpen(false)}
          >
            SING UP
          </Link>
          <div className="close-btn" onClick={() => setOpen(false)}>
            Close
          </div>
        </div>
        <div className="nav-links-container">
          <Link
            className="nav-link"
            to="shop/shirts"
            onClick={() => setOpen(false)}
          >
            SHRITS
          </Link>
          <Link
            className="nav-link"
            to="shop/jackets"
            onClick={() => setOpen(false)}
          >
            JACKETS
          </Link>
          <Link
            className="nav-link"
            to="shop/pants"
            onClick={() => setOpen(false)}
          >
            PANTS
          </Link>
          <Link
            className="nav-link"
            to="shop/sneakers"
            onClick={() => setOpen(false)}
          >
            SNEAKERS
          </Link>
          <Link
            className="nav-link"
            to="shop/caps"
            onClick={() => setOpen(false)}
          >
            CAPS
          </Link>
        </div>
        <div className="nav-footer">
          <Link className="nav-link" to="/">
            <div className="nav-footer-logo" onClick={() => setOpen(false)} />
          </Link>
          <p>
            ALL WORK AND
            <br />
            NO PLAY <br />
            MAKES YOU MAD
          </p>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
