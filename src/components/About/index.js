import { forwardRef } from "react";
import { Bio, Container, Content, Header, Paragraph } from "./styles/about";

const AboutLayout = forwardRef(({ children, height, contentHeight }, ref) => {
  return (
    <Container height={height} contentHeight={contentHeight}>
      <Content ref={ref}>{children}</Content>
    </Container>
  );
});

AboutLayout.Header = forwardRef((props, ref) => {
  return <Header ref={(el) => (ref.current[0] = el)} {...props} />;
});

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
