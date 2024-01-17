import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapse>
      <Container>
        <a class="navbar-brand" href="/">
          ProShop
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/cart">
                Cart
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
