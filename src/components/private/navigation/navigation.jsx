import { useState } from "react";
import { styled } from "styled-components";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { AiFillDashboard, AiFillVideoCamera } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { MdForum } from "react-icons/md";

export default function Navigation() {
  const [toggleNav, setToggleNav] = useState(true);
  const navList = [
    { icon: <AiFillDashboard />, name: "Dashboard" },
    { icon: <FaBlog />, name: "Blog" },
    { icon: <MdForum />, name: "Forum" },
    { icon: <AiFillVideoCamera />, name: "Videos" },
  ];

  return (
    <>
      <Nav show={toggleNav}>
        <ul>
          {navList.map((item) => (
            <li key={item.name}>
              <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <Btn onClick={() => setToggleNav(!toggleNav)}>
          {toggleNav ? <BsArrowBarLeft /> : <BsArrowBarRight />}
        </Btn>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  position: relative;
  height: 100vh;
  transition: grid-template-columns 0.4s;
  background-color: #c4c4c4;
  /* width: 200px; */
  display: grid;
  grid-template-columns: ${(props) => (props.show ? "1fr" : "0fr")};
  ul {
    overflow: hidden;
  }
  li {
    padding: 0.4em;
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 0.4em;

    span {
      display: inline-flex;
    }

    &:hover {
      background-color: #b4b4b4;
    }
  }
`;

const Btn = styled.button`
  height: fit-content;
  width: 100;
  align-self: end;
  padding: 0.4em;
  border: none;

  svg {
    font-size: 1.25rem;
  }
`;

// BsArrowBarRight
// BsArrowBarLeft
