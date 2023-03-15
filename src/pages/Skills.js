import { useRef, useState } from "react";
import useWindowDimensions from "../hooks/use_window_dimensions";
import skills from "../assets/about/skills";
import useContainerHeight from "../hooks/use_container_height";
import PortfolioLayout from "../components/Skills";

export default function Portfolio() {
  const { height } = useWindowDimensions();
  const containerRef = useRef(null);
  const contentHeight = useContainerHeight(containerRef);
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <PortfolioLayout
      height={height}
      contentHeight={contentHeight}
      ref={containerRef}
    >
      <PortfolioLayout.Sidebar>
        <PortfolioLayout.SubHeader>Skills</PortfolioLayout.SubHeader>
        <PortfolioLayout.Skills
          skills={skills}
          setSelectedSkill={setSelectedSkill}
          selectedSkill={selectedSkill}
        />
      </PortfolioLayout.Sidebar>
      <PortfolioLayout.Body>
        <PortfolioLayout.Header>02. Portfolio</PortfolioLayout.Header>
        <PortfolioLayout.Projects />
      </PortfolioLayout.Body>
    </PortfolioLayout>
  );
}
