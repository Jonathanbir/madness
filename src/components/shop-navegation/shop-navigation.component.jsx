import React from "react";
import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useScroll } from "../../utils/hook/useScroll";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import Navigation from "../../routes/navigation/navigation.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { motion } from "framer-motion";
import "./shop-navigation.styles.scss";

const ShopNavigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [open, setOpen] = useState(false);
  const animateFrom = { x: -100 };
  const animateTo = { x: 0 };
  const scrollY = useScroll();

  return (
    <Fragment>
      {open && (
        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.3 }}
        >
          <Navigation setOpen={setOpen} />
        </motion.div>
      )}
      <div
        className="shop-navigation"
        style={
          scrollY > 10
            ? {
                position: "fixed",
                top: "0",
                background: "#fff",
                zIndex: "99",
                height: "60px",
              }
            : {}
        }
      >
        <div className="nav-links-container">
          {scrollY > 10 && (
            <div
              className="logo"
              style={{ top: "10px" }}
              onClick={() => setOpen(!open)}
            />
          )}
          <Link className="nav-link-shop-logo" to="/">
            <div className={scrollY > 10 ? "shop-small-logo" : "shop-logo"} />
          </Link>
          <div className="shop-nav-box">
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
            <CartIcon />
          </div>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default ShopNavigation;
