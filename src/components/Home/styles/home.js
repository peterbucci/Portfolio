import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
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
    height - contentHeight < 300 ? `100px 20px 20px 20px` : `0 20px`};
  @media (max-height: 400px) {
    padding: 0 20px;
  }
`;

export const Intro = styled.div`
  ${contentContainer}
  padding: 20px;
  max-width: 450px;
  @media (min-width: 1000px) {
    max-width: 600px;
  }
`;

export const HeaderText = styled.h2`
  margin: 0;
  font-size: 2rem;
  text-shadow: 2px 2px #000;
`;

export const SubheaderText = styled.div`
  margin-top: 5px;
  color: ${`rgba(${colors.paletteFour.join(", ")}, 1)`};
  font-size: 1rem;
  text-shadow: 2px 2px #000;
`;

export const LearnMore = styled(Link)`
  all: unset;
  display: flex;
  margin-top: 10px;
  font-size: 1rem;
  text-shadow: 2px 2px #000;
  cursor: pointer;
`;

export const RightArrow = styled.span`
  position: relative;
  display: flex;
  align-item: center;
  margin-left: 10px;
  width: 1rem;
  -webkit-filter: drop-shadow(1px 1px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(1px 1px rgba(0, 0, 0, 0.7));
  animation: ${bounce} 1s ease-in-out infinite;
`;
