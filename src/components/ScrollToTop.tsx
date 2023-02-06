import { AiOutlineArrowUp } from "react-icons/ai/index";
import { useState, useEffect, Fragment } from "react";
// import { Transition } from "react-transition-group/";
export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
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
    console.log("Hello");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      {showButton && (
        <button
          className={`fixed bottom-5 right-7 z-50 cursor-pointer p-4 bg-green-500 dark:bg-green-600 rounded-full`}
          onClick={handleScrollToTop}
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </Fragment>
  );
}
