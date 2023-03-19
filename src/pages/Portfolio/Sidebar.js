import { useEffect, useRef, useState } from "react";
import SidebarLayout from "../../components/Portfolio/Sidebar";
import useOnKeyPress from "../../hooks/use_on_key_press";
import skills from "../../assets/portfolio/skills";
import projects from "../../assets/portfolio/projects";

export default function Sidebar({ setFilteredProjects }) {
  const bulletRefs = useRef([]);
  const keysPressed = useOnKeyPress();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [multiToSingle, setMultiToSingle] = useState(false);

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
  }, [selectedSkills, setFilteredProjects]);

  return (
    <SidebarLayout>
      <SidebarLayout.Header>Skills</SidebarLayout.Header>
      <SidebarLayout.Skills
        skills={skills}
        onSkillClick={onSkillClick}
        selectedSkills={selectedSkills}
        multiToSingle={multiToSingle}
        refs={bulletRefs}
      />
    </SidebarLayout>
  );
}
