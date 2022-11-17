import { useState, useEffect } from "react";

export function useSize() {
  const [windowSize, setWindowSize] = useState({
    width: globalThis.innerWidth || 0,
    height: globalThis.innerHeight || 0
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: globalThis.innerWidth,
        height: globalThis.innerHeight
      });
    }
    globalThis.addEventListener("resize", handleResize);
    handleResize();

    return () => globalThis.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
