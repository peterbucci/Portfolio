import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import colors from "../../../assets/colors";
import { contentContainer, fullPageWrapper } from "../../../styles/common";

const fadein = keyframes`
  0% {
    opacity: 0;
    transform: scale(.90);
  }
  2% {
      opacity: .2;
      transform: scale(.92);
  }
  25% {
      opacity: .4;
      transform: scale(.94);
  }
  50% {
      opacity: .6;
      transform: scale(.96);
  }
  75% {
      opacity: .8;
      transform: scale(.98);
  }
  100% {
      opacity: 1;
      transform: scale(1);
  }
`;

const fadeout = keyframes`
  2% {
    opacity: 1;
  }
  25% {
    opacity: .8;
  }
  50% {
    opacity: .6;
  }
  75% {
    opacity: .4;
  }
  100% {
    opacity: .2;
  }
`;

export const Container = styled.div`
  ${fullPageWrapper}
  position: relative;
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
  opacity: ${({ selectedProject }) => (selectedProject ? "0" : "1")};
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
  display: flex;
`;

export const ProjectList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 20px 0 0 0;
  list-style-type: none;
`;

export const Project = styled.li`
  text-shadow: 2px 2px #000;
  cursor: pointer;
  user-select: none;
  transition: color 0.4s ease-in-out, transform 0.4s ease-in-out;
  &:hover {
    color: rgba(${colors.paletteFour.join(", ")}, 1);
    transform: scale(1.02);
  }
`;

export const ProjectScreenshotWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  margin: 10px;
`;

export const ProjectScreenshot = styled.div`
  ${({ absolute }) =>
    absolute &&
    `
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  `}
  flex: 1;
  overflow: hidden;
  background: #fff;
  background-image: ${({ background }) => `url(${background})`};
  background-size: 250% auto;
  background-repeat: no-repeat;
  box-shadow: 10px 10px ${`rgba(${colors.paletteThree.join(", ")}, 1)`};
  animation: ${({ absolute }) =>
    css`
      ${absolute ? fadeout : fadein} .4s ease-in-out 1 forwards;
    `};
`;
