import React, { useState, useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

function PlaceOrderScreen() {
  const cart = useSelector((state) => state.cart);
    return <div>
      <CheckoutSteps
  </div>;
}

export default PlaceOrderScreen;
