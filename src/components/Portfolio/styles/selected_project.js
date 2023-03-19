import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import colors from "../../../assets/colors";

const shrink = keyframes`
  0% {
    transform: scale(1.1) translate(-45%, -45%);
    opacity: 0;
  }
  2% {
    transform: scale(1.08) translate(-46%, -46%);
    opacity: .2;
  }
  25% {
    transform: scale(1.06) translate(-47%, -47%);
    opacity: .4;
  }
  50% {
    transform: scale(1.04) translate(-48%, -48%);
    opacity: .6;
  }
  75% {
    transform: scale(1.02) translate(-49%, -49%);
    opacity: .8;
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
`;

const grow = keyframes`
  0% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
  2% {
    transform: scale(1.02) translate(-49%, -49%);
    opacity: .8;
  }
  25% {
    transform: scale(1.04) translate(-48%, -48%);
    opacity: .6;
  }
  50% {
    transform: scale(1.06) translate(-47%, -47%);
    opacity: .4;
  }
  75% {
    transform: scale(1.08) translate(-46%, -46%);
    opacity: .2;
  }
  100% {
    transform: scale(1.1) translate(-45%, -45%);
    opacity: 0;
  }
`;

export const SelectedProject = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 20px 30px 20px 20px;
  width: 100%;
  height: calc(100dvh - 200px);
  max-width: 825px;
  box-shadow: 0 0 10px #000;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid #fff;
  border-width: 0 2px 2px 0;
  box-sizing: border-box;
  animation: ${({ selectedProject }) =>
    css`
      ${selectedProject ? shrink : grow} .4s ease-in-out 1 forwards;
    `};
  overflow: hidden;
  z-index: 101;
`;

export const Banner = styled.div`
  flex: 0 0 200px;
  position: relative;
  box-shadow: 10px 10px ${`rgba(${colors.paletteThree.join(", ")}, 1)`};
  overflow: hidden;
  z-index: 100;
`;

export const BannerImg = styled.img`
  width: auto;
  height: 300%;
  transform: rotate(-10deg) translateY(-20%);
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  width: 1.5rem;
  cursor: pointer;
  & svg {
    fill: ${`rgba(${colors.paletteTwo.join(", ")}, 1)`};
    -webkit-filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.7));
    filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.7));
  }
  &:hover svg {
    fill: ${`rgba(${colors.paletteThree.join(", ")}, 1)`};
  }
`;

export const Header = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
`;

export const ProjectName = styled.h2`
  margin: 0;
  text-shadow: 2px 2px #000;
`;

export const TechStack = styled.div`
  font-size: 0.8rem;
  text-shadow: 2px 2px #000;
`;

export const Menu = styled.menu`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
  padding: 10px 0;
`;

export const MenuItem = styled.div`
  padding: 0 10px;
  font-size: 0.9rem;
  color: ${({ selected }) =>
    selected ? `rgba(${colors.paletteFour.join(", ")}, 1)` : "inherit"};
  cursor: pointer;
  transition: color 0.4s ease-in-out;
  &:hover {
    color: rgba(${colors.paletteFour.join(", ")}, 1);
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  font-size: 0.9rem;
  text-shadow: 2px 2px #000;
`;

export const ExternalLinks = styled.div`
  align-self: flex-end;
  display: flex;
  margin: 20px 0;
`;

export const ExternalLink = styled(Link)`
  all: unset;
  margin: 0 5px;
  cursor: pointer;
`;
