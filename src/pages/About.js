import { useRef } from "react";
import AboutLayout from "../components/About";
import useWindowDimensions from "../hooks/use_window_dimensions";
import bio from "../assets/about/bio";
import useContainerHeight from "../hooks/use_container_height";
import useTextScramble from "../hooks/use_text_scramble";

const phraseGroups = [["01. About Me"]];

export default function About() {
  const textRef = useRef([]);
  const containerRef = useRef(null);
  const { height } = useWindowDimensions();
  const contentHeight = useContainerHeight(containerRef);
  useTextScramble(phraseGroups, textRef.current);

  return (
    <AboutLayout
      height={height}
      contentHeight={contentHeight}
      ref={containerRef}
    >
      <AboutLayout.Header ref={textRef}>01. About Me</AboutLayout.Header>
      <AboutLayout.Bio bio={bio} />
    </AboutLayout>
  );
}
