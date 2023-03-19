import { useCallback, useEffect, useRef, useState } from "react";
import SelectedProjectLayout from "../../components/Portfolio/SelectedProject";

export default function SelectedProject({
  selectedProject,
  setSelectedProject,
}) {
  const containerRef = useRef(null);
  const [lastSelectedProject, setLastSelectedProject] = useState(null);
  const [selectedSection, setSelectedSection] = useState("description");
  const project = selectedProject ?? lastSelectedProject;

  const closeProject = useCallback(() => {
    setLastSelectedProject(selectedProject);
    setSelectedProject(null);
  }, [setSelectedProject, setLastSelectedProject, selectedProject]);

  const onClick = useCallback(
    (e) => {
      if (!containerRef.current.contains(e.target)) closeProject();
    },
    [closeProject]
  );

  useEffect(() => {
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [onClick]);

  return (
    <SelectedProjectLayout
      ref={containerRef}
      selectedSection={selectedSection}
      setSelectedSection={setSelectedSection}
      selectedProject={selectedProject}
      project={project}
    >
      <SelectedProjectLayout.Banner
        src={project.screenshot}
        project={project}
        closeProject={closeProject}
      />
    </SelectedProjectLayout>
  );
}
