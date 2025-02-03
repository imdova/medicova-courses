import { useState, useEffect } from "react";

const useScrollDetection = () => {
  const [scrollTrigger, SetscrollTrigger] = useState(150);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollTrigger) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
};

export default useScrollDetection;
