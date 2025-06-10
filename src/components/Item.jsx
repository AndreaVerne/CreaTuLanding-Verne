import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom"

const ItemDetail = ({ detail }) => {
  const {name, price, img} = detail;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {/* <span>{description}</span> */}
          {/* <br/> */}
          <span>${price}</span>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Link to={'/item/'+id} className="btn">Ver más</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
