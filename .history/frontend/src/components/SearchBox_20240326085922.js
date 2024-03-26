import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBox() {
    const [keyword, setKeyword] = useState('');
    

  const submitHandler = (e) => {
    e.preventDefault();
  };
    return <Form onSubmit={submitHandler}>
      <Form.Control type='text' name='q' onChange={}></Form.Control>
  </Form>;
}

export default SearchBox;
