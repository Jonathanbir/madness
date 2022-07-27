import { useState } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import Navigation from "../navigation/navigation.component";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "./authentication.styles.scss";

const Authentication = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const animateFrom = { x: -100 };
  const animateTo = { x: 0 };

  return (
    <>
      {open && (
        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.5 }}
        >
          <Navigation setOpen={setOpen} />
        </motion.div>
      )}
      <div className="authentication-container">
        <div className="authentication-form">
          <Link className="nav-link" to="/">
            <div className="auth-logo" />
          </Link>
          {location.pathname === "/login" ? <SignInForm /> : <SignUpForm />}
        </div>
        <div className="authentication-banner" />
      </div>
    </>
  );
};

export default Authentication;
