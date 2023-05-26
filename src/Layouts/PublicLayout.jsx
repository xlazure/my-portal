import { styled } from "styled-components";
import PublicHeader from "../components/public/header/publicHeader";
import Home from "../views/home";
import AboutMe from "../views/home/about-me/about-me";
import TopSection from "../views/home/top-section/top-section";
import { useState } from "react";

export default function PublicLayout() {
  const [show,setShow] = useState(true)
  return (
    <>
      <TopSection />
      {
        show ? <Rel>
        <PublicHeader />
        <Wrapper>
          {/* <Home /> */}
          <AboutMe />
        </Wrapper>
      </Rel> : null
      }
    </>
  );
}
const Rel = styled.div`
  position: relative;
  min-height:100vh;

`
const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
