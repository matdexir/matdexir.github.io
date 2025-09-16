import { AiOutlineArrowUp } from "react-icons/ai/index";
import { useState, useEffect, Fragment, useRef } from "react";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
// import { Transition, TransitionStatus } from "react-transition-group/";

// import "../styles/transition.css";

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
      <XyzTransition
        appear
        xyz="fade down-5 rotate-right-50%"
        duration={"auto"}
      >
        {showButton && (
          <button
            className={`fixed bottom-6 right-7 p-4 md:bottom-3 md:right-3 z-50 cursor-pointer bg-emerald-500 dark:bg-emerald-600 rounded-full`}
            aria-label="back-to-top-button"
            onClick={handleScrollToTop}
          >
            <AiOutlineArrowUp />
          </button>
        )}
      </XyzTransition>
    </Fragment>
  );
}
