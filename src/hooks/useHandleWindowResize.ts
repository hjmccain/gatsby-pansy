import { useState, useEffect } from "react";

const useHandleWindowResize = () => {
  const [screenHeight, setScreenHeight] = useState(
    window.innerHeight - (window.innerHeight > 920 ? 180 : 60)
  );

  const handleSetScreenHeight = () => {
    const diff = window.innerHeight > 920 ? 180 : 60;
    setScreenHeight(window.innerHeight - diff);
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
