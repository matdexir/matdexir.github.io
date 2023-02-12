import { AiOutlineArrowUp } from "react-icons/ai/index";
import { useState, useEffect, Fragment, useRef } from "react";
import { Transition, TransitionStatus } from "react-transition-group/";

import "../styles/transition.css";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const nodeRef = useRef(null);
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
    // console.log("Hello");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const duration = 900;

  const defaultStyle = {
    transition: `transform ${duration}ms, opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: any = {
    entering: { opacity: 0.5, transform: "rotate(90deg)" },
    entered: { opacity: 1 },
    exiting: { opacity: 0.5, transform: "rotate(90deg)" },
    exited: { opacity: 0 },
  };

  return (
    <Fragment>
      {
        <Transition
          in={showButton}
          timeout={1000}
          appear={showButton}
          nodeRef={nodeRef}
          // onExiting={() => {
          //   console.log("exiting");
          // }}
          // onExited={() => {
          //   console.log("exit complete");
          // }}
          unmountOnExit
        >
          {(state: TransitionStatus) => (
            <button
              className={`fixed bottom-5 right-7 z-50 cursor-pointer p-4 bg-green-500 dark:bg-green-600 rounded-full`}
              onClick={handleScrollToTop}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <AiOutlineArrowUp />
            </button>
          )}
        </Transition>
      }
    </Fragment>
  );
}
