import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../hooks/use_window_dimensions";
import skills from "../assets/about/skills";
import useContainerHeight from "../hooks/use_container_height";
import PortfolioLayout from "../components/Skills";
import useOnKeyPress from "../hooks/use_on_key_press";

const projects = [
  {
    name: "A Discord Clone",
    techStack: ["React", "Node.js"],
    screenshot: "discordcloneSS.png",
    github: "https://github.com/peterbucci",
    demo: "https://github.com/peterbucci",
  },
  {
    name: "A Facebook Clone",
    techStack: ["React", "Node.js", "Firebase"],
    screenshot: "fbcloneSS.png",
    github: "https://github.com/peterbucci",
    demo: "https://github.com/peterbucci",
  },
  {
    name: "Project Three",
    techStack: ["React", "React Native"],
    screenshot: null,
    github: "https://github.com/peterbucci",
    demo: "https://github.com/peterbucci",
  },
  {
    name: "Project Four",
    techStack: ["React", "React Native"],
    screenshot: null,
    github: "https://github.com/peterbucci",
    demo: "https://github.com/peterbucci",
  },
];

export default function Portfolio() {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);
  const bulletRefs = useRef([]);
  const { height } = useWindowDimensions();
  const contentHeight = useContainerHeight(containerRef);
  const keysPressed = useOnKeyPress();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [multiToSingle, setMultiToSingle] = useState(false);
  const [lastHoveredProject, setLastHoveredProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

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

  const onSkillClick = (selectedSkills, skill) => {
    const index = selectedSkills.indexOf(skill);
    const shiftPressed = keysPressed.includes("Shift");
    const newSelectedSkills =
      index !== -1
        ? selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
        : shiftPressed || selectedSkills.length > 1
        ? [...selectedSkills, skill]
        : [skill];

    setSelectedSkills(newSelectedSkills);
    if (newSelectedSkills.length === 1 && selectedSkills.length === 2)
      setMultiToSingle(true);
  };

  useEffect(() => {
    setMultiToSingle(false);
  }, [multiToSingle]);

  useEffect(() => {
    setFilteredProjects(
      projects.filter(({ techStack }) =>
        selectedSkills.every((skill) => techStack.includes(skills[skill].name))
      )
    );
  }, [selectedSkills]);
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
          onSkillClick={onSkillClick}
          selectedSkills={selectedSkills}
          multiToSingle={multiToSingle}
          refs={bulletRefs}
        />
      </PortfolioLayout.Sidebar>
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
            >
              {project.name}
            </PortfolioLayout.Project>
          ))}
        </PortfolioLayout.Projects>
      </PortfolioLayout.Body>
    </PortfolioLayout>
  );
}
