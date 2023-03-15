import { Container, Wave } from "./styles/background";

export default function Background({ height }) {
  return (
    <Container height={height}>
      <Wave />
      <Wave />
      <Wave />
    </Container>
  );
}
