import { forwardRef } from "react";
import {
  Container,
  HeaderText,
  Intro,
  LearnMore,
  RightArrow,
  SubheaderText,
} from "./styles/home";

const HomeLayout = ({ children, height, contentHeight }) => {
  return (
    <Container height={height} contentHeight={contentHeight}>
      {children}
    </Container>
  );
};

HomeLayout.Intro = forwardRef(({ children }, ref) => {
  return (
    <Intro ref={ref}>
      {children}
      <SubheaderText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SubheaderText>
      <LearnMore to="/about" state={{ behavior: "smooth" }}>
        Learn More About Me
        <RightArrow>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
              fill="currentColor"
            />
          </svg>
        </RightArrow>
      </LearnMore>
    </Intro>
  );
});

HomeLayout.HeaderText = forwardRef(({ phraseGroups }, ref) => {
  return phraseGroups.map((_, i) => (
    <HeaderText key={i} ref={(el) => (ref.current[i] = el)}></HeaderText>
  ));
});

export default HomeLayout;
