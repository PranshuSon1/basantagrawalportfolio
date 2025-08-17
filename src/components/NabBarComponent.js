import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller, Link as ScrollLink } from "react-scroll";
import logo from '../assets/basantagrawalTransparent.png';
import navbarImage from '../assets/profilecrop.png';

export default function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  // Scroll to section if redirected with state
  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 500,
        smooth: true,
        offset: -70, // adjust for navbar height
      });
    }
  }, [location]);

  const handleNavClick = (section) => {
    if (location.pathname === "/") {
      // Already on home, just scroll
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    } else {
      // Navigate to home and tell it which section to scroll
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <Navbar expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand
          onClick={() => handleNavClick("home")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={navbarImage}
            alt="navbar-image"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  onClick={() => handleNavClick("home")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("about")}>
              About Us
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("media")}>
              Media Center
            </Nav.Link>
            <Nav.Link as={ScrollLink} to="news" smooth={true} duration={500}>
              News
            </Nav.Link>
            {/* <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact Us</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
