import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">
          ProShop
        </Navbar.Brand>
        <Navbar.Toggle aria-c></Navbar.Toggle>
      </Container>
    </Navbar>
  );
}

export default Header;
