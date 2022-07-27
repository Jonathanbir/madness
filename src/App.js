import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { motion } from "framer-motion";
import "./App.styles.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

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
          transition={{ duration: 0.3 }}
        >
          <Navigation setOpen={setOpen} />
        </motion.div>
      )}
      {location.pathname === "/" ? (
        <div className="home-logo" onClick={() => setOpen(!open)} />
      ) : (
        <div className="logo" onClick={() => setOpen(!open)} />
      )}
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="login" element={<Authentication />} />
        <Route path="signup" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
