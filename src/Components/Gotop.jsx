import  { useState, useEffect } from "react";
import {IoIosArrowUp } from "react-icons/io";

function Gotop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {showButton && (
        <button
          onClick={topFunction}
          id="myBtn"
          title="Go to top"
          className="fixed bottom-4 right-4 rounded-full bg-[#6366F1] transform hover:scale-110 transition-transform duration-300 shadow-lg hover:bg-blue-600 text-white p-2 text-2xl"
        >
          {/* <i className="bi bi-arrow-up"></i> */}
          <IoIosArrowUp/>
        </button>
      )}
    </>
  );
}

export default Gotop;
