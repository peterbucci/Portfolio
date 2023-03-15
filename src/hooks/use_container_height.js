import { useCallback, useEffect, useState } from "react";

export default function useContainerHeight(ref) {
  const [height, setHeight] = useState(0);

  const onResize = useCallback(
    () => setHeight(ref.current.clientHeight),
    [ref]
  );
  useEffect(() => {
    if (ref.current) {
      onResize();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, [ref, onResize]);

  return height;
}
