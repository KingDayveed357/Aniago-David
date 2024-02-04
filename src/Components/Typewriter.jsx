import { useState, useEffect } from "react";

const Typewriter = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        if (index === text.length) {
          clearInterval(intervalId);
          return prevText;
        }

        return prevText + text[index++];
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
