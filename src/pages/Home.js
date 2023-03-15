import { useCallback, useEffect, useMemo, useRef } from "react";
import TextScramble from "../classes/TextScramble";
import HomeLayout from "../components/Home";
import useWindowDimensions from "../hooks/use_window_dimensions";
import randomIntFromInterval from "../helpers/random_int_from_interval";
import useContainerHeight from "../hooks/use_container_height";

export default function Home() {
  const { height } = useWindowDimensions();
  const initialRenderRef = useRef(true);
  const textRef = useRef([]);
  const containerRef = useRef(null);
  const contentHeight = useContainerHeight(containerRef);

  const phraseGroups = useMemo(
    () => [["Hello World,"], ["I'm Peter"], ["A Web Developer"]],
    []
  );

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
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      phraseGroups.forEach((phrases, i) => {
        const fx = new TextScramble(textRef.current[i]);
        let counter = 0;
        next(fx, phrases, counter, randomIntFromInterval(5000, 15000));
      });
    }
  }, [phraseGroups, next]);

  return (
    <HomeLayout
      height={height}
      contentHeight={contentHeight}
      phraseGroups={phraseGroups}
    >
      <HomeLayout.Intro ref={containerRef} height={height}>
        <HomeLayout.HeaderText phraseGroups={phraseGroups} ref={textRef} />
      </HomeLayout.Intro>
    </HomeLayout>
  );
}
