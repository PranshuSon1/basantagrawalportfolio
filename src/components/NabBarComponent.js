"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";

export default function NavbarComponent() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Scroll to section if redirected with hash
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        try {
          scroller.scrollTo(hash, {
            duration: 500,
            smooth: true,
            offset: -70, // adjust for navbar height
          });
        } catch (error) {
          // Fallback to native scroll if react-scroll fails
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    }
  }, [pathname]);

  const handleNavClick = (section) => {
    if (pathname === "/") {
      // Already on home, just scroll
      try {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -70,
        });
      } catch (error) {
        // Fallback to native scroll if react-scroll fails
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Try finding Element by name attribute
          const elementByName = document.querySelector(`[name="${section}"]`);
          if (elementByName) {
            elementByName.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    } else {
      // Navigate to home with hash
      router.push(`/#${section}`);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" >
      <Container>
        <Navbar.Brand
          onClick={() => handleNavClick("home")}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            // flex: "1", // helps centering in navbar
          }}
          // className="mx-auto"  
        >
          <img
            src="/profileCrop.jpg"
            alt="navbar-image"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              // marginBottom: "2px",
            }}
            className="img-fluid"
          />
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              maxHeight: "40px",
              objectFit: "contain",
            }}
            className="img-fluid"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("about")}>
              About Us
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("media")}>
              Media Center
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("news")}>
              News
            </Nav.Link>
            <Nav.Link as={Link} href={"/login"}>
              Admin
            </Nav.Link>
            {/* <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact Us</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
