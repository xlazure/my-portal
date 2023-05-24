import { styled } from "styled-components";
import Navigation from "../components/private/navigation/navigation";
import Dashboard from "../views/dashboard";

export default function PrivateLayout() {
  return (
    <Wrapper>
      <Navigation />
      <Dashboard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
`;
