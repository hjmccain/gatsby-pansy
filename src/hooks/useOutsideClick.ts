import { useEffect } from "react";

const useOutsideClick = (ref: any, handler: () => void) => {
  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", listener, true);
    document.addEventListener("touchstart", listener, true);

    return () => {
      document.removeEventListener("mousedown", listener, true);
      document.removeEventListener("touchstart", listener, true);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
