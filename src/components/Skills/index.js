import { forwardRef } from "react";
import BulletIcon from "../../assets/icons/BulletIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import {
  BackButton,
  Bullet,
  ChevronRight,
  Container,
  Skill,
  SkillList,
  SkillText,
  Sidebar,
  Content,
  SubHeader,
  Body,
  Header,
  Projects,
} from "./styles/skills";

const PortfolioLayout = forwardRef(
  ({ children, height, contentHeight }, ref) => {
    return (
      <Container height={height} contentHeight={contentHeight}>
        <Content ref={ref}>{children}</Content>
      </Container>
    );
  }
);

PortfolioLayout.Body = ({ children }) => {
  return <Body>{children}</Body>;
};

PortfolioLayout.Header = ({ children }) => {
  return <Header>{children}</Header>;
};

PortfolioLayout.Projects = ({ children }) => {
  return <Projects>{children}</Projects>;
};

PortfolioLayout.BackButton = ({ onClick }) => {
  return (
    <BackButton onClick={onClick}>
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
    </BackButton>
  );
};

PortfolioLayout.Sidebar = ({ children, ...restProps }) => {
  return <Sidebar {...restProps}>{children}</Sidebar>;
};

PortfolioLayout.SubHeader = ({ children }) => {
  return (
    <SubHeader>
      <ChevronRight>
        <ChevronRightIcon />
      </ChevronRight>
      {children}
    </SubHeader>
  );
};

PortfolioLayout.Skills = ({ skills, setSelectedSkill, selectedSkill }) => {
  return (
    <SkillList>
      {selectedSkill !== null && (
        <Bullet selected={selectedSkill} absolute={true}>
          <BulletIcon />
        </Bullet>
      )}
      {skills.map((skill, i) => (
        <Skill key={i} onClick={() => setSelectedSkill(i)}>
          <Bullet>
            <BulletIcon />
          </Bullet>
          <SkillText selected={selectedSkill === i}>{skill.name}</SkillText>
        </Skill>
      ))}
    </SkillList>
  );
};

export default PortfolioLayout;
