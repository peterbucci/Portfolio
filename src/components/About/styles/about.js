import styled from "@emotion/styled";
import { contentContainer, fullPageWrapper } from "../../../styles/common";

export const Container = styled.div`
  ${fullPageWrapper}
  padding: ${({ height, contentHeight }) =>
    height - contentHeight < 200 ? `100px 10px 20px 10px` : `0 20px`};
  @media (max-height: 400px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  ${contentContainer}
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 600px;
  @media (min-width: 1000px) {
    max-width: 700px;
  }
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  text-shadow: 2px 2px #000;
`;

export const Bio = styled.div`
  font-size: 1rem;
  text-shadow: 2px 2px #000;
`;

export const Paragraph = styled.p``;
