import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/my-logo.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false); // To check if user has scrolled or not

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link
            href="#home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={
              activeLink === "skills" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("skills")}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("projects")}
          >
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
