import { useState, useEffect } from "react";

const useHandleWindowResize = () => {
  const isBrowser = typeof window !== "undefined";

  const [screenHeight, setScreenHeight] = useState(0);

  const handleSetScreenHeight = () => {
    let diff = window.innerHeight > 920 ? 180 : 60;
    if (window.innerWidth > 2200) {
      diff = diff + 60;
    }
    setScreenHeight(window.innerHeight - diff);
  };

  useEffect(() => {
    handleSetScreenHeight();
  }, [isBrowser]);

  useEffect(() => {
    window.addEventListener("resize", handleSetScreenHeight);
    return () => {
      window.removeEventListener("resize", handleSetScreenHeight);
    };
  }, []);

  return screenHeight;
};

export default useHandleWindowResize;
