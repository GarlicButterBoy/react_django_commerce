import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";

function ShippingScreen({ history }) {
      const [address, setName] = useState("");
      const [email, setEmail] = useState("");
  return <FormContainer>Shipping Screen</FormContainer>;
}

export default ShippingScreen;
