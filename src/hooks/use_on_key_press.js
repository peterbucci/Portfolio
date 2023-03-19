import { useCallback, useEffect, useState } from "react";

export default function useOnKeyPress() {
  const [keysPressed, setKeysPressed] = useState([]);

  const onKeyDown = useCallback(
    (e) => {
      const key = e.key;
      const index = keysPressed.indexOf(key);
      if (index === -1) setKeysPressed([...keysPressed, key]);
    },
    [keysPressed]
  );

  const onKeyUp = useCallback(
    (e) => {
      const key = e.key;
      setKeysPressed(keysPressed.filter((keyPressed) => keyPressed !== key));
    },
    [keysPressed]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [onKeyDown, onKeyUp]);

  return keysPressed;
}
