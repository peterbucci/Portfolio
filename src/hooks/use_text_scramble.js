import { useRef, useEffect, useCallback } from "react";
import TextScramble from "../classes/TextScramble";
import randomIntFromInterval from "../helpers/random_int_from_interval";

export default function useTextScramble(phraseGroups, refArr) {
  const initialRenderRef = useRef(true);
  const scrambleRef = useRef(null);

  const next = useCallback((fx, phrases, counter, interval) => {
    fx.setText(phrases[counter]).then(() => {
      counter = (counter + 1) % phrases.length;
      setTimeout(
        () => next(fx, phrases, counter, randomIntFromInterval(5000, 15000)),
        interval
      );
    });
  }, []);

  useEffect(() => {
    const scramble = scrambleRef.current;
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      scrambleRef.current = phraseGroups.map((phrases, i) => ({
        fx: new TextScramble(refArr[i]),
        phrases,
      }));
    }
    console.log(scrambleRef, refArr);
    if (scramble)
      scramble.forEach(({ fx, phrases }) => {
        let counter = 0;
        next(fx, phrases, counter, randomIntFromInterval(5000, 15000));
      });
  }, [phraseGroups, next, refArr]);

  return null;
}
