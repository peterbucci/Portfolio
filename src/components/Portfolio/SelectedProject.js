import { forwardRef } from "react";
import ExternalLinkIcon from "../../assets/icons/ExternalLinkIcon";
import GitHubIcon from "../../assets/icons/GitHubIcon";
import {
  Banner,
  BannerImg,
  CloseButton,
  ExternalLink,
  ExternalLinks,
  Header,
  Menu,
  MenuItem,
  ProjectName,
  Section,
  SelectedProject,
  TechStack,
} from "./styles/selected_project";

const SelectedProjectLayout = forwardRef(
  (
    { children, project, selectedSection, setSelectedSection, ...restProps },
    ref
  ) => {
    return (
      <SelectedProject {...restProps} ref={ref}>
        {children}
        <Menu>
          <MenuItem
            selected={selectedSection === "description"}
            onClick={() => setSelectedSection("description")}
          >
            Description
          </MenuItem>
          <MenuItem
            selected={selectedSection === "motivation"}
            onClick={() => setSelectedSection("motivation")}
          >
            Motivation
          </MenuItem>
          <MenuItem
            selected={selectedSection === "whatILearned"}
            onClick={() => setSelectedSection("whatILearned")}
          >
            What I Learned
          </MenuItem>
          <MenuItem
            selected={selectedSection === "gallery"}
            onClick={() => setSelectedSection("gallery")}
          >
            Gallery
          </MenuItem>
        </Menu>
        <Section>
          {selectedSection === "gallery"
            ? project.gallery.map((file, i) => (
                <img src={file} alt="screen shot" />
              ))
            : project[selectedSection]}
          {selectedSection === "description" && (
            <ExternalLinks>
              <ExternalLink
                to={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </ExternalLink>
              <ExternalLink
                to={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon />
              </ExternalLink>
            </ExternalLinks>
          )}
        </Section>
      </SelectedProject>
    );
  }
);

SelectedProjectLayout.Banner = ({ src, project, closeProject }) => {
  return (
    <Banner>
      <BannerImg src={src} />
      <CloseButton onClick={closeProject}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </CloseButton>
      <Header>
        <ProjectName>{project.name}</ProjectName>
        <TechStack>Tech Stack: {project.techStack.join(", ")}</TechStack>
      </Header>
    </Banner>
  );
};

export default SelectedProjectLayout;
