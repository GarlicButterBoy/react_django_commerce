import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand variant="dark">ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nac" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i>Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <i className="fas fa-user"></i>Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
