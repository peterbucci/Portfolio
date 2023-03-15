import { css } from "@emotion/react";

export const fullPageWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  scroll-snap-align: start;
  box-sizing: border-box;
`;

export const contentContainer = css`
  max-height: calc(100dvh - 160px);
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 3px solid;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  overflow-y: auto;
  box-sizing: border-box;
  @media (max-height: 400px) {
    max-height: calc(100dvh - 40px);
  }
`;
