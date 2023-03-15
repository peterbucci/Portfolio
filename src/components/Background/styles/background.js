import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import colors from "../../../assets/colors";

const wave = keyframes`
  2% {
      transform: translateX(1);
  }
  25% {
      transform: translateX(-25%);
  }
  50% {
      transform: translateX(-50%);
  }
  75% {
      transform: translateX(-25%);
  }
  100% {
      transform: translateX(1);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100dvh;
  background: linear-gradient(
    315deg,
    ${`rgba(${colors.paletteOne.join(", ")}, 1)`} 3%,
    ${`rgba(${colors.paletteTwo.join(", ")}, 1)`} 38%,
    ${`rgba(${colors.paletteThree.join(", ")}, 1)`} 68%,
    ${`rgba(${colors.paletteFour.join(", ")}, 1)`} 98%
  );
  z-index: -2;
`;

export const Wave = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 8em;
  animation: ${wave} 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  bottom: 0;
  left: 0;
  z-index: -1;
  &:nth-of-type(2) {
    bottom: -1.25em;
    animation: ${wave} 18s linear reverse infinite;
    opacity: 0.8;
  }
  &:nth-of-type(3) {
    bottom: -2.5em;
    animation: ${wave} 20s -1s reverse infinite;
    opacity: 0.9;
  }
`;
