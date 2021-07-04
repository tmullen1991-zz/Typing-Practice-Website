import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

const Sidecard = props => {

  return (
    <Card className="my-2"style={{ width: "9rem" }}>
      <Card.Body>
        <Card.Title ><span style={{fontSize: "1.2rem"}}>{props.difficulty}</span></Card.Title>
        <Card.Text><span style={{fontSize: ".8rem"}}>{props.description}</span></Card.Text>
        <Button variant="primary" onClick={props.call}>Go!</Button>
      </Card.Body>
    </Card>
  );
}

export default Sidecard;
