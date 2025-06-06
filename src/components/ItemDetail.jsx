import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ detail }) => {
  return (
    <Card>
      <Card.Img variant="top" src={detail.img} />
      <Card.Body>
        <Card.Title>{detail.name}</Card.Title>
        <Card.Text>
          {/* <span>{detail.description}</span> */}
          {/* <br/> */}
          <span>${detail.price}</span>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button className="btn">Ver más</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
