import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Link from "next/link";

export default function MainNav() {
  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Link href="/" passHref>
        <Navbar.Brand>Health Intelligence</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/home" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/feed" passHref>
            <Nav.Link>Feed</Nav.Link>
          </Link>
          <Link href="/health" passHref>
            <Nav.Link>Monitor</Nav.Link>
          </Link>
          <Link href="/doctor" passHref>
            <Nav.Link>Doctor</Nav.Link>
          </Link>
          <Link href="/profile" passHref>
            <Nav.Link>Profile</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
