import { useEffect } from "react";

const useOutsideHover = (ref: any, handler: (show: boolean) => void) => {
  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        handler(false);
      }

      handler(true);
    };

    document.addEventListener("mouseover", listener, true);

    return () => {
      document.removeEventListener("mouseover", listener, true);
    };
  }, [ref, handler]);
};

export default useOutsideHover;
