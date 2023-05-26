import { Link } from "react-router-dom";
import { styled } from "styled-components";
export default function PublicHeader() {
  const navSections = [
    {
      name: "O mnie",
      link: "about",
      button: false
    },
    {
      name: "Umiejętności",
      link: "skills",
      button: false
    },
    {
      name: "Doświadczenie",
      link: "experience",
      button: false
    },
    {
      name: "Kontakt",
      link: "contact",
      button: false
    },
    {
      name: "CV",
      button: true,
    },


  ];

  return (
    <Header>
      <h2>xLazure</h2>
      <div>
      <NavItems>
        {navSections.map((item) => {
          if (item.button) {
            return <button key={item.name}>{item.name}</button>
          } else {
            return <a href={`#${item.link}`} key={item.name}>
              <li>{item.name}</li>
            </a>
          }

        }

        )}
      </NavItems>
      <Link to="/login">Mój Portal</Link>
      </div>
    </Header>
  );
}
// 27AF8F
const NavItems = styled.ul`

color: rgba(183, 77, 240, 0.6);
  display: inline-flex;
  button {
    transition: box-shadow 0.4s;
      height:fit-content;
      align-self:center;
      background: none;
      color: inherit;
      padding: .5em 4em;
      font-weight: 700;
      border: 2px solid rgba(183, 77, 240, 0.6);
      border-radius:4px;
      box-shadow: 0px 0px 1px 0px rgba(183, 77, 240, 0.6);
      &:hover {
        box-shadow: 0px 0px 6px 0px rgba(183, 77, 240, 0.6)
      }
    }
  a {
    text-decoration: none;
    color: inherit;
    li {
      list-style-type: none;
      font-weight: 700;
    }
    &:hover {
      border-bottom: 1px solid;
    }
  }
`;

const Header = styled.header`
  position:sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content:space-between;
  align-items:center;
  width: 100%;
  border-bottom: 2px solid #c3c3c3;
  padding: 0 2em;
  a {
    padding: 0.5em 2em;
    &:last-child {
      padding: 0.5em 0 0.5em 2em;
    }
  }
`;
