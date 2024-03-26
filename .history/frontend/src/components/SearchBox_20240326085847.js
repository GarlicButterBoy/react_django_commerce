import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
    return <Form onSubmit={submitHandler}>
      <Form.Control type></Form.Control>
  </Form>;
}

export default SearchBox;
