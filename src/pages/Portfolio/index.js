import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import PortfolioLayout from "../../components/Portfolio";
import useWindowDimensions from "../../hooks/use_window_dimensions";
import useContainerHeight from "../../hooks/use_container_height";
import projects from "../../assets/portfolio/projects";
import useDelayUnmount from "../../hooks/use_delay_unmount";
import SelectedProject from "./SelectedProject";

export default function Portfolio() {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);
  const { height } = useWindowDimensions();
  const contentHeight = useContainerHeight(containerRef);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [lastHoveredProject, setLastHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldRender = useDelayUnmount(selectedProject, 400);

  useEffect(() => {
    setTimeout(() => setLastHoveredProject(null), 400);
  }, [lastHoveredProject]);

  const onMouseOver = (e) =>
    setHoveredProject(e.target.getAttribute("data-tag"));
  const onMouseOut = (e) => {
    setLastHoveredProject(e.target.getAttribute("data-tag"));
    setHoveredProject(null);
  };

  useEffect(() => {
    const projectEls = projectRefs.current;
    projectEls.forEach((project) => {
      if (project) {
        project.addEventListener("mouseover", onMouseOver);
        project.addEventListener("mouseout", onMouseOut);
      }
    });

    return () =>
      projectEls.forEach((project) => {
        if (project) {
          project.removeEventListener("mouseover", onMouseOver);
          project.removeEventListener("mouseout", onMouseOut);
        }
      });
  }, [filteredProjects]);

  return (
    <PortfolioLayout height={height} contentHeight={contentHeight}>
      <PortfolioLayout.Content selectedProject={shouldRender}>
        <Sidebar setFilteredProjects={setFilteredProjects} />
        <PortfolioLayout.Body>
          <PortfolioLayout.Header>02. Portfolio</PortfolioLayout.Header>
          <PortfolioLayout.Projects
            projects={filteredProjects}
            hoveredProject={filteredProjects[hoveredProject]}
            lastHoveredProject={filteredProjects[lastHoveredProject]}
          >
            {filteredProjects.map((project, i) => (
              <PortfolioLayout.Project
                key={i}
                idx={i}
                ref={(el) => (projectRefs.current[i] = el)}
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </PortfolioLayout.Project>
            ))}
          </PortfolioLayout.Projects>
        </PortfolioLayout.Body>
      </PortfolioLayout.Content>
      {shouldRender && (
        <SelectedProject
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </PortfolioLayout>
  );
}
