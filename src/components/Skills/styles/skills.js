import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import colors from "../../../assets/colors";
import { contentContainer, fullPageWrapper } from "../../../styles/common";

const bounce = keyframes`
  2% {
      right: 2px;
  }
  25% {
      right: 4px;
  }
  50% {
      right: 6px;
  }
  75% {
      right: 4px;
  }
  100% {
      right: 2px;
  }
`;

export const Container = styled.div`
  ${fullPageWrapper}
  padding: ${({ height, contentHeight }) =>
    height - contentHeight < 200 ? `100px 10px 20px 10px` : `0 20px`};
  @media (max-height: 400px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  @media (min-width: 600px) {
    flex-direction: row;
    max-width: 800px;
  }
  @media (max-height: 400px) and (max-width: 800px) {
    max-width: 600px;
  }
`;

export const Body = styled.div`
  ${contentContainer}
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  text-shadow: 2px 2px #000;
`;

export const Projects = styled.div`
  flex: 1;
`;

export const Sidebar = styled.div`
  ${contentContainer}
  display: flex;
  flex-direction: column;
  height: 150px;
  margin-bottom: 20px;
  padding: 20px;
  border: solid #fff;
  border-width: 2px 0 0 2px;
  overflow-y: auto;
  cursor: pointer;
  @media (min-height: 800px) {
    height: auto;
  }
  @media (min-width: 600px) {
    margin: 0 20px 0 0;
    height: auto;
    cursor: default;
  }
`;

export const SubHeader = styled.h3`
  display: flex;
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  text-shadow: 2px 2px #000;
`;

export const ChevronRight = styled.div`
  position: relative;
  display: flex;
  width: 1.1rem;
  -webkit-filter: drop-shadow(1px 1px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(1px 1px rgba(0, 0, 0, 0.7));
  animation: ${bounce} 1s ease-in-out infinite;
`;

export const BackButton = styled.div`
  width: 1.5rem;
  -webkit-filter: drop-shadow(1px 1px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(1px 1px rgba(0, 0, 0, 0.7));
  cursor: pointer;
  &:hover svg {
    fill: ${`rgba(${colors.paletteThree.join(", ")}, 1)`};
  }
  &:active svg {
    fill: ${`rgba(${colors.paletteThree.join(", ")}, .8)`};
    transform: scale(0.98);
  }
`;

export const SkillList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

export const Skill = styled.div`
  display: flex;
  margin-right: 15px;
  padding: 10px 0;
  cursor: pointer;
  &:hover svg {
    fill: ${`rgba(${colors.paletteThree.join(", ")}, 1)`};
  }
  &:active {
    & :nth-of-type(2) {
      transform: scale(0.98);
      color: #ddd;
    }
    & svg {
      fill: ${`rgba(${colors.paletteThree.join(", ")}, .8)`};
    }
  }
  @media (min-width: 1000px) {
    margin-right: 0;
  }
`;

export const SkillText = styled.div`
  color: ${({ selected }) =>
    selected ? `rgba(${colors.paletteFour.join(", ")}, 1)` : "inherit"};
  text-shadow: 2px 2px #000;
  white-space: nowrap;
`;

export const Bullet = styled.div`
  ${({ absolute, selected }) =>
    absolute &&
    `
    position: absolute;
    top: ${`calc(4% + (16.6% * ${selected}) )`};
    left: 0;
    transition: top .3s ease;

  `}
  margin-right: 8px;
  width: 0.8rem;
  & svg {
    fill: ${({ absolute }) =>
      absolute ? `rgba(${colors.paletteFour.join(", ")}, 1)` : "transparent"};
  }
`;
