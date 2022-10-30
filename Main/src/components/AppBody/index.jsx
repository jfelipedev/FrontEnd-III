import { Container } from "./style";
import { LeftSideMenu } from "../LeftSideMenu";

export function AppBody() {
  return (
    <Container>
      <div className="screen">
      <LeftSideMenu />
      </div>
    </Container>
  );
}
