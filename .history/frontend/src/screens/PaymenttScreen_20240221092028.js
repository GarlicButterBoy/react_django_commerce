import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
//import { savePaymentMethod } from "../actions/cartActions";

function PaymenttScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

    const dispatch = useDispatch();
    const [payment, se]

  if (!shippingAddress.address) {
    history.push("/shipping");
  }
  return <div></div>;
}

export default PaymenttScreen;
