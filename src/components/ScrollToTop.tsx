import { AiOutlineArrowUp } from "react-icons/ai/index";
import { useState, useEffect, Fragment, useRef } from "react";
// import { Transition, TransitionStatus } from "react-transition-group/";

import "../styles/transition.css";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  // const nodeRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      {showButton && (
        <button
          className={`fixed bottom-5 right-7 p-4 md:bottom-3 md:right-3 z-50 cursor-pointer  bg-green-500 dark:bg-green-600 rounded-full`}
          aria-label="back-to-top-button"
          onClick={handleScrollToTop}
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </Fragment>
  );
}
