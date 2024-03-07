import { Navbar, Container, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div style={{ maxWidth: "40px" }}>
            <Image
              src="https://zukashikute.github.io/resume/static/media/JradTransparent.b87fca4287cd6a11c41d.png"
              roundedCircle
              fluid
            />
          </div>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
