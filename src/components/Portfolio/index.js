import { forwardRef } from "react";
import {
  Container,
  Content,
  Body,
  Header,
  Projects,
  Project,
  ProjectList,
  ProjectScreenshot,
  ProjectScreenshotWrapper,
} from "./styles/portfolio";

const PortfolioLayout = ({ children, height, contentHeight }) => {
  return (
    <Container height={height} contentHeight={contentHeight}>
      {children}
    </Container>
  );
};

PortfolioLayout.Content = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Content ref={ref} {...restProps}>
      {children}
    </Content>
  );
});

PortfolioLayout.Body = ({ children, ...restProps }) => {
  return <Body {...restProps}>{children}</Body>;
};

PortfolioLayout.Header = ({ children }) => {
  return <Header>{children}</Header>;
};

PortfolioLayout.Projects = ({
  children,
  hoveredProject,
  lastHoveredProject,
}) => {
  return (
    <Projects>
      <ProjectList>{children}</ProjectList>
      <ProjectScreenshotWrapper>
        {hoveredProject && (
          <ProjectScreenshot background={hoveredProject.screenshot} />
        )}
        {lastHoveredProject && (
          <ProjectScreenshot
            background={lastHoveredProject.screenshot}
            absolute={true}
          />
        )}
      </ProjectScreenshotWrapper>
    </Projects>
  );
};

PortfolioLayout.Project = forwardRef(({ children, idx, ...restProps }, ref) => {
  return (
    <Project data-tag={idx} ref={ref} {...restProps}>
      {children}
    </Project>
  );
});

export default PortfolioLayout;
