import BulletIcon from "../../assets/icons/BulletIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import {
  Bullet,
  ChevronRight,
  Header,
  Skill,
  SkillList,
  SkillText,
  Sidebar,
} from "./styles/sidebar";

export default function SidebarLayout({ children, ...restProps }) {
  return <Sidebar {...restProps}>{children}</Sidebar>;
}

SidebarLayout.Header = ({ children }) => {
  return (
    <Header>
      <ChevronRight>
        <ChevronRightIcon />
      </ChevronRight>
      {children}
    </Header>
  );
};

SidebarLayout.Skills = ({
  skills,
  onSkillClick,
  selectedSkills,
  multiToSingle,
  refs,
}) => {
  const bulletRefs = refs.current;
  return (
    <SkillList>
      {selectedSkills.length > 0 &&
        selectedSkills.map((skill, i) => {
          const bullet = bulletRefs[skill];
          const left = bullet.offsetLeft;
          const top = bullet.offsetTop;
          return (
            <Bullet
              key={"bullet" + i}
              selected={skill}
              absolute={true}
              transition={selectedSkills.length === 1 && !multiToSingle}
              top={top}
              left={left}
            >
              <BulletIcon />
            </Bullet>
          );
        })}
      {skills.map((skill, i) => (
        <Skill key={i} onClick={() => onSkillClick(selectedSkills, i)}>
          <Bullet ref={(el) => (refs.current[i] = el)}>
            <BulletIcon />
          </Bullet>
          <SkillText selected={selectedSkills.includes(i)}>
            {skill.name}
          </SkillText>
        </Skill>
      ))}
    </SkillList>
  );
};
