import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CheckoutSteps({ step1, step2, step3, step4 }) {
    return <Nav className="justify-content-center mb-4">
        <Nav.Item>
            <LinkContainer to='/login'>
                <Nav.Link></Nav.Link>
            </LinkContainer>
      </Nav.Item>
  </Nav>;
}

export default CheckoutSteps;
