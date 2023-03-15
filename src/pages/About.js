import { useRef } from "react";
import AboutLayout from "../components/About";
import useWindowDimensions from "../hooks/use_window_dimensions";
import bio from "../assets/about/bio";
import useContainerHeight from "../hooks/use_container_height";

export default function About() {
  const containerRef = useRef(null);
  const { height } = useWindowDimensions();
  const contentHeight = useContainerHeight(containerRef);

  return (
    <AboutLayout
      height={height}
      contentHeight={contentHeight}
      ref={containerRef}
    >
      <AboutLayout.Header>01. About Me</AboutLayout.Header>
      <AboutLayout.Bio bio={bio} />
    </AboutLayout>
  );
}
