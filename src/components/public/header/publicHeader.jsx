import { Link } from "react-router-dom";
import { styled } from "styled-components";
export default function PublicHeader() {
  const navSections = [
    {
      name: "O mnie",
      link: "about",
    },
    {
      name: "Umiejętności",
      link: "skills",
    },
    {
      name: "Doświadczenie",
      link: "experience",
    },
    {
      name: "Kontakt",
      link: "contact",
    },
  ];

  return (
    <Header>
      <NavItems>
        {navSections.map((item) => (
          <a href={`#${item.link}`}>
            <li>{item.name}</li>
          </a>
        ))}
      </NavItems>
      <Link to="/login">Log in</Link>
    </Header>
  );
}
// 27AF8F
const NavItems = styled.ul`
  display: inline-flex;
  a {
    text-decoration: none;
    li {
      list-style-type: none;
      color: rgba(183, 77, 240, 0.6);
      font-weight: 700;
    }
    &:hover {
      border-bottom: 1px solid;
    }
  }
`;

const Header = styled.header`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid #c3c3c3;
  a {
    padding: 0.5em 2em;
  }
`;
