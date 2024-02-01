import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetails } from "../actions/productActions";

function ProductScreen({ match }) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, []);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      {
        loading ? (<Loader />)
          : error ? (<Message variant="danger">{error}</Message>)
            :
            ()
      }

      
    </div>
  );
}

export default ProductScreen;
