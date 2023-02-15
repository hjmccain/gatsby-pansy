import { useState, useEffect } from "react";

const useHandleWindowResize = () => {
  const diff = 180;
  const [screenHeight, setScreenHeight] = useState(window.innerHeight - diff);

  const handleSetScreenHeight = () => {
    setScreenHeight(window.innerHeight - diff);
    console.log("height", window.screen.availHeight - diff);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetScreenHeight);
    return () => {
      window.removeEventListener("resize", handleSetScreenHeight);
    };
  }, []);

  return screenHeight;
};

export default useHandleWindowResize;
