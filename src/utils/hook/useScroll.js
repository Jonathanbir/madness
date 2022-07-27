import { useState } from "react";

import { useDom } from "../hook/index";

export const useScroll = () => {
  const [scrollY, setState] = useState(window.scrollY);

  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setState(window.scrollY);
        ticking = false;
      });
    }
    ticking = true;
  };

  useDom({ scroll: handleScroll });

  return scrollY;
};
