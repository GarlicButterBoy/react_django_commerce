import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
    return (
        pages>1 && (<Paginator></Paginator>)
    );
}

export default Paginate;
