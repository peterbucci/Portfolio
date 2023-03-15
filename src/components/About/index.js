import { forwardRef } from "react";
import { Bio, Container, Content, Header, Paragraph } from "./styles/about";

const AboutLayout = forwardRef(({ children, height, contentHeight }, ref) => {
  return (
    <Container height={height} contentHeight={contentHeight}>
      <Content ref={ref}>{children}</Content>
    </Container>
  );
});

AboutLayout.Header = ({ children, onClick }) => {
  return <Header onClick={onClick}>{children}</Header>;
};

AboutLayout.Bio = ({ bio }) => {
  return (
    <Bio>
      {bio.map((text, i) => (
        <Paragraph key={i}>{text}</Paragraph>
      ))}
    </Bio>
  );
};

export default AboutLayout;
