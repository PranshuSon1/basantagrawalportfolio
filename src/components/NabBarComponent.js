import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../assets/basantagrawalTransparent.png';
import navbarImage from '../assets/navbarimagejpg.jpg';

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" variant="dark" sticky="top">
      <Container>
        <Nav.Link as={Link} to="home" smooth={true} duration={500}>

        <Navbar.Brand>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={navbarImage} alt="navbar-image"
           style={{
             width: "40px",
             height: "40px",
             borderRadius: "50%",
             objectFit: "cover",
            }} />
        </Navbar.Brand>
            </Nav.Link>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>About Us</Nav.Link>
            <Nav.Link as={Link} to="media" smooth={true} duration={500}>Media Center</Nav.Link>
            {/* <Nav.Link as={Link} to="news" smooth={true} duration={500}>News</Nav.Link> */}
            {/* <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact Us</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
