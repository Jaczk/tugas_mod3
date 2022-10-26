import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "react-bootstrap/Card";

export default function Rand() {
  const [count, setRandomCount] = useState(function generateRandomInteger() {
    return Math.floor(Math.random() * 100);
  });
  function clickHandler(e) {
    setRandomCount(Math.floor(Math.random() * 100));
  }
  return (
    <Container>
      <div>
        <h1> {count} </h1>
        <p>
          <button onClick={clickHandler}> Click </button>
        </p>
      </div>
    </Container>
  );
}
