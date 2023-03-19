import { useRef } from "react";
import HomeLayout from "../components/Home";
import useWindowDimensions from "../hooks/use_window_dimensions";
import useContainerHeight from "../hooks/use_container_height";
import useTextScramble from "../hooks/use_text_scramble";

const phraseGroups = [["Hello World,"], ["I'm Peter"], ["A Web Developer"]];

export default function Home() {
  const textRef = useRef([]);
  const containerRef = useRef(null);
  const { height } = useWindowDimensions();
  const contentHeight = useContainerHeight(containerRef);
  useTextScramble(phraseGroups, textRef.current);

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
