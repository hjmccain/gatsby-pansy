import { useState, useEffect } from "react";

const useHandleWindowResize = () => {
  const [screenHeight, setScreenHeight] = useState(window.screen.height - 180);

  const handleSetScreenHeight = () => {
    setScreenHeight(window.screen.height - 180);
    console.log("height", window.screen.availHeight - 180);
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
