import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listUsers } from "../actions/userActions";

function userListScreen() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => userList);
    const { loading, error, users } = userList;
    
    useEffect(() => {

    }, [])
  return <div></div>;
}

export default userListScreen;
