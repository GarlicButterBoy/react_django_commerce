import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder=""
                >

                </Form.Control>
            </Form.Group>
        </Form>
  </FormContainer>;
}

export default LoginScreen;
