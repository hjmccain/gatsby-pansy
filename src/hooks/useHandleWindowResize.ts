import { useState, useEffect } from "react";

const useHandleWindowResize = () => {
  const isBrowser = typeof window !== "undefined";

  const height =
    isBrowser && window.innerHeight - (window.innerHeight > 920 ? 180 : 60);

  const [screenHeight, setScreenHeight] = useState(height || 0);

  const handleSetScreenHeight = () => {
    const diff = window.innerHeight > 920 ? 180 : 60;
    setScreenHeight(window.innerHeight - diff);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetScreenHeight);
    return () => {
      window.removeEventListener("resize", handleSetScreenHeight);
    };
  }, [isBrowser]);

  return screenHeight;
};

export default useHandleWindowResize;
