import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { getUserDetails } from "../actions/userActions";

function UserEditScreen({ match, history }) {
  const userId = match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setAdmin] = useState("false");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {}, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Link to="/admin/userlist">Go Back</Link>
          <FormContainer>
              <h1>Edit User</h1>
              
              {loading ? (<Loader />)
                  : error ? (<Message variant='danger'>{error}</Message>)
                      : ()}

        
      </FormContainer>
    </div>
  );
}

export default UserEditScreen;
